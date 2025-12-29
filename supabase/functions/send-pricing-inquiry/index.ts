import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PricingInquiryRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedServices: {
    name: string;
    priceFrom: number;
    priceType: string;
  }[];
  totals: {
    oneTimeTotal: number;
    oneTimeTotalMax: number;
    monthlyTotal: number;
    monthlyTotalMax: number;
  };
}

async function sendEmail(apiKey: string, to: string[], subject: string, html: string, replyTo?: string) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${apiKey}`);

  const body: Record<string, unknown> = {
    from: "Fotz Studio <onboarding@resend.dev>",
    to,
    subject,
    html,
  };

  if (replyTo) {
    body.reply_to = replyTo;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", response.status, errorText);
    throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!rawApiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    // Clean the API key - remove any whitespace or newline characters
    const RESEND_API_KEY = rawApiKey.trim().replace(/[\r\n]/g, '');
    console.log("RESEND_API_KEY length after cleaning:", RESEND_API_KEY.length);

    const { name, email, phone, message, selectedServices, totals }: PricingInquiryRequest = await req.json();

    console.log("Received pricing inquiry from:", email);
    console.log("Selected services:", selectedServices.length);

    // Format services list
    const servicesHtml = selectedServices
      .map(s => `<li>${s.name} - od ${s.priceFrom.toLocaleString('pl-PL')} PLN (${s.priceType})</li>`)
      .join("");

    // Format totals
    const totalsHtml = `
      ${totals.oneTimeTotal > 0 ? `<p><strong>Koszty jednorazowe:</strong> ${totals.oneTimeTotal.toLocaleString('pl-PL')} - ${totals.oneTimeTotalMax.toLocaleString('pl-PL')} PLN</p>` : ''}
      ${totals.monthlyTotal > 0 ? `<p><strong>Koszty miesięczne:</strong> ${totals.monthlyTotal.toLocaleString('pl-PL')} - ${totals.monthlyTotalMax.toLocaleString('pl-PL')} PLN/mies.</p>` : ''}
    `;

    // Send notification to admin
    console.log("Sending admin email...");
    const adminEmailResponse = await sendEmail(
      RESEND_API_KEY,
      ["a.mazziarz@gmail.com"],
      `Nowe zapytanie z cennika od ${name}`,
      `
        <h1>Nowe zapytanie ofertowe z konfiguratora cennika</h1>
        
        <h2>Dane kontaktowe:</h2>
        <ul>
          <li><strong>Imię:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Telefon:</strong> ${phone}</li>` : ''}
        </ul>
        
        <h2>Wiadomość:</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <h2>Wybrane usługi:</h2>
        <ul>${servicesHtml}</ul>
        
        <h2>Szacunkowa wycena:</h2>
        ${totalsHtml}
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          To zapytanie zostało wysłane przez konfigurator cennika na stronie fotz.pl
        </p>
      `,
      email
    );

    console.log("Admin email sent:", JSON.stringify(adminEmailResponse));

    // Send confirmation to client
    console.log("Sending client confirmation email...");
    const clientEmailResponse = await sendEmail(
      RESEND_API_KEY,
      [email],
      "Dziękujemy za zapytanie - Fotz Studio",
      `
        <h1>Dziękujemy za zainteresowanie, ${name}!</h1>
        
        <p>Otrzymaliśmy Twoje zapytanie ofertowe i skontaktujemy się z Tobą w ciągu 24 godzin.</p>
        
        <h2>Podsumowanie Twojego zapytania:</h2>
        
        <h3>Wybrane usługi:</h3>
        <ul>${servicesHtml}</ul>
        
        <h3>Szacunkowa wycena:</h3>
        ${totalsHtml}
        
        <h3>Twoja wiadomość:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        
        <p>Jeśli masz dodatkowe pytania, możesz odpowiedzieć na tę wiadomość lub skontaktować się z nami:</p>
        <ul>
          <li>Email: kontakt@fotz.pl</li>
          <li>Telefon: +48 123 456 789</li>
        </ul>
        
        <p>Pozdrawiamy,<br>Zespół Fotz Studio</p>
      `
    );

    console.log("Client confirmation email sent:", JSON.stringify(clientEmailResponse));

    return new Response(
      JSON.stringify({ 
        success: true, 
        adminEmail: adminEmailResponse,
        clientEmail: clientEmailResponse 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-pricing-inquiry function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

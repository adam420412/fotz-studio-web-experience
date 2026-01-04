import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingNotification {
  client_name: string;
  client_email: string;
  client_phone?: string;
  booking_date: string;
  booking_time: string;
  notes?: string;
}

async function sendEmail(apiKey: string, to: string[], subject: string, html: string) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${apiKey}`);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers,
    body: JSON.stringify({
      from: "Fotz Studio <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", response.status, errorText);
    throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!rawApiKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const RESEND_API_KEY = rawApiKey.trim().replace(/[\r\n]/g, '');
    const booking: BookingNotification = await req.json();
    
    console.log("Sending booking notification for:", booking.client_name);

    const emailResponse = await sendEmail(
      RESEND_API_KEY,
      ["adam@fotz.pl"],
      `Nowa rezerwacja: ${booking.client_name} - ${booking.booking_date} ${booking.booking_time}`,
      `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0E0E0E; color: #fff; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 16px; padding: 32px; }
            .header { text-align: center; margin-bottom: 24px; }
            .logo { color: #A11B52; font-size: 24px; font-weight: bold; }
            h1 { color: #fff; font-size: 24px; margin: 16px 0; }
            .badge { display: inline-block; background: #A11B52; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-transform: uppercase; }
            .info-card { background: #252525; border-radius: 12px; padding: 20px; margin: 16px 0; }
            .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #333; }
            .info-row:last-child { border-bottom: none; }
            .label { color: #888; }
            .value { color: #fff; font-weight: 500; }
            .highlight { background: linear-gradient(135deg, #A11B52 0%, #FF6B9D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .notes { background: #252525; border-left: 4px solid #A11B52; padding: 16px; margin: 16px 0; border-radius: 0 8px 8px 0; }
            .cta { display: block; text-align: center; background: #A11B52; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin-top: 24px; font-weight: 600; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 32px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">FOTZ STUDIO</div>
              <h1>Nowa rezerwacja konsultacji</h1>
              <span class="badge">Oczekuje na potwierdzenie</span>
            </div>
            
            <div class="info-card">
              <div class="info-row">
                <span class="label">Klient</span>
                <span class="value">${booking.client_name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email</span>
                <span class="value">${booking.client_email}</span>
              </div>
              ${booking.client_phone ? `
              <div class="info-row">
                <span class="label">Telefon</span>
                <span class="value">${booking.client_phone}</span>
              </div>
              ` : ''}
              <div class="info-row">
                <span class="label">Data</span>
                <span class="value highlight">${booking.booking_date}</span>
              </div>
              <div class="info-row">
                <span class="label">Godzina</span>
                <span class="value highlight">${booking.booking_time}</span>
              </div>
            </div>
            
            ${booking.notes ? `
            <div class="notes">
              <strong>Notatki:</strong><br>
              ${booking.notes}
            </div>
            ` : ''}
            
            <a href="https://fotz.pl/admin/rezerwacje" class="cta">
              Zarządzaj rezerwacjami →
            </a>
            
            <div class="footer">
              © ${new Date().getFullYear()} Fotz Studio. Wszystkie prawa zastrzeżone.
            </div>
          </div>
        </body>
        </html>
      `
    );

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in notify-booking function:", errorMessage);
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

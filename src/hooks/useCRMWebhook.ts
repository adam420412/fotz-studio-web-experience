const CRM_WEBHOOK_URL = "https://uqkmdfpiwquooauvkgwb.supabase.co/functions/v1/crm-webhook";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  notes?: string;
}

interface BookingData {
  name: string;
  email: string;
  phone?: string;
  booking_date: string; // format: YYYY-MM-DD
  booking_time: string; // format: HH:MM
  service_type?: string;
  source?: string;
}

export async function sendLeadToCRM(data: LeadData): Promise<{ success: boolean; lead_id?: string; error?: string }> {
  try {
    const response = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "lead",
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          source: data.source || "fotz.pl",
          notes: data.notes || null,
        },
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("CRM webhook error:", result);
      return { success: false, error: result.error };
    }

    console.log("Lead sent to CRM:", result);
    return { success: true, lead_id: result.lead_id };
  } catch (error) {
    console.error("CRM webhook failed:", error);
    return { success: false, error: "Network error" };
  }
}

export async function sendBookingToCRM(data: BookingData): Promise<{ success: boolean; lead_id?: string; error?: string }> {
  try {
    const response = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "booking",
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          booking_date: data.booking_date,
          booking_time: data.booking_time,
          service_type: data.service_type || "konsultacja",
          source: data.source || "fotz.pl",
        },
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error("CRM webhook error:", result);
      return { success: false, error: result.error };
    }

    console.log("Booking sent to CRM:", result);
    return { success: true, lead_id: result.lead_id };
  } catch (error) {
    console.error("CRM webhook failed:", error);
    return { success: false, error: "Network error" };
  }
}

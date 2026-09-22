import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, planType, service, message } = body;

    // 1. Validation Guard Check
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    // 2. Mobile cleanup & timestamp generation for LeadRat
    const cleanedMobile = phone.replace(/\D/g, "").slice(-10);
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const submittedDate = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${String(now.getFullYear()).slice(-2)}`;
    const submittedTime = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    // 3. Dispatch lead to LeadRat CRM
    try {
      const crmApiKey =
        process.env.LEADRAT_API_KEY || "YTBlMzgxODItZWU0NC00M2I1LThhNDQtZWVlOTg3M2I0ZmFl";

      await fetch("https://connect.leadrat.com/api/v1/integration/Website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": crmApiKey,
        },
        body: JSON.stringify([
          {
            name: name,
            mobile: cleanedMobile,
            email: email || "",
            countryCode: "91",
            project: "Hero Properties",
            property: "Apartment",
            propertyType: planType || service || "3 & 4 BHK Luxury Residences",
            notes: `Lead Source: Hero Properties (heroproperties.in / heroproperties.co.in). Typology: ${planType || service || "General Enquiry"}. Message: ${message || "N/A"}`,
            submittedDate: submittedDate,
            submittedTime: submittedTime,
            subsource: "Google",
            leadStatus: "New",
          },
        ]),
      });
    } catch (crmError) {
      console.error("LeadRat CRM Integration Error:", crmError);
    }

    // 4. Dispatch Email via Resend
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY in environment variables.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipientEmail =
      process.env.LEAD_RECIPIENT_EMAIL || "realtyfmleads@gmail.com";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #FDFBF7; color: #121214; border: 1px solid #E8DEC8; border-radius: 12px; max-width: 560px; margin: auto;">
        <div style="border-bottom: 2px solid #E31826; padding-bottom: 12px; margin-bottom: 16px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #C5A059; font-weight: bold;">
            Hero Properties • Lead Notification
          </span>
          <h2 style="color: #121214; margin: 4px 0 0 0; font-size: 20px;">New Prospect Enquiry</h2>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #5A5D64; width: 140px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px 0; color: #121214; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5D64; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0; color: #121214;"><a href="tel:${phone}" style="color: #E31826; text-decoration: none; font-weight: bold;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5D64; font-weight: bold;">Email Address:</td>
            <td style="padding: 8px 0; color: #121214;">${email || "Not Provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #5A5D64; font-weight: bold;">Enquiry Type:</td>
            <td style="padding: 8px 0; color: #C5A059; font-weight: bold;">${planType || service || "General Consultation"}</td>
          </tr>
          ${
            message
              ? `<tr>
                  <td style="padding: 8px 0; color: #5A5D64; font-weight: bold;">Message:</td>
                  <td style="padding: 8px 0; color: #121214;">${message}</td>
                </tr>`
              : ""
          }
        </table>
        <hr style="border: none; border-top: 1px solid #E8DEC8; margin: 20px 0 12px 0;" />
        <p style="font-size: 11px; color: #888; margin: 0;">
          Dispatched from Hero Properties Portal (heroproperties.in / heroproperties.co.in) to LeadRat CRM & ${recipientEmail}.
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Hero Properties <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `New Lead: ${name} (${planType || "Hero Properties Enquiry"})`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("API Lead Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_7R4dcp4e_5gXR95tPyPzvZVpidf2est4o");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Save lead to leads.json in the project root (Backup)
    const leadsFilePath = path.join(process.cwd(), "leads.json");
    let leads = [];
    try {
      const fileData = await fs.readFile(leadsFilePath, "utf-8");
      leads = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist yet or is empty
    }
    
    const leadEntry = {
      ...data,
      timestamp: new Date().toISOString(),
    };
    
    // Simple push for every lead request
    leads.push(leadEntry);
    await fs.writeFile(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
    
    // 2. Send email via Resend
    const emailTo = process.env.RESEND_TO || "aros.salesengine@gmail.com";
    const subject = `🔥 NEW LEAD AROS: ${data.name}`;

    try {
      await resend.emails.send({
        from: "AROS Leads <onboarding@resend.dev>",
        to: emailTo,
        subject: subject,
        html: `
          <h3>Butiran Lead AROS Baru:</h3>
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>WhatsApp:</strong> ${data.phone}</p>
          <p><strong>Emel:</strong> ${data.email}</p>
          <p><strong>Website:</strong> ${data.websiteUrl || "Tiada Website"}</p>
          ${data.selectedPackage ? `<p><strong>Pakej Pilihan:</strong> ${data.selectedPackage}</p>` : ""}
          <p><strong>Masa Pendaftaran:</strong> ${new Date().toLocaleString("ms-MY")}</p>
        `,
      });
      console.log("Email sent successfully via Resend");
    } catch (emailError) {
      console.error("Error sending email via Resend:", emailError);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ success: false, error: "Failed to process lead" }, { status: 500 });
  }
}

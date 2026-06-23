import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name, email, phone, address, city, state, pincode, message,
      scopeId, projectType, complexity, timeline, features, pdfBase64,
    } = body;

    const location = [address, city, state, pincode].filter(Boolean).join(", ");

    const attachment = pdfBase64
      ? [{ filename: `LSW-Scope-${scopeId}.pdf`, content: pdfBase64 }]
      : [];

    // Email 1 — to Lexical Software
    const { error: e1 } = await resend.emails.send({
      from: "Lexical Software <onboarding@resend.dev>",
      to: ["softwarelexical@gmail.com"],
      reply_to: email,
      subject: `[${scopeId}] New Scope — ${complexity} ${projectType}`,
      attachments: attachment,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#f6f8fa;padding:24px;border-radius:16px;">
          <div style="background:#2563EB;padding:20px 24px;border-radius:12px;margin-bottom:20px;">
            <h1 style="color:white;margin:0;font-size:20px;">New Scope Request</h1>
            <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px;">ID: ${scopeId}</p>
          </div>
          <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px;">
            <h2 style="font-size:14px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Project Details</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 0;color:#64748b;width:140px;">Project Type</td><td style="color:#0f172a;font-weight:600;">${projectType ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Complexity</td><td style="color:#0f172a;font-weight:600;">${complexity ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Timeline</td><td style="color:#0f172a;font-weight:600;">${timeline ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;vertical-align:top;">Features</td><td style="color:#0f172a;">${features || "None selected"}</td></tr>
            </table>
          </div>
          <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px;">
            <h2 style="font-size:14px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Client Details</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 0;color:#64748b;width:140px;">Name</td><td style="color:#0f172a;font-weight:600;">${name ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="color:#2563EB;">${email ?? "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="color:#0f172a;">${phone ?? "—"}</td></tr>
              ${location ? `<tr><td style="padding:6px 0;color:#64748b;vertical-align:top;">Address</td><td style="color:#0f172a;">${location}</td></tr>` : ""}
            </table>
          </div>
          ${message ? `<div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px;">
            <h2 style="font-size:14px;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;">Notes</h2>
            <p style="font-size:14px;color:#0f172a;margin:0;line-height:1.6;">${message}</p>
          </div>` : ""}
          <div style="text-align:center;padding:16px;font-size:12px;color:#94a3b8;">
          Lexical Software · softwarelexical@gmail.com · +91 9144462693 · +91 7415557442 · lexicalsoftware.in
          </div>
        </div>
      `,
    });

    if (e1) console.error("Email 1 error:", e1);

    // Email 2 — confirmation to client
    if (email) {
      const { error: e2 } = await resend.emails.send({
        from: "Lexical Software <onboarding@resend.dev>",
        to: [email],
        reply_to: "softwarelexical@gmail.com",
        subject: `Your Scope Request Received — ${scopeId}`,
        attachments: attachment,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#f6f8fa;padding:24px;border-radius:16px;">
            <div style="background:#2563EB;padding:20px 24px;border-radius:12px;margin-bottom:20px;">
              <h1 style="color:white;margin:0;font-size:20px;">We've received your scope!</h1>
              <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px;">Scope ID: ${scopeId}</p>
            </div>
            <div style="background:white;padding:24px;border-radius:12px;margin-bottom:16px;">
              <p style="font-size:15px;color:#0f172a;margin:0 0 16px;">Hi ${name?.split(" ")[0] ?? "there"},</p>
              <p style="font-size:14px;color:#475569;margin:0 0 12px;line-height:1.6;">
                Thank you for submitting your project scope. We've received your request for a
                <strong style="color:#0f172a;"> ${complexity} ${projectType}</strong> and will get back to you within <strong>24 hours</strong>.
              </p>
              <p style="font-size:14px;color:#475569;margin:0 0 20px;line-height:1.6;">
                Your scope document is attached to this email for your records.
              </p>
              <div style="background:#f8fafc;border-radius:10px;padding:16px;margin-bottom:20px;">
                <p style="font-size:13px;color:#64748b;margin:0 0 8px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Your Scope Summary</p>
                <p style="font-size:14px;color:#0f172a;margin:0 0 4px;">Project: <strong>${projectType}</strong></p>
                <p style="font-size:14px;color:#0f172a;margin:0 0 4px;">Complexity: <strong>${complexity}</strong></p>
                <p style="font-size:14px;color:#0f172a;margin:0;">Timeline: <strong>${timeline}</strong></p>
                ${features ? `<p style="font-size:13px;color:#64748b;margin:8px 0 0;">Features: ${features}</p>` : ""}
              </div>
              <p style="font-size:13px;color:#64748b;margin:0;">
                Reference your Scope ID <strong style="color:#2563EB;">${scopeId}</strong> in any future communication.
              </p>
            </div>
            <div style="text-align:center;padding:16px;font-size:12px;color:#94a3b8;">
              Lexical Software · softwarelexical@gmail.com · +91 9144462693 · +91 7415557442 · lexicalsoftware.in<br/>
            </div>
          </div>
        `,
      });
      if (e2) console.error("Email 2 error:", e2);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
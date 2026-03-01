import { NextRequest, NextResponse } from "next/server";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.WELCOME_FROM_EMAIL || "noreply@signalstackmedia.com";
const FROM_NAME = "DealSheet CRE";

function buildWelcomeHtml(name?: string): string {
  const greeting = name ? `Hi ${name},` : "Hi there,";
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
  <tr><td style="background:#1a2332;padding:40px 40px 30px;">
    <h1 style="color:#c9a84c;margin:0;font-size:28px;">DealSheet CRE</h1>
    <p style="color:#ffffff;margin:10px 0 0;font-size:14px;opacity:0.8;">Commercial Real Estate Deal Intelligence</p>
  </td></tr>
  <tr><td style="padding:40px;">
    <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 20px;">${greeting}</p>
    <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 20px;">Welcome to <strong>DealSheet CRE</strong> — your weekly briefing on commercial real estate transactions, cap rate movements, and market intelligence.</p>

    <div style="background:#f5f3ec;border-left:4px solid #c9a84c;padding:20px;margin:25px 0;border-radius:4px;">
      <p style="color:#1a2332;font-weight:bold;margin:0 0 10px;font-size:14px;">📊 SAMPLE INSIGHT</p>
      <p style="color:#333;margin:0;font-size:14px;line-height:1.5;">Industrial cap rates compressed another 15 bps in the Southeast last month, with a $312M portfolio trade in Atlanta signaling institutional appetite remains strong despite rate uncertainty.</p>
    </div>

    <p style="color:#333;font-size:15px;line-height:1.6;margin:0 0 5px;font-weight:bold;">Every weekly brief includes:</p>
    <ul style="color:#555;font-size:14px;line-height:2;margin:0 0 25px;padding-left:20px;">
      <li><strong>Deal of the Week</strong> — the one transaction that signals market direction</li>
      <li><strong>Major Transactions</strong> — significant deals with cap rates and context</li>
      <li><strong>Who's Moving</strong> — key personnel changes at major CRE firms</li>
      <li><strong>Market Intelligence</strong> — city-specific trends and pipeline updates</li>
      <li><strong>Cap Rate Watch</strong> — weekly movements by asset class and metro</li>
    </ul>

    <p style="color:#333;font-size:15px;line-height:1.6;margin:0 0 25px;">Your first issue arrives this Tuesday.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a2332;border-radius:8px;margin:25px 0;">
    <tr><td style="padding:25px 30px;">
      <p style="color:#c9a84c;font-weight:bold;margin:0 0 8px;font-size:16px;">🔓 Upgrade to DealSheet CRE Pro</p>
      <p style="color:#ffffff;margin:0 0 15px;font-size:14px;line-height:1.5;">Get daily deal alerts, full transaction databases, cap rate analytics, and exclusive market intelligence.</p>
      <a href="https://dealsheetcre.com/#pricing" style="display:inline-block;background:#c9a84c;color:#1a2332;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">View Pro Plans →</a>
    </td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#f8f8f8;padding:30px 40px;border-top:1px solid #e0e0e0;">
    <p style="color:#999;font-size:12px;line-height:1.6;margin:0;">
      You're receiving this because you subscribed to DealSheet CRE.<br>
      <a href="https://dealsheetcre.com/unsubscribe" style="color:#c9a84c;">Unsubscribe</a> · <a href="https://dealsheetcre.com/preferences" style="color:#c9a84c;">Email Preferences</a>
    </p>
    <p style="color:#bbb;font-size:11px;line-height:1.5;margin:15px 0 0;">
      SignalStack Media LLC · 1209 Orange Street, Wilmington, DE 19801<br>
      © 2026 SignalStack Media LLC. All rights reserved.
    </p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY not configured");
      return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
    }

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: email.toLowerCase().trim() }] }],
        from: { email: FROM_EMAIL, name: FROM_NAME },
        subject: "Welcome to DealSheet CRE — Your CRE Deal Intelligence Starts Now",
        content: [{ type: "text/html", value: buildWelcomeHtml(name) }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("SendGrid welcome email error:", err);
      return NextResponse.json({ error: "Failed to send welcome email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Welcome email error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

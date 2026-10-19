import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, message, website } = body || {};

  // Honeypot: real visitors never fill this hidden field in.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid business email." }, { status: 400 });
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const RECIPIENT = process.env.RECIPIENT;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const safeName = name.trim();
  const safeCompany = (company || "").trim();
  const safeEmail = email.trim();
  const safePhone = (phone || "").trim();
  const safeMessage = message.trim();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const textBody = [
    `New enquiry from the Apex Media Group website.`,
    ``,
    `Name: ${safeName}`,
    `Company: ${safeCompany || "—"}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone || "—"}`,
    ``,
    `Message:`,
    safeMessage,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: sans-serif; font-size: 15px; color: #0d0b0c;">
      <p>New enquiry from the Apex Media Group website.</p>
      <table cellpadding="4" cellspacing="0">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(safeName)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(safeCompany || "—")}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(safeEmail)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(safePhone || "—")}</td></tr>
      </table>
      <p><strong>Message</strong></p>
      <p>${escapeHtml(safeMessage).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Apex Media Group Website" <${gmailUser}>`,
      to: RECIPIENT,
      replyTo: safeEmail,
      subject: `New enquiry from ${safeName} — Apex Media website`,
      text: textBody,
      html: htmlBody,
    });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again in a moment." },
      { status: 502 }
    );
  }

  // Confirmation to the submitter — best-effort. The enquiry has already
  // reached us at this point, so a failure here (e.g. a typo'd address)
  // shouldn't be reported back to the visitor as a failed submission.
  const confirmationText = [
    `Hi ${safeName},`,
    ``,
    `Thanks for reaching out to The Apex Media Group. We've received your message and will get back to you as soon as possible.`,
    ``,
    `For your records, here's what you sent us:`,
    ``,
    safeMessage,
    ``,
    `If anything changes in the meantime, just reply to this email.`,
    ``,
    `Best regards,`,
    `The Apex Media Group`,
  ].join("\n");

  const confirmationHtml = `
    <div style="font-family: sans-serif; font-size: 15px; line-height: 1.5; color: #0d0b0c;">
      <p>Hi ${escapeHtml(safeName)},</p>
      <p>Thanks for reaching out to The Apex Media Group. We&rsquo;ve received your message and will get back to you as soon as possible.</p>
      <p>For your records, here&rsquo;s what you sent us:</p>
      <blockquote style="margin: 16px 0; padding: 12px 16px; border-left: 3px solid #4c0606; color: #333;">
        ${escapeHtml(safeMessage).replace(/\n/g, "<br />")}
      </blockquote>
      <p>If anything changes in the meantime, just reply to this email.</p>
      <p>Best regards,<br />The Apex Media Group</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"The Apex Media Group" <${gmailUser}>`,
      to: safeEmail,
      subject: "We've received your message — The Apex Media Group",
      text: confirmationText,
      html: confirmationHtml,
    });
  } catch (err) {
    console.error("Contact form: failed to send confirmation email to submitter.", err);
  }

  return NextResponse.json({ ok: true });
}

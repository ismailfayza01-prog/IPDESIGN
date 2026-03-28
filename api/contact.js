// Vercel Serverless Function — Contact Form Handler
// Receives POST data, validates, and sends via mailto link fallback
// Replace the email sending logic with Resend/SendGrid when ready

const ALLOWED_ORIGINS = [
  "https://ipdesign.co.uk",
  "https://www.ipdesign.co.uk",
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidURL(url) {
  if (!url) return true; // optional field
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Origin check (CSRF protection)
  const origin = req.headers.origin || req.headers.referer || "";
  const isAllowed =
    ALLOWED_ORIGINS.some((o) => origin.startsWith(o)) ||
    process.env.NODE_ENV === "development";

  if (!isAllowed) {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Set CORS for allowed origin
  const matchedOrigin = ALLOWED_ORIGINS.find((o) => origin.startsWith(o));
  if (matchedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", matchedOrigin);
  }

  const { name, email, url, message, website } = req.body || {};

  // Honeypot check — if the hidden field is filled, silently reject
  if (website) {
    // Return success to not tip off bots
    return res.status(200).json({ ok: true });
  }

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  if (!isValidURL(url)) {
    return res.status(400).json({ error: "Please enter a valid URL." });
  }

  // Sanitize inputs
  const sanitized = {
    name: name.trim().slice(0, 200),
    email: email.trim().slice(0, 254),
    url: url ? url.trim().slice(0, 2000) : "",
    message: message ? message.trim().slice(0, 5000) : "",
  };

  // ── Email sending ─────────────────────────────────────────────
  // TODO: Replace this section with your preferred email service.
  //
  // Example with Resend (npm install resend):
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'IPDESIGN Form <noreply@ipdesign.co.uk>',
  //     to: 'hello@ipdesign.co.uk',
  //     subject: `IPDESIGN Enquiry — ${sanitized.name}`,
  //     text: `Name: ${sanitized.name}\nEmail: ${sanitized.email}\nWebsite: ${sanitized.url || 'N/A'}\n\nMessage:\n${sanitized.message}`,
  //   });
  //
  // For now, log and return success (form data is handled client-side as mailto fallback)

  console.log("Contact form submission:", sanitized);

  return res.status(200).json({ ok: true });
}

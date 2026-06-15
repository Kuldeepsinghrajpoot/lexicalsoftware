"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/site";
import { verifyCaptcha } from "@/lib/captcha";

export interface ContactFormState {
  success: boolean;
  message: string;
}

// Basic email format check \u2014 not exhaustive, just catches obvious typos.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts digits, spaces, dashes, parentheses, and an optional leading +.
// Requires at least 7 digits total.
const PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const secondaryPhone = formData.get("secondaryPhone")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const contactTime = formData.get("contactTime")?.toString().trim();
  const referralSource = formData.get("referralSource")?.toString().trim();
  const projectType = formData.get("projectType")?.toString().trim();
  const budget = formData.get("budget")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Honeypot: a hidden field that should always be empty for real users.
  // Bots that auto-fill every field will trip this.
  const honeypot = formData.get("website")?.toString().trim();
  if (honeypot) {
    // Pretend success so bots don't learn the honeypot was detected.
    return {
      success: true,
      message: "Thanks! We'll get back to you within one business day.",
    };
  }

  // Math captcha
  const captchaToken = formData.get("captchaToken")?.toString() || "";
  const captchaAnswer = formData.get("captchaAnswer")?.toString() || "";
  if (!verifyCaptcha(captchaToken, captchaAnswer)) {
    return {
      success: false,
      message: "That answer doesn't look right \u2014 please try the new sum below.",
    };
  }

  if (!name || !email || !phone || !message) {
    return {
      success: false,
      message: "Please fill in your name, email, phone number, and message.",
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (!PHONE_REGEX.test(phone)) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    };
  }

  if (secondaryPhone && !PHONE_REGEX.test(secondaryPhone)) {
    return {
      success: false,
      message: "Please enter a valid secondary phone number, or leave it blank.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  // Until your domain is verified with Resend, FROM_EMAIL must stay on
  // resend.dev (e.g. "Lexical Software <onboarding@resend.dev>"). Once
  // your domain is verified, set FROM_EMAIL to something like
  // "Lexical Software <noreply@lexicalsoftware.dev>".
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || "Lexical Software <onboarding@resend.dev>";

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Contact form submission was not emailed:",
      { name, email, phone, secondaryPhone, company, contactTime, referralSource, projectType, budget, message }
    );
    return {
      success: false,
      message:
        "Sorry, something went wrong on our end. Please email us directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      reply_to: email,
      subject: `New project inquiry from ${name}${
        projectType ? ` \u2014 ${projectType}` : ""
      }`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Secondary phone: ${secondaryPhone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Preferred contact time: ${contactTime || "Not specified"}`,
        `Heard about us via: ${referralSource || "Not specified"}`,
        `Project type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message:
          "Sorry, something went wrong sending your message. Please email us directly instead.",
      };
    }

    // Send a confirmation email to the submitter.
    try {
      await resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "We received your message \u2014 Lexical Software",
        text: [
          `Hi ${name},`,
          "",
          "Thanks for reaching out to Lexical Software. We've received your message and will get back to you within one business day.",
          "",
          "For reference, here's what you sent us:",
          `Phone: ${phone}`,
          `Project type: ${projectType || "Not specified"}`,
          `Budget: ${budget || "Not specified"}`,
          `Message: ${message}`,
          "",
          "Best regards,",
          "Team Lexical Software",
          siteConfig.email,
        ].join("\n"),
      });
    } catch (confirmErr) {
      // Don't fail the whole submission if the confirmation email fails \u2014
      // the inquiry itself was already sent successfully above.
      console.error("Failed to send confirmation email:", confirmErr);
    }
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return {
      success: false,
      message:
        "Sorry, something went wrong sending your message. Please email us directly instead.",
    };
  }

  return {
    success: true,
    message: "Thanks! We'll get back to you within one business day.",
  };
}

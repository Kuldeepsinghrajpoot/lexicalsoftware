"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/site";
import { verifyCaptcha } from "@/lib/captcha";
import { jobOpenings } from "@/data/careers";

export interface ApplicationFormState {
  success: boolean;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;

export async function submitApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const role = formData.get("role")?.toString().trim();
  const portfolioUrl = formData.get("portfolioUrl")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Honeypot
  const honeypot = formData.get("website")?.toString().trim();
  if (honeypot) {
    return {
      success: true,
      message:
        "Thanks for applying! We'll review your application and get back to you if there's a fit.",
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

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in your name, email, and a short message.",
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  if (phone && !PHONE_REGEX.test(phone)) {
    return {
      success: false,
      message: "Please enter a valid phone number, or leave it blank.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || "Lexical Software <onboarding@resend.dev>";

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Job application was not emailed:",
      { name, email, phone, role, portfolioUrl, message }
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
      subject: `New job application: ${role || "General application"} \u2014 ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Role: ${role || "General application"}`,
        `Portfolio / Resume link: ${portfolioUrl || "Not provided"}`,
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
          "Sorry, something went wrong sending your application. Please email us directly instead.",
      };
    }

    try {
      const noOpeningsNote =
        jobOpenings.length === 0
          ? "There are no open roles right now, but we keep applications on file and will reach out if something comes up that fits."
          : "We've received your application and will reach out if there's a fit.";

      await resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "We received your application \u2014 Lexical Software",
        text: [
          `Hi ${name},`,
          "",
          `Thanks for applying${role ? ` for ${role}` : ""} at Lexical Software. ${noOpeningsNote}`,
          "",
          "Best regards,",
          "Team Lexical Software",
          siteConfig.email,
        ].join("\n"),
      });
    } catch (confirmErr) {
      console.error("Failed to send application confirmation email:", confirmErr);
    }
  } catch (err) {
    console.error("Unexpected error sending job application email:", err);
    return {
      success: false,
      message:
        "Sorry, something went wrong sending your application. Please email us directly instead.",
    };
  }

  return {
    success: true,
    message:
      jobOpenings.length === 0
        ? "Thanks for applying! There are no open roles right now, but we'll keep your application on file and reach out if something fits."
        : "Thanks for applying! We'll review your application and get back to you if there's a fit.",
  };
}

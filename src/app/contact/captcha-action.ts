"use server";

import { generateCaptcha, type CaptchaChallenge } from "@/lib/captcha";

export async function getCaptchaChallenge(): Promise<CaptchaChallenge> {
  return generateCaptcha();
}

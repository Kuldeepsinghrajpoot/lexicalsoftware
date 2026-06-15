// A lightweight math captcha. The two operands and a timestamp are encoded
// into a signed-ish token so we can verify the answer without a database or
// session store. This isn't cryptographically secure, but it's enough to
// stop generic form-spam bots that don't execute JS or parse tokens.

const SECRET = process.env.CAPTCHA_SECRET || "lexical-software-captcha";

export interface CaptchaChallenge {
  question: string;
  token: string;
}

function simpleHash(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

export function generateCaptcha(): CaptchaChallenge {
  const a = Math.floor(Math.random() * 8) + 1; // 1-8
  const b = Math.floor(Math.random() * 8) + 1; // 1-8
  const answer = a + b;
  const payload = `${a}.${b}.${answer}`;
  const signature = simpleHash(`${payload}.${SECRET}`);
  const token = Buffer.from(`${payload}.${signature}`).toString("base64");

  return {
    question: `${a} + ${b}`,
    token,
  };
}

export function verifyCaptcha(token: string, userAnswer: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [a, b, answer, signature] = decoded.split(".");
    const payload = `${a}.${b}.${answer}`;
    const expectedSignature = simpleHash(`${payload}.${SECRET}`);

    if (signature !== expectedSignature) return false;

    return parseInt(userAnswer.trim(), 10) === parseInt(answer, 10);
  } catch {
    return false;
  }
}

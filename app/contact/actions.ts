"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { CONTACT_EMAIL } from "@/lib/site";

export type ContactFields = { name: string; email: string; subject: string; message: string };

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: ContactFields;
};

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().trim().max(254),
  subject: z
    .string()
    .trim()
    .min(1)
    .max(180)
    .transform((value) => value.replace(/[\r\n]+/g, " ")),
  message: z.string().trim().min(1).max(5000),
});

function smtpTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST) return null;

  const port = Number(SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const fields: ContactFields = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Honeypot: bots fill the hidden "website" field. Pretend success and drop it.
  if (String(formData.get("website") ?? "").trim() !== "") {
    return { status: "success", message: "Thank you for your message." };
  }

  const parsed = schema.safeParse(fields);
  if (!parsed.success) {
    const tooLong = parsed.error.issues.some((issue) => issue.code === "too_big");
    return {
      status: "error",
      message: tooLong ? "Please shorten your message and try again." : "Please complete every field with a valid email address.",
      fields,
    };
  }

  const transport = smtpTransport();
  const failure: ContactState = {
    status: "error",
    message: `We could not send your message right now. Please email ${CONTACT_EMAIL} directly.`,
    fields,
  };
  if (!transport) {
    console.error("Contact form: SMTP_HOST is not configured, message not sent.");
    return failure;
  }

  const { name, email, subject, message } = parsed.data;
  try {
    await transport.sendMail({
      from: process.env.CONTACT_FROM ?? "noreply@noizejeans.com",
      to: process.env.CONTACT_TO ?? CONTACT_EMAIL,
      replyTo: { name, address: email },
      subject: `[Noize Jeans] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });
  } catch (error) {
    console.error("Contact form: failed to send message", error);
    return failure;
  }

  return { status: "success", message: "Thank you. Your message has been sent." };
}

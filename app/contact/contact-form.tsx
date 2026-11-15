"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };
const input = "mb-[15px] w-full border border-[#767676] p-2.5";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <>
      {state.status !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-4 p-3 ${state.status === "success" ? "bg-[#d8f3dc] text-[#155724]" : "bg-[#f8d7da] text-[#721c24]"}`}
        >
          {state.message}
        </div>
      )}

      {/* React resets the form after each submit; defaultValue restores the input after an error. */}
      <form action={formAction} className="flex flex-col">
        <div aria-hidden="true" className="absolute size-0 overflow-hidden opacity-0">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <label htmlFor="name" className="mb-[5px]">Your Name (required)</label>
        <input type="text" id="name" name="name" required maxLength={120} autoComplete="name" defaultValue={state.fields?.name} className={input} />

        <label htmlFor="email" className="mb-[5px]">Your Email (required)</label>
        <input type="email" id="email" name="email" required autoComplete="email" defaultValue={state.fields?.email} className={input} />

        <label htmlFor="subject" className="mb-[5px]">Subject:</label>
        <input type="text" id="subject" name="subject" required maxLength={180} defaultValue={state.fields?.subject} className={input} />

        <label htmlFor="message" className="mb-[5px]">Message:</label>
        <textarea id="message" name="message" rows={4} required maxLength={5000} defaultValue={state.fields?.message} className={input} />

        <button
          type="submit"
          disabled={pending}
          className="min-h-11 w-full cursor-pointer bg-[#212529] p-2.5 text-white disabled:cursor-wait disabled:opacity-70 md:w-auto md:min-w-[100px] md:self-start md:px-4"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
}

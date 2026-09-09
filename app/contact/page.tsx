"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="px-5 md:px-16 py-20 max-w-[560px] mx-auto">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
        CONTACT
      </span>
      <h1 className="font-serif font-light text-[clamp(2rem,4vw,2.8rem)] mb-6">
        Say hello.
      </h1>
      <p className="text-ink/65 mb-12">
        Questions about an order, a piece, or anything else — we read every
        message.
      </p>

      {status === "sent" ? (
        <p className="text-walnut">
          Thank you — your message is on its way. We&apos;ll be in touch soon.
        </p>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm mb-2">Name</label>
            <input id="name" name="name" type="text" required className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <input id="email" name="email" type="email" required className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-2">Message</label>
            <textarea id="message" name="message" required rows={5} className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-ink text-warm-white text-sm px-8 py-3 hover:bg-walnut-deep transition-colors disabled:bg-ink/40"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "error" && (
            <p className="text-sm text-walnut">Something went wrong — please try again.</p>
          )}
        </form>
      )}

      <div className="mt-16 pt-8 border-t border-line text-sm text-ink/60 space-y-2">
        <p>hello@amanahatelier.com</p>
        <p>Instagram · Pinterest</p>
        <p><a href="/faq" className="underline underline-offset-2">Visit our FAQ</a></p>
      </div>
    </main>
  );
}

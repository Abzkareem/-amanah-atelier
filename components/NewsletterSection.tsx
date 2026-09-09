"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-ivory px-5 md:px-16 py-24 text-center">
      <h2 className="font-serif font-light text-[clamp(2rem,4vw,3.2rem)]">
        Letters from Amanah
      </h2>
      <p className="mt-4 text-ink/65">
        Thoughts on faith, home, beauty, and intentional living —
        occasionally, in your inbox.
      </p>

      {status === "sent" ? (
        <p className="mt-10 text-walnut">You&apos;re on the list — welcome.</p>
      ) : (
        <form
          className="flex justify-center max-w-[440px] mx-auto mt-10 border-b border-ink"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            aria-label="Email address"
            className="flex-1 bg-transparent border-none py-3 px-1.5 outline-none placeholder:text-ink/40"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="text-sm text-walnut py-3 px-1.5 whitespace-nowrap disabled:text-walnut/40"
          >
            {status === "sending" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-walnut">Something went wrong — please try again.</p>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";

const FAQS = [
  { q: "How long does an order take to ship?", a: "Most pieces ship within 2–4 business days. Made-to-order items may take longer — this will be noted on the product page." },
  { q: "Do you restock sold-out pieces?", a: "Sometimes, but not always — we work in limited runs, and some pieces don't return in the same form. Join the newsletter to hear about restocks first." },
  { q: "What is your return policy?", a: "Unworn, unused pieces may be returned within 30 days of delivery. See our Shipping & Returns page for full details." },
  { q: "Do you ship internationally?", a: "Yes. Shipping rates and timelines are calculated at checkout based on destination." },
  { q: "How should I care for linen and leather pieces?", a: "Care instructions are listed on each product page under Materials & Care — generally, linen prefers a gentle wash and leather prefers to be kept dry and conditioned occasionally." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="px-5 md:px-16 py-20 max-w-[720px] mx-auto">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
        FAQ
      </span>
      <h1 className="font-serif font-light text-[clamp(2rem,4vw,2.8rem)] mb-12">
        Common questions.
      </h1>

      <div className="border-t border-line">
        {FAQS.map((item, i) => (
          <div key={item.q} className="border-b border-line">
            <button
              className="w-full flex justify-between items-center py-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="pr-6">{item.q}</span>
              <span className={`text-walnut text-lg transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {open === i && <p className="pb-5 text-ink/65 leading-relaxed max-w-[60ch]">{item.a}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

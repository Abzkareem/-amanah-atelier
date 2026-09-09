import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
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

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm mb-2">Name</label>
          <input id="name" type="text" required className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2">Email</label>
          <input id="email" type="email" required className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-2">Message</label>
          <textarea id="message" required rows={5} className="w-full border border-line bg-transparent px-3 py-2.5 outline-none focus-visible:border-walnut" />
        </div>
        <button type="submit" className="bg-ink text-warm-white text-sm px-8 py-3 hover:bg-walnut-deep transition-colors">
          Send message
        </button>
      </form>

      <div className="mt-16 pt-8 border-t border-line text-sm text-ink/60 space-y-2">
        <p>hello@amanahatelier.com</p>
        <p>Instagram · Pinterest</p>
        <p><a href="/faq" className="underline underline-offset-2">Visit our FAQ</a></p>
      </div>
    </main>
  );
}

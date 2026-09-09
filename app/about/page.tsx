import type { Metadata } from "next";
import Frame from "@/components/Frame";

export const metadata: Metadata = {
  title: "About",
  description: "The story, philosophy, and craft behind Amanah Atelier.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="px-5 md:px-16 pt-16 pb-4 max-w-[720px]">
        <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-3.5">
          ABOUT
        </span>
        <h1 className="font-serif font-light text-[clamp(2.3rem,4.6vw,3.6rem)] leading-tight">
          A quieter way to make things.
        </h1>
      </section>

      <Frame caption="The atelier" className="aspect-[16/9] mx-5 md:mx-16 mt-10" />

      <section className="grid md:grid-cols-2 gap-10 px-5 md:px-16 py-20">
        <div>
          <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
            ORIGIN
          </span>
          <p className="text-ink/75 leading-relaxed">
            Amanah Atelier began with a simple question: what does it look
            like to live modestly and beautifully at once? Not as opposites
            to be balanced, but as the same idea seen from two sides. We
            started with a handful of pieces — a wrap, a notebook, a
            tray — made the way we wished more things were made: slowly,
            with attention, without excess.
          </p>
        </div>
        <div>
          <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
            PHILOSOPHY
          </span>
          <p className="text-ink/75 leading-relaxed">
            Faith is the quiet center of what we do — not a theme we design
            around, but the reason we bother slowing down at all. Modesty,
            to us, isn&apos;t a restriction. It&apos;s a form of attention: to
            material, to construction, to what a life actually needs versus
            what it&apos;s sold.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center px-5 md:px-16 py-16 bg-ivory order-2 md:order-1">
          <span className="text-[0.72rem] tracking-label text-walnut font-medium mb-5">
            CRAFTSMANSHIP
          </span>
          <h2 className="font-serif font-light text-[clamp(1.8rem,3.2vw,2.6rem)] leading-tight max-w-[16ch]">
            We make fewer things, and we make them well.
          </h2>
          <p className="mt-6 max-w-[42ch] text-ink/65">
            Each collection is produced in a limited run. When it sells
            through, it sells through — we don&apos;t backfill with rushed
            production just to keep a listing live. That&apos;s a trade-off we
            make on purpose.
          </p>
        </div>
        <Frame caption="Hands at work" className="min-h-[340px] order-1 md:order-2" />
      </section>

      <section className="px-5 md:px-16 py-24 text-center max-w-[680px] mx-auto">
        <h2 className="font-serif font-light text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight">
          What we&apos;re creating isn&apos;t a moment. It&apos;s a way of living we hope
          outlasts a season.
        </h2>
      </section>
    </main>
  );
}

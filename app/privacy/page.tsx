import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="px-5 md:px-16 py-20 max-w-[720px] mx-auto">
      <span className="text-[0.72rem] tracking-label text-walnut font-medium block mb-4">
        LEGAL
      </span>
      <h1 className="font-serif font-light text-[clamp(2rem,4vw,2.8rem)] mb-8">
        Privacy Policy
      </h1>
      <p className="text-ink/70 leading-relaxed max-w-[62ch] mb-6">
        This is placeholder content. Replace with your actual privacy policy
        before launch — covering what data is collected (e.g. through
        checkout, the newsletter signup, and site analytics), how it is
        used, and how customers can request its deletion.
      </p>
      <p className="text-ink/50 text-sm">Last updated: —</p>
    </main>
  );
}

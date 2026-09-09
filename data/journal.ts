export type JournalPost = {
  slug: string;
  title: string;
  category: "Faith" | "Home" | "Style" | "Craft" | "Intentional Living";
  excerpt: string;
  body: string[];
  caption: string;
  featured?: boolean;
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "keeping-a-modest-home",
    title: "What it means to keep a modest home",
    category: "Faith",
    excerpt:
      "On restraint as a practice, not a restriction — and what it opens up when the noise goes quiet.",
    caption: "Faith & Home",
    featured: true,
    body: [
      "There is a version of modesty that reads as absence — a home stripped of personality in the name of simplicity. That has never been the point.",
      "The modest home, as we understand it, isn't about having less for its own sake. It's about being deliberate enough about what you keep that everything left has a reason to be there.",
      "That takes longer than buying less. It means asking, of every object, whether it earns its place — and being willing to live with the answer.",
    ],
  },
  {
    slug: "notes-from-the-workshop",
    title: "Notes from the workshop",
    category: "Craft",
    excerpt: "A season of small batches, and what we learned from making things slowly.",
    caption: "Craft",
    body: [
      "Small-batch production means we get to know each piece before it leaves. It also means we notice, faster, when something isn't right.",
      "This season's linen ran slightly heavier than we expected. We adjusted the cut rather than the fabric — a small decision, but one that took an extra week.",
    ],
  },
  {
    slug: "dressing-for-the-life-you-live",
    title: "Dressing for the life you actually live",
    category: "Style",
    excerpt: "Fewer pieces, chosen for the days you actually have, not the ones you imagine.",
    caption: "Style",
    body: [
      "Most wardrobes are built for an imagined life — the trip that hasn't happened, the event that might come up. We've tried to build ours for the one you're already living.",
    ],
  },
];

export function getJournalPostBySlug(slug: string) {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}

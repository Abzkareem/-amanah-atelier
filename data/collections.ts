import type { Product } from "./products";

export type Collection = {
  slug: string;
  name: string;
  category: Product["category"];
  tagline: string;
  description: string;
  caption: string;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "everyday",
    name: "Everyday",
    category: "everyday",
    tagline: "Pieces for the ordinary hours",
    description:
      "The things you reach for without thinking — a wrap, a notebook, a pouch for the small things that go everywhere with you. Nothing here is precious enough to sit in a drawer.",
    caption: "Everyday",
  },
  {
    slug: "home",
    name: "Home",
    category: "home",
    tagline: "Objects that furnish a life",
    description:
      "Made to sit in view, not tucked away — a tray for the entryway, a runner for a table that gets used. Quiet objects that hold up under daily life.",
    caption: "Home",
  },
  {
    slug: "modest-living",
    name: "Modest Living",
    category: "modest",
    tagline: "Considered dress, quietly made",
    description:
      "Silhouettes chosen for coverage without compromise on how they feel to wear — breathable fabrics, generous cuts, made to last more than a season.",
    caption: "Modest Living",
  },
  {
    slug: "gifts",
    name: "Gifts",
    category: "gifts",
    tagline: "Something considered, boxed and ready",
    description:
      "For the people you want to give something that lasts — small sets, thoughtfully packaged, chosen from across the atelier.",
    caption: "Gifts",
  },
];

export function getCollectionBySlug(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}

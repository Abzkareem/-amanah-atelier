export type StockStatus = "in" | "low" | "out";

export type Product = {
  slug: string;
  name: string;
  category: "everyday" | "home" | "modest" | "gifts";
  price: number;
  caption: string;
  stock: StockStatus;
  description: string;
  materials: string;
  dimensions: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "the-linen-wrap",
    name: "The Linen Wrap",
    category: "everyday",
    price: 88,
    caption: "Linen Wrap",
    stock: "in",
    description:
      "A generous length of undyed linen, softened through repeated washing rather than chemical treatment. Worn as a wrap, a light layer, or folded flat for travel.",
    materials: "100% undyed European linen. Machine wash cold, lay flat to dry.",
    dimensions: "180cm × 90cm, unhemmed edge finished by hand.",
  },
  {
    slug: "field-notebook",
    name: "Field Notebook",
    category: "everyday",
    price: 32,
    caption: "Field Notebook",
    stock: "in",
    description: "Cotton paper, stitched binding, a cover that ages with use.",
    materials: "Cotton paper, linen cover.",
    dimensions: "14cm × 21cm, 160 pages.",
  },
  {
    slug: "walnut-catch-all-tray",
    name: "Walnut Catch-All Tray",
    category: "home",
    price: 64,
    caption: "Walnut Tray",
    stock: "in",
    description: "Solid walnut, oiled by hand. A quiet place for the small things.",
    materials: "Solid walnut, food-safe oil finish.",
    dimensions: "20cm × 14cm × 2cm.",
  },
  {
    slug: "small-leather-pouch",
    name: "Small Leather Pouch",
    category: "everyday",
    price: 58,
    caption: "Leather Pouch",
    stock: "in",
    description: "Vegetable-tanned leather that darkens beautifully with age.",
    materials: "Vegetable-tanned leather, brass hardware.",
    dimensions: "12cm × 9cm.",
  },
  {
    slug: "woven-table-runner",
    name: "Woven Table Runner",
    category: "home",
    price: 74,
    caption: "Table Runner",
    stock: "low",
    description: "Handwoven cotton, made in small batches.",
    materials: "100% cotton.",
    dimensions: "180cm × 35cm.",
  },
  {
    slug: "modest-wrap-dress",
    name: "Modest Wrap Dress",
    category: "modest",
    price: 148,
    caption: "Wrap Dress",
    stock: "in",
    description: "A considered silhouette in a breathable, opaque weave.",
    materials: "Cotton-linen blend.",
    dimensions: "True to size — see size guide.",
  },
  {
    slug: "linen-headscarf",
    name: "Linen Headscarf",
    category: "modest",
    price: 42,
    caption: "Headscarf",
    stock: "in",
    description: "Lightweight linen, finished edge, generous drape.",
    materials: "100% linen.",
    dimensions: "110cm × 110cm.",
  },
  {
    slug: "gift-box-small-atelier-set",
    name: "Gift Box, Small Atelier Set",
    category: "gifts",
    price: 96,
    caption: "Gift Set",
    stock: "out",
    description: "A curated set of small pieces, boxed and ready to give.",
    materials: "Varies by set contents.",
    dimensions: "Box: 24cm × 18cm × 8cm.",
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

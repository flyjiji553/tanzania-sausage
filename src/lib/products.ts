export type ProductStatus = "available" | "coming_soon";

export type ProductSpec = {
  label: string;
  value: string;
  note?: string;
};

export type Product = {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images: string[];
  status: ProductStatus;
  badge: string;
  model: string;
  specs: ProductSpec[];
};

export const products: Product[] = [
  {
    id: "chicken-sausage",
    // Chinese (data comment only): 鸡肉香肠 — UI displays English name
    name: "Chicken Sausage",
    description:
      "Our current factory product: a dependable chicken sausage made for everyday meals, foodservice, and wholesale orders. No refrigeration required — ready to eat.",
    longDescription:
      "AFRINOVA Chicken Sausage is our flagship ready-to-eat product, made for Tanzanian households, shops, and foodservice. It needs no refrigeration, is high in protein, and is ready to enjoy straight from the pack or lightly heated. Ideal for retail shelves, wholesale distribution, and everyday meals.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
    status: "available",
    badge: "Available",
    model: "AF-CS-01",
    specs: [
      { label: "Product name", value: "Chicken Sausage" },
      { label: "Spec", value: "28g" },
      { label: "Quantity", value: "100 PCS/box" },
      { label: "Shelf life", value: "6 months" },
      {
        label: "Storage",
        value: "Store at room temperature away from light; do not freeze.",
      },
    ],
  },
  {
    id: "pet-sausage",
    name: "Pet Sausage",
    nameZh: "宠物肠",
    description:
      "A pet-focused sausage recipe currently in development, with launch details to be announced soon.",
    longDescription:
      "AFRINOVA Pet Sausage is in development for pet owners and specialty retail. Formulation, pack sizes, and launch timing will be announced when production is ready. Contact us on WhatsApp to register interest.",
    price: "Coming soon",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80",
    ],
    status: "coming_soon",
    badge: "Coming soon",
    model: "AF-PS-01",
    specs: [
      { label: "Product name", value: "Pet Sausage" },
      { label: "Spec", value: "TBD" },
      { label: "Quantity", value: "TBD" },
      { label: "Shelf life", value: "TBD" },
      { label: "Storage", value: "TBD" },
    ],
  },
  {
    id: "beef-sausage",
    name: "Beef Sausage",
    nameZh: "牛肉肠",
    description:
      "Our next beef sausage line is in R&D and will launch after development and production planning are complete.",
    longDescription:
      "AFRINOVA Beef Sausage is next in our product roadmap. Like our chicken line, it is planned as a convenient, high-protein option suited to Tanzanian retail and wholesale. Specs and pricing will be published at launch.",
    price: "Coming soon",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=80",
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&q=80",
    ],
    status: "coming_soon",
    badge: "Coming soon",
    model: "AF-BS-01",
    specs: [
      { label: "Product name", value: "Beef Sausage" },
      { label: "Spec", value: "TBD" },
      { label: "Quantity", value: "TBD" },
      { label: "Shelf life", value: "TBD" },
      { label: "Storage", value: "TBD" },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id);
}

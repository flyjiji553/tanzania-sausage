export type ProductStatus = "available" | "coming_soon";

export type Product = {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  price: string;
  image: string;
  status: ProductStatus;
  badge: string;
};

export const products: Product[] = [
  {
    id: "chicken-starch-sausage",
    name: "Chicken Starch Sausage",
    nameZh: "鸡肉淀粉肠",
    description:
      "Our current factory product: a dependable chicken starch sausage made for everyday meals, foodservice, and wholesale orders.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    status: "available",
    badge: "Available",
  },
  {
    id: "pet-sausage",
    name: "Pet Sausage",
    nameZh: "宠物肠",
    description:
      "A pet-focused sausage recipe currently in development, with launch details to be announced soon.",
    price: "Coming soon",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    status: "coming_soon",
    badge: "Coming soon",
  },
  {
    id: "beef-starch-sausage",
    name: "Beef Starch Sausage",
    nameZh: "牛肉淀粉肠",
    description:
      "Our next beef starch sausage line is in R&D and will launch after development and production planning are complete.",
    price: "Coming soon",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    status: "coming_soon",
    badge: "Coming soon",
  },
];

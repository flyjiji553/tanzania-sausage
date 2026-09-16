export type Product = {
  id: string;
  name: string;
  nameZh?: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "original-beef",
    name: "Original Beef Sausage",
    nameZh: "原味牛肉香肠",
    description:
      "Selected grass-fed beef, slow-roasted to keep a clean meat flavour and tender bite — ideal for everyday meals and breakfast.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    badge: "Signature",
  },
  {
    id: "spicy",
    name: "Spicy Sausage",
    nameZh: "香辣香肠",
    description:
      "East African chilli and spice blend with layered mild heat — great for grilling and everyday cooking.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1654605128009-9a148665a678?w=800&q=80",
    badge: "Popular",
  },
  {
    id: "smoked",
    name: "Smoked Sausage",
    nameZh: "烟熏风味香肠",
    description:
      "Traditional wood-smoke finish, slow-cured for a juicy centre and lightly charred edge — made for sharing.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  },
  {
    id: "herb",
    name: "Herb Blend Sausage",
    nameZh: "香草混合香肠",
    description:
      "Rosemary, thyme and local herbs for a fresh, light profile — pairs well with light meals and pasta.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    id: "family-gift",
    name: "Family Gift Box",
    nameZh: "家庭装礼盒",
    description:
      "A mixed-flavour gift assortment — taste the signature range in one box, for gifting or home stock.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    badge: "Gift",
  },
  {
    id: "breakfast",
    name: "Breakfast Mini Links",
    nameZh: "早餐迷你肠",
    description:
      "Bite-size links that heat quickly — designed for busy mornings and family breakfasts.",
    price: "On request",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
  },
];

export type Product = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "original-beef",
    name: "原味牛肉香肠",
    nameEn: "Original Beef Sausage",
    description:
      "精选草饲牛肉，低温慢烤，保留纯粹肉香与细腻口感，适合日常餐桌与早餐搭配。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    badge: "招牌",
  },
  {
    id: "spicy",
    name: "香辣香肠",
    nameEn: "Spicy Sausage",
    description:
      "融合东非辣椒与香料秘方，层次分明的微辣风味，为烧烤与下饭菜带来热情一击。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
    badge: "热卖",
  },
  {
    id: "smoked",
    name: "烟熏风味香肠",
    nameEn: "Smoked Sausage",
    description:
      "传统木屑烟熏工艺，慢火入味，外皮微焦、内里多汁，适合聚会分享。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  },
  {
    id: "herb",
    name: "香草混合香肠",
    nameEn: "Herb Blend Sausage",
    description:
      "迷迭香、百里香与本地香草精心调配，清香不腻，是轻食与意面的理想伴侣。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    id: "family-gift",
    name: "家庭装礼盒",
    nameEn: "Family Gift Box",
    description:
      "多款风味组合礼盒，送礼自用两相宜，一次尝遍招牌系列。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    badge: "礼赠",
  },
  {
    id: "breakfast",
    name: "早餐迷你肠",
    nameEn: "Breakfast Mini Links",
    description:
      "小巧尺寸、快速加热，一口一个，专为忙碌早晨与亲子早餐设计。",
    price: "询价 / On request",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
  },
];

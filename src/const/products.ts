export type CategoryKey = "all" | "safa" | "talwar" | "accessories" | "decor";

export type Product = {
  id: number;
  name: string;
  category: Exclude<CategoryKey, "all">;
  price: number;
  badge: string;
  description: string;
  details: string[];
  images: string[];
};

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "safa", label: "Safa" },
  { key: "talwar", label: "Talwar" },
  { key: "accessories", label: "Accessories" },
  { key: "decor", label: "Decor" },
];

// Image file numbers available under public/images/product/safa (p15 is missing).
const safaImageNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31,
];

const safaNames = [
  "Royal Groom Safa",
  "Velvet Maroon Safa",
  "Golden Zari Safa",
  "Rajwadi Wedding Safa",
  "Classic Cream Safa",
  "Peacock Green Safa",
  "Firozi Blue Safa",
  "Regal Red Safa",
  "Ivory Silk Safa",
  "Bandhej Print Safa",
  "Kesari Saffron Safa",
  "Pink Blossom Safa",
  "Emerald Royal Safa",
  "Wine Premium Safa",
  "Shahi Groom Safa",
  "Pearl White Safa",
  "Sunset Orange Safa",
  "Purple Majesty Safa",
  "Silver Shine Safa",
  "Mustard Gold Safa",
  "Rani Pink Safa",
  "Turquoise Charm Safa",
  "Copper Bronze Safa",
  "Midnight Blue Safa",
  "Crimson Wedding Safa",
  "Beige Elegance Safa",
  "Lehariya Print Safa",
  "Antique Gold Safa",
  "Ruby Red Safa",
  "Grand Baraat Safa",
];

const safaBadges = [
  "Best Seller",
  "New",
  "Featured",
  "Premium",
  "Limited",
  "Trending",
];

const safaDescriptions = [
  "Premium safa set with rich fabric and matching brooch styling.",
  "Handcrafted safa with royal finish, perfect for groom entry and photography.",
  "Elegant wedding safa with contrast detailing and premium comfort.",
  "Luxury safa styled for weddings, engagements and grand celebrations.",
  "Traditional safa with vibrant colour and a regal, ceremonial look.",
];

export const products: Product[] = safaImageNumbers.map((num, index) => {
  const price = 1200 + (index % 12) * 200;
  return {
    id: index + 1,
    name: safaNames[index] ?? `Premium Safa ${index + 1}`,
    category: "safa",
    price,
    badge: safaBadges[index % safaBadges.length],
    description: safaDescriptions[index % safaDescriptions.length],
    details: [
      "Premium fabric with a rich, royal finish",
      "Includes matching styling for a complete groom look",
      "Ideal for weddings, engagements, receptions and photography",
    ],
    images: [`/images/product/safa/p${num}.png`],
  };
});

export type Offer = Product & { mrp: number };

// Featured deals: MRP is rounded up from the sale price to show a real discount.
export const offers: Offer[] = products.slice(0, 3).map((product) => ({
  ...product,
  mrp: Math.round((product.price * 1.4) / 10) * 10,
}));

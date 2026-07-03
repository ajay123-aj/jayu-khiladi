export type HeroSlide = {
  badge: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    badge: "Signature Collection",
    title: "Royal Safa Styling",
    subtitle:
      "Premium safa sets crafted for weddings, engagements and every celebration.",
    cta: { label: "Explore Safas", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "Rental Service",
    title: "Ceremonial Talwar Rental",
    subtitle:
      "Elegant decorative swords for baraat and event processions, delivered with full setup support.",
    cta: { label: "View Talwars", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "For Every Celebration",
    title: "Weddings, Engagements & Parties",
    subtitle:
      "Grand styling for wedding ceremonies, engagements, birthday parties and receptions.",
    cta: { label: "See Collection", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
  },
];

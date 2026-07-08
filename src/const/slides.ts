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
    image: "/images/slider/s1.png",
  },
  {
    badge: "Rental Service",
    title: "Ceremonial Talwar Rental",
    subtitle:
      "Elegant decorative swords for baraat and event processions, delivered with full setup support.",
    cta: { label: "View Talwars", href: "/products" },
    image: "/images/slider/s2.png",
  },
  {
    badge: "For Every Celebration",
    title: "Weddings, Engagements & Parties",
    subtitle:
      "Grand styling for wedding ceremonies, engagements, birthday parties and receptions.",
    cta: { label: "See Collection", href: "/products" },
    image: "/images/slider/s3.png",
  },
  {
    badge: "Groom Essentials",
    title: "The Perfect Baraat Look",
    subtitle:
      "Complete groom styling with safas, brooches and accessories for a regal entrance.",
    cta: { label: "Shop Now", href: "/products" },
    image: "/images/slider/s4.png",
  },
  {
    badge: "Handcrafted Detail",
    title: "Artisan Embroidery",
    subtitle:
      "Intricately woven fabrics and hand-finished detailing on every piece we make.",
    cta: { label: "Discover More", href: "/products" },
    image: "/images/slider/s5.png",
  },
  {
    badge: "Bulk Orders",
    title: "Sets for the Whole Baraat",
    subtitle:
      "Coordinated safa sets for the entire wedding party, available in matching themes.",
    cta: { label: "Enquire Now", href: "/products" },
    image: "/images/slider/s6.png",
  },
  {
    badge: "Festive Special",
    title: "Celebrate in Style",
    subtitle:
      "Vibrant colours and premium fabrics to make every festival and function memorable.",
    cta: { label: "Browse Range", href: "/products" },
    image: "/images/slider/s7.png",
  },
  {
    badge: "Premium Fabrics",
    title: "Luxury Materials",
    subtitle:
      "Sourced from the finest textiles for comfort, sheen and lasting elegance.",
    cta: { label: "Explore Fabrics", href: "/products" },
    image: "/images/slider/s8.png",
  },
  {
    badge: "Made to Order",
    title: "Custom Styling Service",
    subtitle:
      "Personalised safas and accessories tailored to your outfit and celebration theme.",
    cta: { label: "Get Started", href: "/products" },
    image: "/images/slider/s9.png",
  },
];

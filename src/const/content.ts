// Homepage stats band
export const stats: { value: string; label: string }[] = [
  { value: "50+", label: "Event looks" },
  { value: "24/7", label: "Booking support" },
  { value: "100%", label: "Premium finish" },
];

// "Why choose us" bullet points
export const whyChooseUs: string[] = [
  "Premium, well-maintained safa & event pieces",
  "Rental and purchase options for every occasion",
  "On-time delivery with full setup support",
  "Custom styling for weddings, engagements & parties",
];

// Occasions / events we style for. Shown in the homepage "Events" section.
export type EventType = {
  name: string;
  icon: string;
  description: string;
};

export const events: EventType[] = [
  {
    name: "Wedding Ceremony",
    icon: "💍",
    description:
      "Royal groom safa, talwar and complete baraat styling for the big day.",
  },
  {
    name: "Engagement Ceremony",
    icon: "💐",
    description:
      "Elegant safa sets and accessories for ring and engagement functions.",
  },
  {
    name: "Birthday Party",
    icon: "🎉",
    description:
      "Colourful safa and decor styling to make every birthday feel special.",
  },
  {
    name: "Reception",
    icon: "✨",
    description:
      "Premium pagdi and finishing touches for a grand reception look.",
  },
  {
    name: "Baraat & Procession",
    icon: "🥁",
    description:
      "Groom entry setup with safa, talwar and decorative umbrellas.",
  },
  {
    name: "Festivals & Poojas",
    icon: "🪔",
    description:
      "Traditional safa and ceremonial pieces for festivals and religious events.",
  },
];

// Trending event picks. Shown in the homepage "Special Offers" section.
export type EventPick = {
  name: string;
  tag: string;
  description: string;
  image: string;
};

export const eventPicks: EventPick[] = [
  {
    name: "Royal Wedding Look",
    tag: "Wedding",
    description: "Complete groom safa styling with talwar and brooch finish.",
    image: "/images/product/event/e1.png",
  },
  {
    name: "Engagement Elegance",
    tag: "Engagement",
    description: "Refined safa sets and accessories for ring ceremonies.",
    image: "/images/product/event/e2.png",
  },
  {
    name: "Baraat Grand Entry",
    tag: "Baraat",
    description: "Procession setup with safa, talwar and decorative umbrellas.",
    image: "/images/product/event/e3.png",
  },
  {
    name: "Reception Styling",
    tag: "Reception",
    description: "Premium pagdi and finishing touches for a grand reception.",
    image: "/images/product/event/e4.png",
  },
  {
    name: "Birthday Celebration",
    tag: "Birthday",
    description: "Colourful safa and decor styling for special birthdays.",
    image: "/images/product/event/e5.png",
  },
  {
    name: "Festive Traditions",
    tag: "Festival",
    description: "Ceremonial pieces for festivals, poojas and celebrations.",
    image: "/images/product/event/e6.png",
  },
  {
    name: "Custom Event Set",
    tag: "Made to Order",
    description: "Personalised styling tailored to your outfit and theme.",
    image: "/images/product/event/e7.png",
  },
];

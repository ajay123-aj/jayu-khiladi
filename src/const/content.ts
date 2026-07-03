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

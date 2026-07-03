import { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jayukhiladi.com";
const SITE_NAME = "Jayu Khiladi Safa Shop";
const SITE_TAGLINE = "Safa & Event Styling for Every Celebration";
const SITE_DESCRIPTION =
  "Royal safa, talwar rental and premium styling for weddings, engagement ceremonies, birthday parties, receptions and every celebration. Jayu Khiladi Safa Shop.";

export const defaultMetadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  keywords: [
    "safa",
    "wedding safa",
    "engagement safa",
    "birthday party styling",
    "talwar rental",
    "groom attire",
    "event styling",
    "wedding accessories",
    "reception decor",
    "Indian ceremony essentials",
    "royal safa",
    "event rental",
  ],
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image.jpg`],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: SITE_URL,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  metadataBase: new URL(SITE_URL),
};

export function generateProductMetadata(
  product: {
    name: string;
    description: string;
    price: number;
    images: string[];
    id: number;
  },
  baseUrl = SITE_URL,
): Metadata {
  const productUrl = `${baseUrl}/products/${product.id}`;

  return {
    title: `${product.name} | ${SITE_NAME}`,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      "wedding",
      "engagement",
      "birthday party",
      "reception",
      "rental",
      "safa",
      "event accessories",
    ],
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      type: "website",
      url: productUrl,
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export function generateProductSchema(product: {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  badge?: string;
}) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.id}`,
      priceCurrency: "INR",
      price: product.price.toString(),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+919876543210",
    email: "hello@jayukhiladi.com",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    priceRange: "₹1,000 - ₹5,000",
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export const SITE_URL_CONSTANT = SITE_URL;
export const SITE_NAME_CONSTANT = SITE_NAME;

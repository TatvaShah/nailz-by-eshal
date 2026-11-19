import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nailz by Eshal",
  tagline: "Custom press-on nails and jewelry in Brampton, with an application kit in every set.",
  category: "Press-on nails",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://nailz-by-eshal-ca.vercel.app",

  theme: {
    preset: "salon-chic",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Press-on nails in Brampton",
    headline: "Custom press-on nails, packed with an application kit",
    subhead: "Nailz by Eshal makes custom press-on nails in Brampton, including bridal and engagement sets, French tips and seasonal designs, plus nail sizing kits and jewelry. Every set comes with a complete application kit. Send an Instagram message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A custom engagement press-on set with floral details from Nailz by Eshal", width: 720, height: 1280 },
      { src: "/images/post-2.jpg", alt: "A custom press-on set with bows and polka dots from Nailz by Eshal", width: 720, height: 1280 },
      { src: "/images/post-3.jpg", alt: "A tortoise shell autumn press-on set from Nailz by Eshal", width: 1051, height: 1394 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Custom press-on nails in Brampton",
    "Application kit included with every set",
    "Bridal, engagement and seasonal sets",
    "Nail sizing kits available",
  ],

  about: {
    title: "Welcome to Nailz by Eshal",
    body: [
      "Nailz by Eshal makes custom press-on nails in Brampton, described as long lasting and affordable. Recent work has included engagement and bridal sets, classic rounded French tips, tortoise shell nails, a blueberry lemonade inspired set, an autumn brown and pink set, glazed donut bridal nails, and pink beach themed nails. Almond shape sizing kits are also offered, in many shapes, and jewelry is listed on the profile.",
      "Every set comes with a complete application kit. Send an Instagram message to order. More information is in the Instagram highlights.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A custom engagement press-on set with floral details from Nailz by Eshal", width: 720, height: 1280 },
  },

  menu: {
    label: "Services",
    title: "Nails and extras",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message to order and for pricing.",
    groups: [
      {
        title: "Press-on sets",
        items: [
          { name: "Custom press-on nails", description: "Including bridal and engagement sets, French tips and seasonal designs, as posted." },
          { name: "Application kit", description: "Included with every set, as posted." },
        ],
      },
      {
        title: "More",
        items: [
          { name: "Nail sizing kits", description: "Including an almond shape kit, with many shapes available, as posted." },
          { name: "Jewelry" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 720, height: 1280, alt: "A custom engagement press-on set with floral details from Nailz by Eshal", caption: "An engagement set", href: "https://www.instagram.com/reel/Dfx8j8hCuQz/" },
      { src: "/images/post-2.jpg", width: 720, height: 1280, alt: "A custom press-on set with bows and polka dots from Nailz by Eshal", caption: "A custom press-on order", href: "https://www.instagram.com/reel/DfgPONfigkK/" },
      { src: "/images/post-3.jpg", width: 1051, height: 1394, alt: "A tortoise shell autumn press-on set from Nailz by Eshal", caption: "Tortoise shell nails", href: "https://www.instagram.com/p/DfQH1nvmquU/" },
      { src: "/images/post-4.jpg", width: 720, height: 1280, alt: "A classic rounded French tip engagement set from Nailz by Eshal", caption: "Rounded French tips", href: "https://www.instagram.com/reel/De-aapXCOkH/" },
      { src: "/images/post-5.jpg", width: 720, height: 1280, alt: "Blueberry lemonade inspired press-on nails from Nailz by Eshal", caption: "Blueberry lemonade nails", href: "https://www.instagram.com/reel/DefZqiVCtr7/" },
      { src: "/images/post-6.jpg", width: 1032, height: 1374, alt: "An autumn brown and pink press-on set from Nailz by Eshal", caption: "An autumn brown and pink set", href: "https://www.instagram.com/p/DeXbaAaGsMZ/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nailzby_eshal",
    embeds: ["https://www.instagram.com/reel/Dfx8j8hCuQz/", "https://www.instagram.com/p/DfQH1nvmquU/", "https://www.instagram.com/reel/De-aapXCOkH/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message to order custom press-on nails. Nailz by Eshal is based in Brampton. Every set comes with a complete application kit.",
    headerCtaLabel: "Order now",
    dmMessage: "Hi Nailz by Eshal! I would like to order press-on nails.\nOccasion or design:\nShape or length:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/nailzby_eshal" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message to order. More information is in the Instagram highlights." },
    { q: "What is included?", a: "Every set comes with a complete application kit, as posted." },
    { q: "Do you offer sizing kits?", a: "Yes. Nail sizing kits are offered, including an almond shape kit, with many shapes available." },
    { q: "Where are you based?", a: "Nailz by Eshal is based in Brampton." },
  ],

  contact: {
    title: "Contact",
    area: "Brampton, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/nailzby_eshal/" },
      { label: "TikTok", href: "https://www.tiktok.com/@nailzby_eshal" },
    ],
  },

  seo: {
    title: "Nailz by Eshal | Custom press-on nails in Brampton",
    description: "Custom press-on nails in Brampton, including bridal and engagement sets, with an application kit in every order. Sizing kits and jewelry also offered. Order by Instagram DM.",
    keywords: ["Nailz by Eshal", "press-on nails Brampton", "custom press ons Brampton", "bridal press on nails"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

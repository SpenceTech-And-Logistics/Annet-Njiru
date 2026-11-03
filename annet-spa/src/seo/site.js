// SEO settings for the whole site. This is the ONE place to edit SEO text.
// seo-plugin.js reads it at build time and writes the <head> tags,
// structured data (for Google), sitemap.xml and robots.txt.
// Keep this file plain JavaScript with no imports.
// The live address is set in .env.production (VITE_SITE_URL).

export const SITE = {
  name: "Annet Wanjiku Njiru",
  title: "Annet Wanjiku Njiru | CEO, Big Win Agencies & Healing Balm Founder",
  description:
    "Annet Wanjiku Njiru is CEO of Big Win Agencies and Founder of Healing Balm Herbal Clinic in Kenya, with 20+ years in marketing, mediation and consultancy.",
  keywords: [
    "Annet Wanjiku Njiru",
    "Annet Njiru",
    "Big Win Agencies",
    "Healing Balm Herbal Clinic",
    "herbal clinic Kenya",
    "alternative medicine Kenya",
    "holistic wellness Kenya",
    "indigenous medicinal plants Kenya",
    "marketing executive Kenya",
    "ADR mediator Kenya",
    "business consultant Kenya",
  ],

  // Social preview (WhatsApp, LinkedIn, Facebook, X). 1200 x 630 image in /public.
  image: "/og-image.jpg",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Annet Wanjiku Njiru, CEO of Big Win Agencies and Founder of Healing Balm Herbal Clinic",
  locale: "en_KE",
  themeColor: "#1E1511",

  // About the person (used for Google's structured data).
  jobTitle: "Chief Executive Officer",
  worksFor: [
    { name: "Big Win Agencies", role: "Chief Executive Officer" },
    { name: "Healing Balm Herbal Clinic", role: "Founder" },
  ],
  founded: ["Healing Balm Herbal Clinic"],
  knowsAbout: [
    "Strategic marketing",
    "Brand positioning",
    "Enterprise development",
    "Mediation and alternative dispute resolution",
    "Business strategy",
    "Corporate advisory",
    "Alternative medicine",
    "Herbal healthcare",
    "Holistic wellness",
    "Conservation of indigenous medicinal plants",
  ],
  country: "KE",

  // Fill these in when you have them. Empty values are left out automatically.
  email: "",
  telephone: "",
  // Her profile links (LinkedIn, Instagram, Facebook, company sites). Helps Google link them to her.
  sameAs: [],

  // Google Search Console "HTML tag" verification code (just the content="..." value).
  googleVerification: "",
};

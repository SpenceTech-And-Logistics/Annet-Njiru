// All text lives here. Replace /public/images/portrait.jpg to change the photo; add more photos and list them in `gallery` below.
export const person = {
  first: "Annet",
  middle: "Wanjiku",
  last: "Njiru",
  tagline:
    "Strategic Vision · Executive Leadership · Business Excellence · Alternative Healing Consultant",
  title: "Executive professional profile",
  intro:
    "An accomplished and results-oriented business professional with over 20 years of experience in strategic marketing, entrepreneurship, corporate relations and consultancy. Recognised for commercial insight, strategic networking and building valuable business relationships.",
  portrait: "/images/portrait.jpg",
};

export const roles = [
  "Marketing Executive",
  "Entrepreneur",
  "Mediator (ADR)",
  "Alternative Health Consultant",
  "Business Consultant",
];

export const contact = {
  // Fill in before publishing. Empty values are hidden.
  email: "",
  phone: "",
  location: "Kenya",
  linkedin: "https://www.linkedin.com/in/annet-njiru-452a49344",
  instagram: "",
  facebook: "https://www.facebook.com/annet.njiru/",
  formspree: "", // optional Formspree form id
};

export const facts = [
  { value: "20+", label: "Years of professional experience" },
  { value: "CEO", label: "Big Win Agencies" },
  { value: "5", label: "Professional disciplines" },
  { value: "8", label: "Leading organisations served" },
];

export const highlights = [
  "Established a multidisciplinary career spanning more than two decades.",
  "Built a professional portfolio involving leading private-sector organisations and government institutions.",
  "Attained executive leadership as Chief Executive Officer of Big Win Agencies.",
  "Developed cross-sector experience encompassing marketing, enterprise leadership, mediation and consultancy.",
];

export const expertise = [
  {
    role: "Marketing Executive",
    focus: ["Brand positioning", "Strategic marketing", "Business growth"],
  },
  {
    role: "Entrepreneur",
    focus: [
      "Enterprise development",
      "Investment opportunities",
      "Strategic partnerships",
    ],
  },
  {
    role: "Mediator (ADR)",
    focus: ["Conflict resolution", "Negotiation", "Dispute settlement"],
  },
  {
    role: "Business Consultant",
    focus: ["Business strategy", "Corporate advisory", "Organisational growth"],
  },
  {
    role: "Alternative Health Consultant",
    focus: ["Advisory services in alternative health", "Holistic wellness"],
  },
];

export const clients = [
  "County Government of Kirinyaga",
  "Ollin Sacco",
  "Bidco Oil Refineries",
  "Fortune Sacco",
  "Agitech",
  "Lea Millers",
  "I&M Bank",
  "Safaricom",
];

// The Healing Balm section. **double asterisks** make words bold.
// When a clinic photo is supplied, put it in public/images/ and set `image`,
// e.g. "/images/clinic.jpg". It then replaces the botanical drawing.
export const healing = {
  eyebrow: "Founder",
  title: "Alternative Healing and Holistic Healthcare",
  clinic: "Healing Balm Herbal Clinic",
  body: [
    "Annet is also the Founder of **Healing Balm Herbal Clinic**, **registered by the Government of Kenya**. Through the clinic, she promotes alternative medicine, herbal healthcare, energy healing and holistic wellness. Her work embraces an integrated approach to physical, emotional and spiritual well-being, drawing on indigenous medicinal knowledge and complementary healing practices.",
    "She is also actively involved in the **conservation of indigenous medicinal plants**, advocating for the preservation of biodiversity and the sustainable use of natural resources. Her commitment extends to safeguarding indigenous healing knowledge, promoting responsible alternative healthcare practices and advancing the recognition of complementary medicine within Kenya’s broader healthcare landscape.",
  ],
  image: "",
};

// "About Annet" questions. Written the way people search, so her name is found
// in plain text. Only use facts that also appear elsewhere on the site.
// seo-plugin.js reuses these for Google's FAQ data, so edit them only here.
export const faq = [
  {
    q: "Who is Annet Wanjiku Njiru?",
    a: "Annet Wanjiku Njiru, also known as Annet Njiru, is a business leader based in Kenya with over 20 years of experience in strategic marketing, entrepreneurship, corporate relations and consultancy. She is the Chief Executive Officer of Big Win Agencies and the Founder of Healing Balm Herbal Clinic.",
  },
  {
    q: "What does Annet Njiru do?",
    a: "Annet Njiru works as a marketing executive, entrepreneur, mediator in Alternative Dispute Resolution (ADR), business consultant and alternative healing consultant in Kenya.",
  },
  {
    q: "What is Healing Balm Herbal Clinic?",
    a: "Healing Balm Herbal Clinic is a clinic in Kenya founded by Annet Wanjiku Njiru and registered by the Government of Kenya. It promotes alternative medicine, herbal healthcare, energy healing and holistic wellness. Annet is also involved in the conservation of indigenous medicinal plants.",
  },
  {
    q: "Which organisations has Annet Njiru worked with?",
    a: `Annet Njiru's selected clientele includes ${clients.slice(0, -1).join(", ")} and ${clients[clients.length - 1]}.`,
  },
];

export const gallery = [
  // { src: '/images/event-1.jpg', caption: 'Caption here' },
];

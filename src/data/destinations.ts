export type Destination = {
  slug: string;
  name: string;
  emoji: string;
  flag: string;
  pinTop: string;
  pinLeft: string;
  whyChoose: string;
  services: string[];
  languages: string[];
  assist: string[];
  hospitalIds: string[];
};

export const commonAssist = [
  "Healthcare provider coordination",
  "Appointment coordination",
  "Medical record coordination",
  "Travel guidance (when required)",
  "Patient support throughout the healthcare journey",
];

export const destinations: Destination[] = [
  {
    slug: "india",
    name: "India",
    emoji: "🇮🇳",
    flag: "/flags/india.png",
    pinTop: "48%",
    pinLeft: "68%",
    whyChoose:
      "India is one of the world's most established destinations for complex and high-acuity care. It offers internationally accredited hospitals, deep specialist capacity, and mature international patient services across major cities.",
    services: [
      "Cardiology",
      "Oncology",
      "Organ Transplantation",
      "Neurology & Neurosurgery",
      "Orthopaedics",
      "Gastroenterology",
    ],
    languages: ["Multi language support"],
    assist: commonAssist,
    hospitalIds: ["apollo-hospitals", "medanta-medicity", "fortis-healthcare"],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    emoji: "🇸🇦",
    flag: "/flags/saudi-arabia.png",
    pinTop: "44%",
    pinLeft: "56%",
    whyChoose:
      "Saudi Arabia is rapidly expanding specialist tertiary and quaternary capacity. It offers regional proximity, cultural alignment, and access to recognised public and private institutions across the Kingdom.",
    services: [
      "Oncology",
      "Organ Transplantation",
      "Cardiovascular",
      "Neurosciences",
      "Fertility",
      "Paediatrics",
    ],
    languages: ["Multi language support"],
    assist: commonAssist,
    hospitalIds: ["kfshrc", "sulaiman-al-habib"],
  },
  {
    slug: "turkey",
    name: "Turkey",
    emoji: "🇹🇷",
    flag: "/flags/turkey.png",
    pinTop: "35%",
    pinLeft: "52%",
    whyChoose:
      "Turkey is recognised for strong elective and specialty care — including aesthetic, dental, ophthalmic and fertility programmes. Its internationally accredited hospitals are well connected from the GCC, Europe and Central Asia.",
    services: [
      "Aesthetic & Reconstructive",
      "Dentistry",
      "Bariatrics",
      "Ophthalmology",
      "Fertility",
      "Cardiology",
    ],
    languages: ["Multi language support"],
    assist: commonAssist,
    hospitalIds: ["acibadem-healthcare", "memorial-healthcare", "american-hospital-istanbul"],
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    emoji: "🇦🇪",
    flag: "/flags/uae.png",
    pinTop: "42%",
    pinLeft: "60%",
    whyChoose:
      "The UAE is recognised for its modern healthcare infrastructure, internationally accredited hospitals, and multicultural medical workforce. It is a preferred destination for patients seeking advanced healthcare services within the GCC and beyond.",
    services: [
      "Orthopaedics & Spine",
      "Cardiology",
      "Oncology",
      "Women's Health & Fertility",
      "Neurology",
      "Paediatrics",
    ],
    languages: ["Multi language support"],
    assist: commonAssist,
    hospitalIds: ["burjeel-holdings", "aster-hospitals", "medcare"],
  },
  {
    slug: "united-states",
    name: "United States",
    emoji: "🇺🇸",
    flag: "/flags/united-states.png",
    pinTop: "30%",
    pinLeft: "20%",
    whyChoose:
      "The United States offers deep specialist expertise in rare and complex conditions, clinical research, precision medicine and multidisciplinary care — often considered when treatment pathways are not readily available elsewhere.",
    services: [
      "Rare & Complex Conditions",
      "Oncology",
      "Precision Medicine",
      "Clinical Trials",
      "Complex Surgery",
      "Second Opinions",
    ],
    languages: ["English"],
    assist: commonAssist,
    hospitalIds: ["mayo-clinic", "md-anderson", "johns-hopkins"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

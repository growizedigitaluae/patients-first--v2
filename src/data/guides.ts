export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  sections: { heading: string; body: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "preparing-your-medical-records",
    title: "Preparing Your Medical Records for International Care",
    excerpt:
      "Well-organised records are the foundation of smooth coordination. Here is what to gather, how to organise it, and how we handle your documents securely.",
    date: "August 2026",
    category: "Coordination",
    readTime: "6 min read",
    image: "/blog-1.webp",
    sections: [
      {
        heading: "Why records matter first",
        body: [
          "Before any specialist can meaningfully review your case, they need a clear picture of your history. Complete, well-organised records reduce delays, avoid repeat testing, and help the hospital team understand your case before you ever arrive.",
        ],
      },
      {
        heading: "What to gather",
        body: [
          "Start with the essentials: recent diagnostic reports, imaging (and where possible the original scan files), lab results, discharge summaries, current medication lists, and a summary of your medical history and any prior surgeries or treatments.",
          "If you have them, add pathology reports, referral letters, and any notes from previous consultants. The more complete the picture, the smoother the coordination process.",
        ],
      },
      {
        heading: "How we help",
        body: [
          "Your coordinator will send you a clear, personalised list of what is needed for your specific case — nothing more, nothing missing. You can share documents securely and we handle translation, organisation and presentation to the facility on your behalf.",
        ],
      },
    ],
  },
  {
    slug: "travel-and-visa-logistics",
    title: "Travel & Visa Logistics for Medical Care Abroad",
    excerpt:
      "Getting to your treatment is about much more than a flight. A practical guide to visas, documents, flights and staying arrangements.",
    date: "July 2026",
    category: "Travel & Care",
    readTime: "7 min read",
    image: "/blog-2.webp",
    sections: [
      {
        heading: "Start with the right documents",
        body: [
          "Depending on your destination, medical travellers may require specific visa categories or additional documentation. Your coordinator works with you to understand exactly what your chosen country requires for your nationality — before you book anything.",
        ],
      },
      {
        heading: "Flights and accommodation",
        body: [
          "For treatment journeys, timing matters. We help you coordinate travel and accommodation that aligns with your appointment schedule, including arrangements for any family members accompanying you.",
        ],
      },
      {
        heading: "The coordination difference",
        body: [
          "Many patients tell us the single greatest relief is having someone who has done this before. We handle the logistics so you can focus on your health — and we stay on top of every detail, from arrival to departure.",
        ],
      },
    ],
  },
  {
    slug: "what-to-expect-coordinating-care-abroad",
    title: "What to Expect When Coordinating Care Abroad",
    excerpt:
      "From the first call to arriving at your chosen hospital, here is the honest, step-by-step picture of how a coordinated medical journey actually works.",
    date: "July 2026",
    category: "Patient Guidance",
    readTime: "8 min read",
    image: "/blog-3.webp",
    sections: [
      {
        heading: "A realistic picture, upfront",
        body: [
          "Coordinating care abroad is different from a standard trip. There are more moving parts — records, specialists, appointments, visas, recovery plans. Our role is to make those parts invisible to you.",
        ],
      },
      {
        heading: "What happens at each stage",
        body: [
          "It begins with a conversation. We listen, review your situation, and help you understand your options — including whether travelling for care is even the right choice. From there, we guide you through matching, planning, arrival, treatment and follow-up, with clear communication at every step.",
        ],
      },
      {
        heading: "The promise we make",
        body: [
          "You will always know what happens next. You will always have a real person to ask. And you will never be expected to manage the system alone.",
        ],
      },
    ],
  },
  {
    slug: "questions-to-ask-before-choosing-a-hospital",
    title: "Questions to Ask Before Choosing a Hospital or Specialist",
    excerpt:
      "The right questions can make all the difference. Use this practical list when evaluating facilities and specialists for your care.",
    date: "June 2026",
    category: "Decision Support",
    readTime: "6 min read",
    image: "/feture-blog.webp",
    sections: [
      {
        heading: "Ask about the team and the experience",
        body: [
          "Who will actually be involved in my care? How much experience does the team have with cases like mine? How many procedures of this type are performed each year? These questions tell you more than any brochure.",
        ],
      },
      {
        heading: "Ask about the practical journey",
        body: [
          "How long will the process take from consultation to treatment? What does follow-up look like after I return home? Who do I contact with questions? What should I prepare before travelling?",
        ],
      },
      {
        heading: "How we support your decisions",
        body: [
          "We are hospital-neutral and independent. Our team helps you compare options honestly, prepare these questions, and understand the answers — so you can make a decision with confidence, not pressure.",
        ],
      },
    ],
  },
  {
    slug: "how-second-opinions-work",
    title: "How Second Opinions Work — and Why They Matter",
    excerpt:
      "A second opinion is one of the most powerful tools a patient has. Here is how the process works and how we coordinate it for you.",
    date: "June 2026",
    category: "Patient Advocacy",
    readTime: "5 min read",
    image: "/journey.webp",
    sections: [
      {
        heading: "What a second opinion really is",
        body: [
          "A second opinion is an independent review of your case by another qualified specialist. It is not a sign of distrust — it is a sign of thoroughness. It can confirm your current plan, offer new options, or simply give you and your family peace of mind.",
        ],
      },
      {
        heading: "How the process works",
        body: [
          "We coordinate the review on your behalf: your records are prepared and shared securely, the specialist's team reviews your case, and you receive their assessment in clear terms. In many cases this can be done remotely, before any travel is considered.",
        ],
      },
      {
        heading: "When it makes sense",
        body: [
          "Any time you are facing a major decision — a new diagnosis, a recommended surgery, or a complex condition — a second opinion can add confidence. Talk to our team about whether a remote or in-person review is right for your situation.",
        ],
      },
    ],
  },
  {
    slug: "supporting-a-family-member-abroad",
    title: "Supporting a Family Member Through Treatment Abroad",
    excerpt:
      "When a loved one travels for care, the whole family travels with them. How we keep families informed, involved and supported.",
    date: "May 2026",
    category: "Family Support",
    readTime: "6 min read",
    image: "/care.webp",
    sections: [
      {
        heading: "Families are part of the journey",
        body: [
          "No one faces treatment alone — and that includes the people who love them. We build family communication into every journey we coordinate, with updates shared in a way you and your family are comfortable with.",
        ],
      },
      {
        heading: "Practical support",
        body: [
          "We coordinate arrangements for accompanying family members, from accommodation to interpretation, so the people supporting you are supported too.",
        ],
      },
      {
        heading: "Communication, on your terms",
        body: [
          "You decide who we share information with and how. Some families want every update; others prefer a single point of contact. We follow your lead, always with respect for privacy.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

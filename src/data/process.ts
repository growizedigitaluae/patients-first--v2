export type ProcessStep = {
  id: string;
  title: string;
  short: string;
  desc: string;
  items: string[];
  important?: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Understanding Your Healthcare Needs",
    short: "Contact",
    desc: "Every journey begins with understanding your situation. During our initial conversation, we take the time to understand your healthcare needs, answer your questions, explain how the process works, and discuss the information required to coordinate the next stage of your journey.",
    items: [
      "Initial discussion",
      "Understanding your healthcare needs",
      "Explanation of the process",
      "Dedicated point of contact",
    ],
  },
  {
    id: "02",
    title: "Medical Information Coordination",
    short: "Medical Information",
    desc: "To coordinate communication with healthcare providers, we organise the relevant medical information available for your case. Depending on your circumstances, this may include medical reports, imaging, laboratory results, referral letters, or other supporting documentation. Where required, additional documentation or certified translations may also be coordinated.",
    items: [
      "Medical record organisation",
      "Documentation review for completeness",
      "Translation coordination (when required)",
      "Secure information management",
    ],
  },
  {
    id: "03",
    title: "Coordination with Healthcare Providers",
    short: "Provider Coordination",
    desc: "Once your documentation has been prepared, we coordinate communication with appropriate healthcare providers based on your healthcare needs and preferred destination. Healthcare providers may request additional information before sharing consultation availability, administrative requirements, estimated costs, or other relevant information.",
    items: [
      "Healthcare provider coordination",
      "Information sharing with your consent",
      "Consultation availability requests",
      "Administrative requirement clarity",
    ],
    important:
      "Medical advice, diagnosis, treatment recommendations, and clinical decisions are provided exclusively by licensed healthcare professionals.",
  },
  {
    id: "04",
    title: "Reviewing Your Healthcare Options",
    short: "Review Options",
    desc: "Once information is received, we explain the available options, discuss the information provided by healthcare providers, and answer your non-clinical questions. This allows you to understand the available pathways before making your own healthcare decisions.",
    items: [
      "Consultation options",
      "Estimated treatment costs (when available)",
      "Expected timelines",
      "Administrative requirements",
      "Travel considerations",
    ],
  },
  {
    id: "05",
    title: "Planning Your Healthcare Journey",
    short: "Journey Planning",
    desc: "After you have selected your preferred healthcare provider, we coordinate the practical arrangements required for your healthcare journey. The services required vary from patient to patient and are coordinated according to your individual circumstances.",
    items: [
      "Appointment coordination",
      "Healthcare documentation",
      "Travel guidance",
      "Accommodation guidance (when requested)",
      "Ongoing communication",
    ],
  },
  {
    id: "06",
    title: "During Your Healthcare Journey",
    short: "During Your Journey",
    desc: "Throughout your healthcare journey, Patients First Worldwide continues coordinating the agreed non-clinical aspects of your case. Your Patient Journey Coordinator remains your primary point of contact for communication, administrative coordination, and practical support throughout the process.",
    items: [
      "Communication coordination",
      "Appointment updates",
      "Administrative assistance",
      "Family communication (when requested)",
    ],
  },
  {
    id: "07",
    title: "After Your Healthcare Visit",
    short: "Follow-Up",
    desc: "Healthcare journeys do not always end when a consultation or treatment has been completed. Where required, we continue coordinating follow-up communication, medical documentation, and future appointments requested by your healthcare provider. The level of coordination depends on your individual healthcare journey and ongoing requirements.",
    items: [
      "Follow-up communication coordination",
      "Medical documentation assistance",
      "Future appointment coordination (as requested)",
      "Continued patient support as needed",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  about: string;
  role: string;
  impact: {
    label: string;
    value: string;
  }[];
  bulletPoints: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: "jal-jeevan-mission",
    title: "Jal Jeevan Mission (ISA)",
    shortDesc: "Implementation Support Agency providing community mobilization, village planning, IEC activities, and monitoring of safe water supply.",
    about: "Jal Jeevan Mission is a flagship programme of the Government of India which aims to provide safe and adequate drinking water through individual household tap connections to all households in rural India by 2024.",
    role: "As an Implementation Support Agency (ISA), PSRWS is responsible for:",
    bulletPoints: [
      "Community mobilization and awareness generation",
      "Capacity building of Gram Panchayat and VWSC",
      "Support in planning and implementation",
      "Technical assistance and monitoring"
    ],
    impact: [
      {
        label: "Households Connected",
        value: "1000+"
      },
      {
        label: "Villages Covered",
        value: "20+"
      },
      {
        label: "People Benefited",
        value: "5000+"
      }
    ],
    image: "/assets/water.jpg"
  },
  // Add other projects similarly...
];

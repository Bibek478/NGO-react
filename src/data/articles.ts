export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "sbm-success",
    title: "Success in Swachh Bharat Mission",
    date: "October 24, 2023",
    excerpt: "PSRWS's successful involvement in rural household toilet construction and sanitation awareness under Swachh Bharat Mission in Phandeshwar Block.",
    content: `PSRWS has achieved remarkable success in implementing the Swachh Bharat Mission in Phandeshwar Block. Through dedicated efforts in rural household toilet construction and comprehensive sanitation awareness programs, we've significantly improved community health and hygiene standards.

Our team worked closely with local communities, conducting awareness sessions, providing technical support for toilet construction, and ensuring sustainable maintenance practices. This initiative has led to a marked improvement in sanitation infrastructure and community awareness about hygiene practices.`,
    image: "/assets/SBM.jpg"
  },
  {
    id: "waste-management",
    title: "Solid Waste Management Progress",
    date: "October 15, 2023",
    excerpt: "Transforming rural sanitation through community engagement and sustainable waste management practices across multiple blocks.",
    content: `Our solid waste management initiative has made significant strides in transforming rural sanitation practices. Through a comprehensive approach combining community engagement and sustainable waste management techniques, we've successfully implemented effective systems across Phandeshwar, Navadwip, Matigara, and Kharibari blocks.

The program focuses on segregation at source, composting of organic waste, and proper disposal of non-biodegradable materials. Community participation has been key to the success of this initiative, with local residents actively involved in maintaining cleanliness and following proper waste disposal practices.`,
    image: "/assets/SBM.jpg"
  }
];

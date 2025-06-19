import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';

const ArticlesSection = () => {  
  const articles = [
    // {
    //   image: "/assets/SBM.jpg",
    //   date: "October 24, 2023",
    //   title: "Success in Swachh Bharat Mission",
    //   excerpt: "PSRWS's successful involvement in rural household toilet construction and sanitation awareness under Swachh Bharat Mission in Phandeshwar Block."
    // },
    // {
    //   image: "/assets/SBM.jpg",
    //   date: "October 15, 2023",
    //   title: "Solid Waste Management Progress",
    //   excerpt: "Transforming rural sanitation through community engagement and sustainable waste management practices across Phandeshwar, Navadwip, Matigara, and Kharibari blocks."
    // },
    // {
    //   image: "/assets/SBM.jpg",
    //   date: "October 10, 2023",
    //   title: "Community Engagement in Sanitation",
    //   excerpt: "Empowering communities through training and awareness programs to enhance sanitation practices and promote health in rural areas."
    // }
  ];

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
        <p className="text-center text-gray-600 mb-12">Stay updated with our recent activities and insights</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              to={`/articles/${index}`} 
              className="hover:no-underline h-full flex"
            >
              <ArticleCard 
               key={index}
               image={article.image}
               date={article.date}
               title={article.title}
               excerpt={article.excerpt}
               className="flex flex-col h-full w-full"
              />
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/news" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

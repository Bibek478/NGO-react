interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const ArticleCard = ({ image, date, title, excerpt }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="h-48 bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/assets/No-img.jpg';
          }}
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-500 mb-2 font-medium">{date}</p>
        <h3 className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-700">{title}</h3>
        <p className="text-gray-700">{excerpt}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
            Read More <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

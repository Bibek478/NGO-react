interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const ArticleCard = ({ image, date, title, excerpt }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-2">{date}</p>
        <h3 className="text-lg font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700">{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;

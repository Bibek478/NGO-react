
interface ArticleCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const ArticleCard = ({ image, date, title, excerpt }: ArticleCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xs text-blue-500 mb-1">{date}</p>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;

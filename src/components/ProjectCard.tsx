
interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const ProjectCard = ({ image, title, subtitle, description }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="p-4 flex-grow">
        <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4 object-contain" />
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-sm text-blue-600 text-center mb-3">{subtitle}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2">
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;

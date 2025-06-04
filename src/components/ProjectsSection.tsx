import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Jal Jeevan Mission (ISA)",
      image: "/assets/jjm.webp",
      description: "Supporting the flagship programme of Government of India to provide safe drinking water through individual household tap connections to all rural households by 2024."
    },
    {
      title: "Mission Nirmal Bangla",
      image: "/assets/nirmal-bangla.webp",
      description: "Facilitating construction of household toilets and promoting behavioral change to achieve clean and hygienic rural communities."
    },
    {
      title: "Solid Waste Management",
      image: "/assets/solid_waste.webp",
      description: "Leading awareness and implementation of waste segregation, recycling, composting, and sustainable waste management systems in rural areas."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
              <div className="h-48 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/No-img.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to="/projects" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View Details <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

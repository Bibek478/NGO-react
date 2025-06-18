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
      description: "Leading awareness and implementation of waste segregation, eco-friendly disposal practices, and sustainable waste management systems in rural areas."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto bg-gray-100 p-8 rounded-lg">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-white rounded-lg overflow-hidden shadow-md w-full max-w-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-sky-200 hover:transform hover:scale-102 hover:border hover:border-sky-200"
            >
              <div className="h-64 p-1 flex items-center justify-center bg-gray-50">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="max-h-100 max-w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/No-img.jpg';
                  }}
                />
              </div>
              <div className="p-8 pt-9 pb-9 flex-grow flex flex-col">
                <h3 className="font-bold text-2xl mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-10 overflow-hidden h-41">{project.description}</p>
                <div className="mt-auto">
                  <Link 
                    to="/projects" 
                    className="bg-blue-500 text-white py-3 px-6 rounded-md block text-center hover:bg-blue-600 transition-colors text-lg font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

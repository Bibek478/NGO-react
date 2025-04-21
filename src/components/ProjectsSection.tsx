
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      image: "/lovable-uploads/b3526753-d2e2-4304-b28f-80bcfe44b1ab.png",
      title: "Har Ghar Jal",
      subtitle: "Jal Jeevan Mission (JSA)",
      description: "Supporting the flagship programme of Government of India to provide safe drinking water through household tap connections to all rural households by 2024."
    },
    {
      image: "/lovable-uploads/b3526753-d2e2-4304-b28f-80bcfe44b1ab.png",
      title: "Mission Nirmal Bangla",
      subtitle: "",
      description: "Facilitating construction of household toilets and promoting behavioral change for cleanliness and hygiene across communities."
    },
    {
      image: "/lovable-uploads/b3526753-d2e2-4304-b28f-80bcfe44b1ab.png",
      title: "Solid Waste Management",
      subtitle: "",
      description: "Leading awareness and implementation of waste segregation, recycling, and establishing efficient and sustainable waste management systems in rural areas."
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const team = [
    {
      image: "/assets/president.jpg",
      name: "Arup Ratan Roy",
      role: "President",
      bio: "Leading our organization with over 15 years of experience in community development and social welfare."
    },
    {
      image: "/assets/secretaey.jpg",
      name: "Prasenjit Chakraborty",
      role: "Secretary",
      bio: "Coordinating our initiatives and partnerships with extensive experience in project management and stakeholder relations."
    },
    {
      image: "/assets/T.jpg",
      name: "Soma Das",
      role: "Treasurer",
      bio: "Managing our finances with transparency and accountability to ensure resources are used effectively."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Our Team
            <div className="absolute h-1 w-16 bg-blue-500 bottom-[-8px] left-1/2 transform -translate-x-1/2"></div>
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            Meet the dedicated individuals driving positive change in our communities through passion, expertise, and commitment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Our team is supported by a dedicated group of volunteers and community members who contribute their time and skills to our mission.
          </p>
          <Link 
            to="/join" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Join Our Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

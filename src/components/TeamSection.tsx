
import TeamMember from './TeamMember';

const TeamSection = () => {
  const team = [
    {
      image: "/assets/president.jpg",
      name: "Arup Ratan Roy",
      role: "President"
    },
    {
      image: "/assets/secretaey.jpg",
      name: "Prasenjit Chakraborty",
      role: "Secretary"
    },
    {
      image: "/assets/T.jpg",
      name: "Soma Das",
      role: "Treasurer"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-center text-gray-600 mb-12">Meet the dedicated individuals driving positive change in our communities</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

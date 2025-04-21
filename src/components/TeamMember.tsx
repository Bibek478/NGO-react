interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember = ({ image, name, role }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-blue-500">{role}</p>
    </div>
  );
};

export default TeamMember;

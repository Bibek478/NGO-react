
interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember = ({ image, name, role }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-blue-500">{role}</p>
    </div>
  );
};

export default TeamMember;

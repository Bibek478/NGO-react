interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio?: string;
}

const TeamMember = ({ image, name, role, bio }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all group">
      <div className="w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-md group-hover:border-blue-200 transition-all">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/assets/No-img.jpg';
          }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{role}</p>
      {bio && <p className="text-gray-600 text-center text-sm">{bio}</p>}
    </div>
  );
};

export default TeamMember;

const MissionSection = () => {
  const stats = [
    { value: "10+", label: "Years of Service" },
    { value: "20+", label: "Villages Covered" },
    { value: "5000+", label: "Lives Impacted" },
    { value: "100+", label: "Volunteers" }
  ];

  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 relative">
          Our Mission
          <div className="absolute h-1 w-24 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-8"></div>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          We are dedicated to empowering communities and preserving our environment through sustainable initiatives, education, and grassroots action. Together, we can create lasting positive change.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;

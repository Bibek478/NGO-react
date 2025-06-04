
const LogoSection = () => {
  const logoStyle = "max-h-16 max-w-[140px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

  // Logos of partners and affiliations
  const partners = [
    {
      name: "Jal Jeevan Mission",
      logo: "/assets/jjm.webp"
    },
    {
      name: "Swachh Bharat Mission",
      logo: "/assets/SBM.jpg"
    },
    {
      name: "Mission Nirmal Bangla",
      logo: "/assets/nirmal-bangla.webp"
    },
    {
      name: "Solid Waste Management",
      logo: "/assets/solid_waste.webp"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">Our Partners</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          We collaborate with government initiatives and organizations to create meaningful change
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={logoStyle}
                onError={(e) => {
                  e.currentTarget.src = '/assets/No-img.jpg';
                }}
              />
              <p className="mt-2 text-xs text-gray-500">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

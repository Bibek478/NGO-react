
const LogoSection = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12 md:space-x-24">
          <div className="flex flex-col items-center">
            {/* image/icon removed */}
            <p className="text-sm text-gray-600">Clean Water</p>
          </div>
          
          <div className="flex flex-col items-center">
            {/* image/icon removed */}
            <p className="text-sm text-gray-600">Sanitation</p>
          </div>
          
          <div className="flex flex-col items-center">
            {/* image/icon removed */}
            <p className="text-sm text-gray-600">Recycling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

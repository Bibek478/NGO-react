import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: "url('/assets/water.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Building Strong Communities</h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8">Together we can make a difference.</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
          <Link to="/news" className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base">
            Latest News
          </Link>
          <Link to="/join" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base">
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero background image */}
      <div className="w-full h-[500px]">
        <div 
          className="w-full h-full bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/lovable-uploads/421d47aa-113e-4849-93de-a0101566279a.png')" }}
        ></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 px-4">Building Strong Communities</h1>
        <p className="text-xl mb-10">Together we can make a difference.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Latest News
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-6 py-2 rounded-md">
            Volunteer
          </button>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        <button className="h-2 w-2 rounded-full bg-white"></button>
        <button className="h-2 w-2 rounded-full bg-white/50"></button>
        <button className="h-2 w-2 rounded-full bg-white/50"></button>
        <button className="h-2 w-2 rounded-full bg-white/50"></button>
        <button className="h-2 w-2 rounded-full bg-white/50"></button>
      </div>
    </div>
  );
};

export default HeroSection;

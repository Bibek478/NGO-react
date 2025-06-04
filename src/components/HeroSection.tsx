import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/water.jpg',
      title: 'Protecting Our Environment',
      subtitle: 'Creating sustainable solutions for a greener future.',
    },
    {
      image: '/assets/water2.jpg',
      title: 'Building Strong Communities',
      subtitle: 'Together we can make a difference.',
    },
    {
      image: '/assets/nirmal.jpg',
      title: 'Empowering Rural Lives',
      subtitle: 'Bringing positive change through education and action.',
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[85vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>
      ))}
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight animate-fadeIn">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-90">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6">
          <Link 
            to="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Our Projects
          </Link>
          <Link 
            to="/donate" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium transition-colors"
          >
            Support Us
          </Link>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125 w-6' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default HeroSection;

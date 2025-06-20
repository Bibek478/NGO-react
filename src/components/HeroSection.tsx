import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(true);
  const [displayedContent, setDisplayedContent] = useState(0);

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

  useEffect(() => {
    // Hide text and update content immediately when slide changes
    setShowText(false);
    
    // Use a simpler animation sequence that ensures all elements fade out completely
    const updateContentTimer = setTimeout(() => {
      // Update content after elements have fully disappeared
      setDisplayedContent(currentSlide);
      
      // Short delay before showing the new content
      const showTextTimer = setTimeout(() => {
        setShowText(true);
      }, 300);
      
      return () => clearTimeout(showTextTimer);
    }, 500); // Wait until all elements are fully hidden
    
    return () => clearTimeout(updateContentTimer);
  }, [currentSlide]);

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maxHeight: '100vh'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>
      ))}
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center max-w-5xl mx-auto">
        {/* Force key-based remounting of all elements to ensure proper transitions */}
        <div key={`content-${displayedContent}`} className="w-full">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight transition-all duration-700 ease-out transform ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {slides[displayedContent].title}
          </h1>
          <p className={`text-1xl sm:text-1xl md:text-2xl lg:text-2xl font-normal mb-1 sm:mb-3 tracking-tight transition-all duration-700 ease-out transform ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {slides[displayedContent].subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 sm:space-x-6 justify-center transition-all duration-700 ease-out transform ${showText ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10 delay-0'}`}>
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
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center space-x-3">
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


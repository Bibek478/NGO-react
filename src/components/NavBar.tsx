
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="text-blue-600 w-8 h-8 mr-1">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h1 className="text-blue-600 font-bold text-xl">PSRWS</h1>
            <p className="hidden md:block text-xs ml-1 text-gray-500">foundation</p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#news" className="text-gray-600 hover:text-blue-600">News & Publication</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        
        <div className="hidden md:flex space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Join us
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Donate Now
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#news" className="text-gray-600 hover:text-blue-600">News & Publication</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <div className="flex space-x-2 pt-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm">
                Join us
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

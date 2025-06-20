import React, { useState } from "react";
import { Menu, Home, Info, Settings, Mail, FileText, UserPlus, Heart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link, useLocation, useNavigate } from "react-router-dom";

const mobileMenuItems = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: Info },
  { name: "Projects", to: "/projects", icon: Settings },
  { name: "Publication", to: "/news", icon: FileText },
  { name: "Contact", to: "/contact", icon: Mail },
];

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center h-24">
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-600" aria-label="Open menu">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="max-w-xs w-64 p-0 flex flex-col">
                <nav className="flex flex-col h-full">
                  <div className="flex-1 overflow-auto">
                    <ul className="py-6 px-2 space-y-2">
                      {mobileMenuItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.to}
                            className={`flex items-center py-3 px-4 rounded hover:bg-blue-50 transition-colors text-gray-700 ${
                              location.pathname === item.to ? "text-blue-600 font-semibold" : ""
                            }`}
                            onClick={closeMenu}
                          >
                            <item.icon className="mr-3 text-blue-500" size={20} />
                            <span className="font-medium text-base">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                      <li className="mt-3 flex space-x-2 px-2">
                        <Link
                          to="/join"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm w-full flex justify-center items-center"
                          onClick={closeMenu}
                        >
                          <UserPlus size={16} className="mr-2" />
                          Join us
                        </Link>
                        <Link
                          to="/donate"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm w-full flex justify-center items-center"
                          onClick={closeMenu}
                        >
                          <Heart size={16} className="mr-2" />
                          Donate Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-4 text-xs text-gray-500 bg-gray-50 mt-auto">
                    © PSRWS. All rights reserved.
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center py-2 md:pt-10">
            <Link to="/">
              <img
                src="/assets/NGO-logo.svg"
                alt="PSRWS Foundation Logo"
                className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto object-contain"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-3 lg:space-x-6 text-base lg:text-lg font-medium">
          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-bold" : "text-gray-600"}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-600 ${location.pathname === "/about" ? "text-blue-600 font-bold" : "text-gray-600"}`}>About</Link>
          <Link to="/projects" className={`hover:text-blue-600 ${location.pathname === "/projects" ? "text-blue-600 font-bold" : "text-gray-600"}`}>Projects</Link>
          <Link to="/news" className={`whitespace-nowrap hover:text-blue-600 ${location.pathname === "/news" ? "text-blue-600 font-bold" : "text-gray-600"}`}>Publications</Link>
          <Link to="/contact" className={`hover:text-blue-600 ${location.pathname === "/contact" ? "text-blue-600 font-bold" : "text-gray-600"}`}>Contact</Link>
        </div>
        <div className="hidden md:flex space-x-2 lg:space-x-3">
          <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-md flex items-center text-sm whitespace-nowrap">
            Join us
          </Link>
          <Link 
            to="/donate" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 py-2 rounded-md flex items-center text-sm whitespace-nowrap"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


import React from "react";
import { Menu, Home, Info, Settings, Mail, FileText, UserPlus, Heart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

const mobileMenuItems = [
  { name: "Home", to: "/", icon: Home },
  { name: "About", to: "/about", icon: Info },
  { name: "Projects", to: "/projects", icon: Settings },
  { name: "News & Publication", to: "/news", icon: FileText },
  { name: "Contact", to: "/contact", icon: Mail },
];

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <Sheet>
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
                          >
                            <item.icon className="mr-3 text-blue-500" size={20} />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                      <li className="mt-3 flex space-x-2 px-2">
                        <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm w-full flex justify-center items-center">
                          <UserPlus size={16} className="mr-2" />
                          Join us
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm w-full flex justify-center items-center">
                          <Heart size={16} className="mr-2" />
                          Donate Now
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* Drawer footer */}
                  <div className="border-t border-gray-200 px-4 py-4 text-xs text-gray-500 bg-gray-50 mt-auto">
                    © PSRWS. All rights reserved.
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          {/* Brand Name Only (No logo/image, but leave space if needed) */}
          <div className="flex items-center justify-center w-24 h-8 mr-2">
            {/* Empty space for logo, intentionally left blank */}
          </div>
          <h1 className="text-blue-600 font-bold text-xl">PSRWS</h1>
          <p className="hidden md:block text-xs ml-1 text-gray-500">foundation</p>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600"}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-600 ${location.pathname === "/about" ? "text-blue-600 font-medium" : "text-gray-600"}`}>About</Link>
          <Link to="/projects" className={`hover:text-blue-600 ${location.pathname === "/projects" ? "text-blue-600 font-medium" : "text-gray-600"}`}>Projects</Link>
          <Link to="/news" className={`hover:text-blue-600 ${location.pathname === "/news" ? "text-blue-600 font-medium" : "text-gray-600"}`}>News & Publication</Link>
          <Link to="/contact" className={`hover:text-blue-600 ${location.pathname === "/contact" ? "text-blue-600 font-medium" : "text-gray-600"}`}>Contact</Link>
        </div>
        {/* Desktop CTAs */}
        <div className="hidden md:flex space-x-3">
          <Link to="/join" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            Join us
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

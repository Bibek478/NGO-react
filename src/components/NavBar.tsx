
import { useState } from 'react';
import { Menu, Home, Info, Settings, Contact } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const mobileMenuItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Projects", href: "#projects", icon: Settings },
  { name: "News & Publication", href: "#news", icon: Info },
  { name: "Contact", href: "#contact", icon: Contact },
];

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Hamburger menu: visible only on mobile, on the left */}
        <div className="flex items-center">
          <div className="md:hidden mr-2">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-600">
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="max-w-xs w-64 p-0">
                <nav className="flex flex-col h-full">
                  <div className="flex-1 overflow-auto">
                    <ul className="py-6 px-2 space-y-2">
                      {mobileMenuItems.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="flex items-center py-3 px-4 rounded hover:bg-blue-50 transition-colors text-gray-700"
                          >
                            <item.icon className="mr-3 text-blue-500" size={20} />
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                      <li className="mt-3 flex space-x-2 px-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm w-full">
                          Join us
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm w-full">
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
          {/* Brand name/text, no logo/image */}
          <div className="flex items-center">
            <h1 className="text-blue-600 font-bold text-xl">PSRWS</h1>
            <p className="hidden md:block text-xs ml-1 text-gray-500">foundation</p>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#news" className="text-gray-600 hover:text-blue-600">News & Publication</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Join us
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

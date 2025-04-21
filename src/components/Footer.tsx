import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-16">
          {/* About Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4 text-center sm:text-left">About PSRWS</h3>
            <p className="text-sm text-gray-400 mb-4 text-center sm:text-left">
              Empowering communities through sustainable development, clean water initiatives, and social change.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="flex flex-wrap justify-center sm:block gap-4 sm:gap-0 sm:space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center sm:text-left">Get Involved</h3>
            <ul className="flex flex-wrap justify-center sm:block gap-4 sm:gap-0 sm:space-y-2 text-sm">
              <li><a href="/join" className="hover:text-white transition-colors">Join Us</a></li>
              <li><a href="/donate" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 text-center sm:text-left">Contact</h3>
            <ul className="flex flex-col items-center sm:items-start space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Phandeshwar, Darjeeling, West Bengal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919933238911" className="hover:text-white transition-colors">
                  +91 99332 38911
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:psrws.ngo@gmail.com" className="hover:text-white transition-colors">
                  psrws.ngo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} PSRWS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

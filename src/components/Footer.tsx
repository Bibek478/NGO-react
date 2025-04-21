
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-blue-400 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-blue-400 font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Join Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Donate</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-blue-400 font-bold mb-4">Contact</h3>
            <p className="mb-2">Phandeshwar, Darjeeling, West Bengal, India</p>
            <p className="mb-2">Phone: +91 99332 38911</p>
            <p className="mb-2">Email: psrws.ngo@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© PSRWS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

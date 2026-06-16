import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const handleNavigation = (path) => {
    // Placeholder for navigation logic
    console.log('Navigate to:', path);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container px-4 py-20 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Future Falcon Sky Technology
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Inspiring innovation through education while transforming industries with cutting-edge drone solutions
            </p>
            <div className="flex items-center gap-2 text-yellow-500 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Building the Future of Aerial Technology</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("/drone-workshop-offerings")} 
                  className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm text-left"
                >
                  <span className="w-0 h-px bg-yellow-500 group-hover:w-4 transition-all duration-300"></span>
                  <span>Workshops</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("dualtracks")} 
                  className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm text-left"
                >
                  <span className="w-0 h-px bg-yellow-500 group-hover:w-4 transition-all duration-300"></span>
                  <span>Products & Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm text-left"
                >
                  <span className="w-0 h-px bg-yellow-500 group-hover:w-4 transition-all duration-300"></span>
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-all duration-300 text-sm text-left"
                >
                  <span className="w-0 h-px bg-yellow-500 group-hover:w-4 transition-all duration-300"></span>
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <a 
                href="tel:+918618418636" 
                className="group flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-400 group-hover:text-yellow-500 transition-colors">+91 78290 29214</p>
                  <p className="text-gray-400 group-hover:text-yellow-500 transition-colors">+91 8618418636</p>
                </div>
              </a>
              
              <a 
                href="mailto:contact@futurefalconskytechnology.com" 
                className="group flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-yellow-500 transition-colors break-all">
                  contact@futurefalconskytechnology.com
                </span>
              </a>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                </div>
                <p className="text-sm text-gray-400">Bengaluru, Karnataka 560068</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Future Falcon Sky Technology Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
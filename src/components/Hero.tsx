import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/newfav.png";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [safetyCount, setSafetyCount] = useState(0);

  // Count-up animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateCount = (setter, end) => {
      let current = 0;
      const increment = end / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
    };

    animateCount(setStudentsCount, 100);
    animateCount(setExperienceCount, 10);
    animateCount(setSafetyCount, 100);
  }, []);

  const handleStartExploring = () => {
    const missionSection = document.getElementById('about');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterpriseSolutions = () => {
    const dualTracksSection = document.getElementById('dualtracks');
    if (dualTracksSection) {
      dualTracksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Drone Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Professional drone technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className="container flex h-20 items-center justify-between px-6 mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 "></div>
              <img src={logo} alt="Future Falcon Sky Technology Logo" className="relative h-14 md:h-16 w-auto drop-shadow-2xl" />
            </div>
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg leading-tight">
              FUTURE FALCON SKY TECHNOLOGY
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#home"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-yellow-500 hover:bg-yellow-500/10 focus:outline-none"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-yellow-500 hover:bg-yellow-500/10 focus:outline-none"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#dualtracks"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-yellow-500 hover:bg-yellow-500/10 focus:outline-none"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-yellow-500 hover:bg-yellow-500/10 focus:outline-none"
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg">
            <div className="container px-4 py-4 mx-auto">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#dualtracks"
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Animated Drone Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Drone 1 - Floating Path */}
        <div className="absolute" style={{
          top: '15%',
          left: '5%',
          animation: 'drone1 20s ease-in-out infinite'
        }}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="text-yellow-500 opacity-40">
            {/* Propellers */}
            <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 20" to="360 80 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 80" to="360 20 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            {/* Arms */}
            <line x1="35" y1="35" x2="20" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="35" x2="80" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="35" y1="65" x2="20" y2="80" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="65" x2="80" y2="80" stroke="currentColor" strokeWidth="3"/>
            {/* Body */}
            <rect x="40" y="40" width="20" height="20" rx="4" fill="currentColor"/>
            <circle cx="50" cy="50" r="6" fill="#000000"/>
          </svg>
        </div>

        {/* Drone 2 - Smooth Patrol */}
        <div className="absolute" style={{
          top: '40%',
          left: '-15%',
          animation: 'drone2 25s ease-in-out infinite'
        }}>
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="text-yellow-500 opacity-35">
            {/* Propellers */}
            <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 20" to="360 80 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 80" to="360 20 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            {/* Arms */}
            <line x1="35" y1="35" x2="20" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="35" x2="80" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="35" y1="65" x2="20" y2="80" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="65" x2="80" y2="80" stroke="currentColor" strokeWidth="3"/>
            {/* Body */}
            <rect x="40" y="40" width="20" height="20" rx="4" fill="currentColor"/>
            <circle cx="50" cy="50" r="6" fill="#000000"/>
          </svg>
        </div>

        {/* Drone 3 - Hovering Pattern */}
        <div className="absolute" style={{
          top: '65%',
          right: '10%',
          animation: 'drone3 30s ease-in-out infinite'
        }}>
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="text-yellow-500 opacity-30">
            {/* Propellers */}
            <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="20" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 20" to="360 80 20" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 20 80" to="360 20 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 80 80" to="360 80 80" dur="0.3s" repeatCount="indefinite"/>
            </circle>
            {/* Arms */}
            <line x1="35" y1="35" x2="20" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="35" x2="80" y2="20" stroke="currentColor" strokeWidth="3"/>
            <line x1="35" y1="65" x2="20" y2="80" stroke="currentColor" strokeWidth="3"/>
            <line x1="65" y1="65" x2="80" y2="80" stroke="currentColor" strokeWidth="3"/>
            {/* Body */}
            <rect x="40" y="40" width="20" height="20" rx="4" fill="currentColor"/>
            <circle cx="50" cy="50" r="6" fill="#000000"/>
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes drone1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30vw, -10vh);
          }
          50% {
            transform: translate(60vw, 5vh);
          }
          75% {
            transform: translate(40vw, 15vh);
          }
        }

        @keyframes drone2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(40vw, 10vh);
          }
          66% {
            transform: translate(90vw, -5vh);
          }
        }

        @keyframes drone3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(-15vw, -8vh);
          }
          40% {
            transform: translate(-35vw, 5vh);
          }
          60% {
            transform: translate(-50vw, -10vh);
          }
          80% {
            transform: translate(-25vw, 8vh);
          }
        }
      `}</style>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 mx-auto">
        <div className="max-w-4xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-yellow-500 tracking-wide">
              Future of Drone Solutions
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-relaxed mb-6">
            <span className="block text-white mb-2">
              Innovative Drone Systems
            </span>
            <span className="block text-yellow-500">
              Transforming Industries
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Igniting curiosity, creativity, and innovation through the power of drones to educate, inspire, and transform communities worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 group"
              onClick={handleStartExploring}
            >
              Start Exploring
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold transition-all duration-300"
              onClick={handleEnterpriseSolutions}
            >
              Enterprise Solutions
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
            <div className="group space-y-1 text-center sm:text-left p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                {studentsCount}+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                projects completed
              </div>
            </div>
            <div className="group space-y-1 text-center sm:text-left p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                {experienceCount}+
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Years Experience in drone systems
              </div>
            </div>
            <div className="group space-y-1 text-center sm:text-left p-5 rounded-xl bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-yellow-500 group-hover:scale-110 transition-transform duration-300">
                {safetyCount}%
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                Safety Record
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-yellow-500/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
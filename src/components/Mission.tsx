import React from "react";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const Mission = () => {
  const features = [
    { 
      icon: Target, 
      title: "Industry Solutions", 
      description: "Cutting-edge drone technology for businesses"
    },
    { 
      icon: Users, 
      title: "Drone Intelligence", 
      description: "Enhancing efficiency and safety across industries"
    },
    { 
      icon: Lightbulb, 
      title: "STEM Education", 
      description: "Hands-on learning with real-world applications"
    },
    { 
      icon: Rocket, 
      title: "Aerial Data Solutions", 
      description: "Delivering precise, high-quality aerial data"
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/3 rounded-full blur-3xl"></div>
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging innovation and industry through cutting-edge drone technology for a smarter, more connected world.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Optional: Stats or CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
            <span>Innovating the Future of Aerial Technology</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
  );
};

export default Mission;
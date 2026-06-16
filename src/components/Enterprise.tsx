import React from "react";
import { Globe, Settings, Users, TestTube } from "lucide-react";

const Enterprise = () => {
  const advantages = [
    { icon: Globe, title: "INDIGENOUS DESIGN", description: "100% Indian R&D and Support. Our drones are designed and manufactured in India, ensuring complete control over quality, customization, and rapid innovation cycles tailored to local needs and global standards." },
    { icon: Settings, title: "CUSTOM CONFIGURATIONS", description: "Sensor combos tailored to your mission. From thermal imaging to multispectral sensors, we offer flexible configurations that adapt to diverse applications including agriculture, surveillance, and industrial inspections." },
    { icon: Users, title: "LOCAL SERVICE & TRAINING", description: "Fast turnaround, field-ready guidance. Our dedicated support team provides on-site training, maintenance, and technical assistance with quick response times to minimize downtime and maximize operational efficiency." },
    { icon: TestTube, title: "R&D-FRIENDLY", description: "Tested multiple times to get the best performance. Rigorous testing protocols ensure reliability in extreme conditions, with continuous R&D investments driving cutting-edge features and performance optimizations." },
  ];

  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl"></div>
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Our Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Future Falcon: Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for excellence and reliability in drone innovation
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-all duration-500">
                    <advantage.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-yellow-500 mb-4 tracking-wider group-hover:text-yellow-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>

                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-yellow-500 group-hover:w-8 group-hover:h-8 transition-all duration-500"></div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Bottom Tagline */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
            <span className="text-yellow-500/70 font-medium">Engineered in India, Built for the World</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
  );
};

export default Enterprise;
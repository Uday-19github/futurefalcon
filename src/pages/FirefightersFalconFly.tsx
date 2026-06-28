import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Flame, ArrowLeft, Shield, Droplets, Eye, Radio, Gauge, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import droneHero from "@/assets/ff.png";
import newpage from "@/assets/newpage.png";

const FirefightersFalconFly = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
      name: "",
      mobile: "",
      email: "",
      enquiry_type: "",
      product_service: ""
    });
  
    

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productOptions = [
    'Seed Ball Dispersal Drones',
    'Falcon X security and surveillance drone',
    'Survey & Mapping Drones',
    'Firefighter\'s Falcon Fly',
    'Falcon Mist Wash Drones',
    'Custom Drone Services'
  ];

  const serviceOptions = ['Educational Institutions Service', 'Seed Ball Dispersal Drone Service', 'Surveillance & Security Drone Service', 'Survey & Mapping Drones Service', 'Firefighter\'s Falcon Fly Service', 'Falcon Mist Wash Drone Service', 'Custom Drone Service'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'enquiry_type' && { product_service: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.mobile || !formData.email || !formData.enquiry_type || !formData.product_service) {
      alert('Please fill in all fields');
      return;
    }

    // Validate mobile number (10 digits)
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      // Replace with your Google Apps Script Web App URL
      const googleScriptURL = '';
      
      const formDataToSend = new URLSearchParams();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(googleScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });
      
      alert('Thank you! Your enquiry has been submitted successfully.');
      setFormData({
        name: "",
        mobile: "",
        email: "",
        enquiry_type: "",
        product_service: ""
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your enquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-16 space-y-20">
        {/* ================= HERO SECTION ================= */}
        <section className={`text-center transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col items-center gap-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/#dualtracks'}
              className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black text-yellow-500 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 self-start"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full animate-pulse"></div>
              <Flame className="w-16 h-16 text-yellow-500 relative z-10 animate-bounce" style={{animationDuration: '3s'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Firefighter's Falcon Fly
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
              An advanced unmanned aerial vehicle (UAV) built for modern
              firefighting — engineered for precision water delivery, intelligent
              thermal imaging, and efficient fire suppression in high-rise and
              inaccessible environments.
            </p>
            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={newpage}
                alt="Firefighter's Falcon Fly Drone"
                className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Overview</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              The <span className="font-bold text-yellow-500">Firefighter's Falcon Fly</span> is a next-generation
              unmanned aerial firefighting system developed by Future Falcon Sky
              Technology Pvt. Ltd. It's specifically designed to help firefighters
              combat fires in hard-to-reach high-rise buildings and confined
              structures.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Equipped with high-pressure water cannons, thermal imaging cameras,
              and real-time video transmission, the Falcon Fly connects directly
              to a fire truck's water supply through a hose system. This allows
              the drone to deliver a sustained water stream to upper floors,
              effectively targeting flames without risking firefighter safety.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              This innovation represents a major leap in emergency response,
              enhancing operational speed, safety, and precision while minimizing
              property damage and saving lives.
            </p>
          </div>
        </Card>

        {/* ================= ADVANTAGES ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '300ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Flame className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Advantages</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, text: "Ensures firefighter safety and operational efficiency." },
              { icon: Flame, text: "Enables firefighting in high-rise or hard-to-access zones." },
              { icon: Eye, text: "Provides aerial perspective for real-time situational awareness." },
              { icon: Droplets, text: "Precisely sprays extinguishing water directly on fire hotspots." },
              { icon: Gauge, text: "Minimizes water wastage through targeted delivery." },
              { icon: Radio, text: "Reduces manual intervention in dangerous fire zones." }
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-lg">{advantage.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ================= KEY FEATURES ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Droplets className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Key Features</h2>
          </div>
          <div className="space-y-5">
            {[
              { title: "High-Pressure Water Cannon", desc: "Capable of 20 liters/min spray rate", icon: Droplets },
              { title: "Extended Operational Range", desc: "2 km range with stable command and control link", icon: Radio },
              { title: "Real-Time Thermal Imaging", desc: "Advanced video transmission for hotspot identification", icon: Eye },
              { title: "Direct Fire Truck Connection", desc: "Uninterrupted water supply via hose system", icon: Gauge },
              { title: "Intelligent Flight Control", desc: "Autonomous and manual operation modes", icon: Radio },
              { title: "Enhanced Safety", desc: "Reduces exposure to hazardous flames and toxic smoke", icon: Shield }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:translate-x-2 group">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-lg">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '500ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Gauge className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Technical Specifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Spray Capacity", value: "20 liters per minute, 2 km spray range", icon: Droplets },
              { title: "Imaging System", value: "Real-time thermal imaging with live video feed", icon: Eye },
              { title: "Flight Control", value: "Autonomous + manual navigation with precision stability", icon: Radio },
              { title: "Connectivity", value: "Direct link to water source (truck/hydrant) via hose system", icon: Gauge },
              { title: "Safety", value: "Reduced human exposure, real-time situational feedback", icon: Shield },
              { title: "Range", value: "Up to 2 kilometers operational radius", icon: MapPin }
            ].map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="p-6 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-white text-lg">{spec.title}</h3>
                  </div>
                  <p className="text-gray-300">{spec.value}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ================= IMPACT STATS ================= */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '600ms'}}>
          {[
            { number: "20L", label: "Water Per Minute", subtitle: "High-pressure delivery" },
            { number: "2KM", label: "Operational Range", subtitle: "Extended reach" },
            { number: "24/7", label: "Ready Response", subtitle: "Always mission-ready" }
          ].map((stat, i) => (
            <Card key={i} className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] hover:scale-105">
              <div className="text-5xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-gray-300">{stat.subtitle}</div>
            </Card>
          ))}
        </div>

       {/* ================= CONTACT SECTION ================= */}
               <Card className={`p-6 md:p-12 hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#0a0a0a] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '700ms'}}>
                 <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center">Get In Touch</h2>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                   {/* Contact Info */}
                   <div className="space-y-4 md:space-y-6">
                     <p className="text-base md:text-xl font-bold text-white">
                       Future Falcon Sky Technology Pvt. Ltd.
                     </p>
                     <div className="flex items-center gap-2 text-gray-400 text-sm md:text-lg group hover:text-white transition-colors">
                       <MapPin className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                       <p>Bangalore, Karnataka</p>
                     </div>
                     <div className="space-y-3">
                       <div className="flex items-center gap-2 group hover:text-white transition-colors text-gray-400 text-sm md:text-lg">
                         <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                         <p>+91 7829029214 / 8618418636</p>
                       </div>
                       <div className="flex items-center gap-2 group hover:text-white transition-colors text-gray-400 text-sm md:text-lg">
                         <Mail className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                         <p>contact@futurefalconskytechnology.com</p>
                       </div>
                     </div>
                   </div>
       
                   {/* Contact Form */}
                   <div className="space-y-4">
                     <div>
                       <input
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                         placeholder="Your Name"
                         className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
                       />
                     </div>
                     
                     <div>
                       <input
                         type="tel"
                         name="mobile"
                         value={formData.mobile}
                         onChange={handleInputChange}
                         placeholder="Mobile Number (10 digits)"
                         className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
                       />
                     </div>
                     
                     <div>
                       <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="Email Address"
                         className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
                       />
                     </div>
                     
                     <div>
                       <select
                         name="enquiry_type"
                         value={formData.enquiry_type}
                         onChange={handleInputChange}
                         className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white focus:border-yellow-500 focus:outline-none transition-all"
                       >
                         <option value="">Select Enquiry Type</option>
                         <option value="product">Product</option>
                         <option value="service">Service</option>
                       </select>
                     </div>
                     
                     <div>
                       <select
                         name="product_service"
                         value={formData.product_service}
                         onChange={handleInputChange}
                         className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white focus:border-yellow-500 focus:outline-none transition-all"
                         disabled={!formData.enquiry_type}
                       >
                         <option value="">Select {formData.enquiry_type === 'product' ? 'Product' : formData.enquiry_type === 'service' ? 'Service' : 'Product/Service'}</option>
                         {formData.enquiry_type === 'product' && productOptions.map(product => (
                           <option key={product} value={product}>{product}</option>
                         ))}
                         {formData.enquiry_type === 'service' && serviceOptions.map(service => (
                           <option key={service} value={service}>{service}</option>
                         ))}
                       </select>
                     </div>
                     
                     <Button
                       onClick={handleSubmit}
                       className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                     >
                       Submit Enquiry
                     </Button>
                   </div>
                 </div>
               </Card>
             </div>
           </div>
         );
       };

export default FirefightersFalconFly;

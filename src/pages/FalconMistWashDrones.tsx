import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Wrench, ArrowLeft, Droplets, Wind, Sun, Building2, Shield, Clock, DollarSign, Users, Eye, TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";

import falconMistMain from "@/assets/falcon-mist.jpg";
import falconMistIndustrial from "@/assets/cl.png";
import falconMistWindmill from "@/assets/c2.png";
import falconMistSolar from "@/assets/c3.png";
import windclean from "@/assets/windclean.png";
import solarc from "@/assets/solarc.png";
import indus from "@/assets/indus.png";

const FalconMistWashDrones = () => {
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
    'Surveillance & Security Drones',
    'Firefighter\'s Falcon Fly',
    'Falcon Mist Wash Drones',
    'Custom Drone Services'
  ];

  const serviceOptions = ['Educational Institutions Service', 'Seed Ball Dispersal Drone Service', 'Surveillance & Security Drone Service', 'Firefighter\'s Falcon Fly Service', 'Falcon Mist Wash Drone Service', 'Custom Drone Service'];

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
      const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxDzA1Sa0_9gWfGBJbAZbYb902pzJshJ3VK5JD66HVI9SBxoJwmhSp0Fr1tbOt40YgKfQ/exec';
      
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
              <Wrench className="w-16 h-16 text-yellow-500 relative z-10 animate-bounce" style={{animationDuration: '3s'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Falcon Mist Wash Drones
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
              Revolutionizing high-rise and industrial cleaning with advanced aerial drone technology. Designed and built by Future Falcon Sky Technology Pvt. Ltd., Falcon Mist offers safe, fast, and efficient cleaning solutions for every surface.
            </p>
            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={falconMistMain}
                alt="Falcon Mist Wash Drone"
                className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= APPLICATIONS SECTION ================= */}
        <section className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '200ms'}}>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
            <p className="text-gray-300 text-lg">Versatile cleaning solutions for diverse industries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: windclean,
                title: "Windmill Cleaning",
                desc: "Cleaning of windmills in remote or high-altitude areas.",
                icon: Wind
              },
              {
                image: solarc,
                title: "Solar Panel Cleaning",
                desc: "Quick and precise cleaning for solar panels, increasing efficiency.",
                icon: Sun
              },
              {
                image: indus,
                title: "Industrial Cleaning",
                desc: "Industrial and high-rise cleaning — silos, chimneys, domes, and fragile facades.",
                icon: Building2
              }
            ].map((app, i) => {
              const Icon = app.icon;
              return (
                <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] group">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-t-2xl blur opacity-0 group-hover:opacity-25 transition duration-1000"></div>
                    <img
                      src={app.image}
                      alt={app.title}
                      className="relative w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-yellow-500" />
                      <h3 className="font-bold text-white text-xl">{app.title}</h3>
                    </div>
                    <p className="text-gray-300">{app.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ================= PROBLEMS SOLVED ================= */}
        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '300ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Problems Solved</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "High-risk manual cleaning at elevated heights",
              "Time-consuming and labor-intensive maintenance",
              "Inconsistent results with traditional cleaning tools",
              "Expensive scaffolding and safety equipment requirements"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                <p className="text-gray-300 text-base md:text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ================= FEATURES & SPECIFICATIONS ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Droplets className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Drone Features & Specifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/5 to-yellow-500/10 border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300">
              <h3 className="font-bold text-white text-2xl mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-yellow-500" />
                General Specs
              </h3>
              <div className="space-y-3 text-gray-300 text-lg">
                <p><span className="font-semibold">Endurance:</span> 20 mins</p>
                <p><span className="font-semibold">Battery:</span> 25,000 mAh</p>
                <p><span className="font-semibold">Max Takeoff:</span> 36 kg</p>
                <p><span className="font-semibold">Vertical Speed:</span> 1 m/s</p>
                <p><span className="font-semibold">Transmission Range:</span> 1 km</p>
                <p><span className="font-semibold">Hover Accuracy:</span> ±1.5m (H), ±0.5m (V)</p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/5 to-yellow-500/10 border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300">
              <h3 className="font-bold text-white text-2xl mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-yellow-500" />
                Windmill & Solar Panel System
              </h3>
              <div className="space-y-3 text-gray-300 text-lg">
                <p><span className="font-semibold">Cleaning Type:</span> Dual-mode mist & jet spray system</p>
                <p><span className="font-semibold">Spray Range:</span> 3 ft precision nozzle control</p>
                <p><span className="font-semibold">Water Pressure:</span> 1.5–3.5 bar equivalent mist wash</p>
                <p><span className="font-semibold">Cleaning Span:</span> Up to 1m effective coverage</p>
                <p><span className="font-semibold">Operation Radius</span> 100m flight-supported zone</p>
                <p><span className="font-semibold">Efficiency Rate::</span> 1 sqft/min cleaning capability</p>
              </div>
            </div>
          </div>
        </Card>

        {/* ================= COMPARISON METRICS ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '500ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Comparison Metrics</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-yellow-500/30">
                  <th className="p-4 font-bold text-lg text-white">Metric</th>
                  <th className="p-4 font-bold text-lg text-white">Manual Cleaning</th>
                  <th className="p-4 font-bold text-lg text-yellow-500">Falcon Mist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Safety", icon: Shield, manual: "High Risk", falcon: "Zero Personnel Risk" },
                  { metric: "Time", icon: Clock, manual: "2–6 weeks/building", falcon: "3–5 days/building" },
                  { metric: "Cost", icon: DollarSign, manual: "Expensive", falcon: "Comparatively Cheaper" },
                  { metric: "Labour", icon: Users, manual: "6–8 Workers", falcon: "1–2 Operators" },
                  { metric: "Inspection", icon: Eye, manual: "Separate Workflow", falcon: "Built-in 4K / LiDAR" }
                ].map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <tr key={i} className="border-b border-yellow-500/10 hover:bg-[#2a2a2a] transition-colors">
                      <td className="p-4 font-semibold flex items-center gap-2 text-white">
                        <Icon className="w-5 h-5 text-yellow-500" />
                        {row.metric}
                      </td>
                      <td className="p-4 text-gray-300">{row.manual}</td>
                      <td className="p-4 font-semibold text-yellow-500">{row.falcon}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* ================= ADVANTAGES ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '600ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Advantages of Falcon Mist</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, text: "Safer cleaning without scaffolding or risky heights" },
              { icon: Clock, text: "Fast operations with minimal downtime" },
              { icon: Droplets, text: "Environmentally friendly and water-efficient cleaning" },
              { icon: DollarSign, text: "Cost-effective and low manpower requirement" },
              { icon: Eye, text: "Smart inspection with 4K and Thermal LiDAR" },
              { icon: Building2, text: "Improves property longevity and public image" }
            ].map((advantage, i) => {
              const Icon = advantage.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-300 text-lg">{advantage.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        
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

export default FalconMistWashDrones;

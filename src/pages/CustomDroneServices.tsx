import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, ArrowLeft, Leaf, Shield, Flame, Building2, BarChart3, Wrench, TrendingUp, CheckCircle, Zap, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import droneHero from "@/assets/drone-hero.jpg";

const CustomDroneServices = () => {
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
              <Users className="w-16 h-16 text-yellow-500 relative z-10 animate-bounce" style={{animationDuration: '3s'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Custom Drone Services
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
              Drone engineering and deployment services for agriculture, surveillance, firefighting, and infrastructure — tailored solutions designed to meet your unique operational needs.
            </p>
            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={droneHero}
                alt="Custom Drone Services"
                className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Our Approach</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              At Future Falcon Sky Technology, we don't believe in one-size-fits-all solutions. Every industry has unique challenges, and every mission demands specialized capabilities. Our custom drone services are built from the ground up to match your specific operational requirements.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              From initial consultation and design to deployment and ongoing support, we work closely with your team to deliver drone solutions that integrate seamlessly into your workflow, enhance efficiency, and provide measurable results.
            </p>
          </div>
        </Card>

        {/* ================= KEY FEATURES ================= */}
        <section className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '300ms'}}>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-gray-300 text-lg">Comprehensive drone solutions across multiple industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "Agriculture & Environment",
                desc: "Precision farming, crop monitoring, and afforestation projects with AI-powered analytics"
              },
              {
                icon: Shield,
                title: "Surveillance & Security",
                desc: "Tactical monitoring, border security, and real-time threat detection systems"
              },
              {
                icon: Flame,
                title: "Firefighting & Disaster Response",
                desc: "Emergency response drones with thermal imaging and water delivery capabilities"
              },
              {
                icon: Building2,
                title: "Infrastructure & Cleaning",
                desc: "High-rise maintenance, industrial cleaning, and structural inspection services"
              },
              {
                icon: BarChart3,
                title: "Data & Analytics Integration",
                desc: "Real-time data collection, processing, and actionable insights for informed decisions"
              },
              {
                icon: Zap,
                title: "Rapid Deployment Systems",
                desc: "Quick-response drone solutions for time-sensitive missions and operations"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="p-6 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] group hover:scale-105">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                      <Icon className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-xl text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Why Choose Custom Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: CheckCircle, text: "Tailored solutions designed for your specific operational needs" },
              { icon: Wrench, text: "Expert engineering team with proven deployment experience" },
              { icon: BarChart3, text: "Data-driven insights and advanced analytics integration" },
              { icon: Users, text: "Comprehensive training and ongoing technical support" },
              { icon: Zap, text: "Rapid prototyping and deployment timelines" },
              { icon: Shield, text: "End-to-end service coverage across multiple industries" }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-lg">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ================= SERVICE AREAS DETAILED ================= */}
        <section className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '500ms'}}>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-gray-300 text-lg">Specialized drone services for every sector</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Agriculture",
                subtitle: "Precision Farming & Environmental Monitoring",
                features: ["Crop health analysis", "Precision spraying", "Soil mapping", "Yield prediction"]
              },
              {
                icon: Shield,
                title: "Security",
                subtitle: "Surveillance & Threat Detection",
                features: ["Perimeter monitoring", "Real-time alerts", "Night vision", "Crowd management"]
              },
              {
                icon: Building2,
                title: "Infrastructure",
                subtitle: "Inspection & Maintenance Services",
                features: ["Structure inspection", "Power line monitoring", "Cleaning services", "Damage assessment"]
              }
            ].map((area, i) => {
              const Icon = area.icon;
              return (
                <Card key={i} className="p-8 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-yellow-500/20 transition-colors">
                      <Icon className="w-10 h-10 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white mb-1">{area.title}</h3>
                      <p className="text-gray-300 text-sm">{area.subtitle}</p>
                    </div>
                    <div className="w-full space-y-3 mt-4">
                      {area.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-left">
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ================= PROCESS TIMELINE ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '600ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Consultation", desc: "Understand your needs and challenges" },
              { number: "02", title: "Design", desc: "Custom solution architecture" },
              { number: "03", title: "Development", desc: "Engineering and testing" },
              { number: "04", title: "Deployment", desc: "Training and ongoing support" }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-6 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl font-bold text-yellow-500/20 mb-3">{step.number}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-500/30"></div>
                )}
              </div>
            ))}
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

export default CustomDroneServices;
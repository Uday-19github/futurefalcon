import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Building2, ArrowLeft, Shield, Eye, Radio, Zap, Award, MapPin, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// 🖼️ Replace with your own images/video
import falconXImageOne from "@/assets/x1.JPG";
import falconXImageTwo from "@/assets/x2.JPG";
import missionImage from "@/assets/v2.png";
import inspectionImage from "@/assets/v3.png";

const SurveillanceSecurityDrones = () => {
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
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
              <Building2 className="w-16 h-16 text-primary relative z-10" style={{animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Falcon <span className="text-red-500 bg-none bg-clip-border">X</span> security and surveillance drone
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
              Reliable eyes and voice for tactical, industrial, and defense
              missions — proudly engineered in India to support surveillance,
              inspection, and emergency response needs anytime, anywhere.
            </p>
            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <iframe
                src="https://www.youtube.com/embed/DVVGfyv8XEU"
                title="Falcon X security and surveillance drone video"
                className="relative aspect-video rounded-2xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ================= INTRODUCTION ================= */}
        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Introduction</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Our compact and mission-ready UAVs are designed to meet India's
              growing need for lightweight, high-performance surveillance systems.
              Equipped with advanced sensors, thermal and EO/IR gimbal cameras,
              these drones deliver reliable day/night visibility for long-range
              detection, recognition, and identification (DRI) tasks.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Built rugged and field-tough, they perform seamlessly across border
              zones, urban landscapes, and industrial sites. <span className="font-bold text-yellow-500">Proudly Made in India</span>,
              these systems empower defense and civil forces with tactical
              flexibility, field-readiness, and complete system integration.
            </p>
          </div>
        </Card>

        {/* ================= FALCON X SHOWCASE ================= */}
        <section className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '250ms'}}>
          {[
            { image: falconXImageOne, alt: "Falcon X security drone front view" },
            { image: falconXImageTwo, alt: "Falcon X security drone field operation" }
          ].map((item, i) => (
            <div key={item.alt} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="relative h-full min-h-[280px] w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </section>

        {/* ================= KEY FEATURES ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '300ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Radio, text: "Quick Integration for instant mission deployment." },
              { icon: Eye, text: "Multi-Sensor Suite — EO (day camera), IR (thermal), and optional laser pointers." },
              { icon: Radio, text: "Loudspeakers with powerful long-range audio for tactical communication." },
              { icon: Zap, text: "10,000 lumens floodlight for full-scene illumination." },
              { icon: Shield, text: "Autonomous route planning and AI-assisted threat detection for intelligent monitoring." },
              { icon: Eye, text: "Built for 24/7 visibility, even under fog, low light, or high-risk conditions." }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-lg">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* ================= USE CASES ================= */}
        <section className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '400ms'}}>
          <div className="order-2 md:order-1">
            <Card className="p-10 h-full hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a]">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-white">
                  Defense & Security Use Cases
                </h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Our drones are built for rapid deployment across tactical and
                civil environments — providing vital data and operational support
                during surveillance, reconnaissance, and public safety missions.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Border Surveillance & Reconnaissance", desc: "EO-IR gimbals enable day/night observation, reducing human patrol fatigue and providing real-time feeds to command centers." },
                  { title: "Crowd Management & Riot Monitoring", desc: "Equipped with floodlights, loudspeakers, and cameras for real-time crowd analysis and on-site communication." },
                  { title: "Disaster Response", desc: "Thermal imaging to detect survivors and assess damage; long-range speakers guide rescue teams remotely." }
                ].map((useCase, i) => (
                  <div key={i} className="group hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-150 transition-transform"></span>
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 ml-4">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={missionImage}
                alt="Security drone operation"
                className="relative w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIAL USE CASES ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '500ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">
              Industrial & Infrastructure Applications
            </h2>
          </div>
          <div className="space-y-6 mb-8">
            {[
              { title: "Pipeline & Corridor Inspection (Oil & Gas)", desc: "Detects leaks, corrosion, and heat anomalies; reduces manual inspection risk and costs." },
              { title: "Power Line & Substation Monitoring", desc: "EO/thermal gimbals identify insulation faults, hotspots, and potential hazards; ensures minimal downtime and targeted repairs." },
              { title: "Urban Infrastructure Surveillance", desc: "Monitors high-rise construction zones and transport corridors to ensure operational safety." }
            ].map((app, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 group">
                <h3 className="font-bold text-white text-xl mb-2 group-hover:text-yellow-500 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-400 text-lg">{app.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src={inspectionImage}
              alt="Drone inspecting power lines"
              className="relative w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </Card>

        {/* ================= WHY CHOOSE US ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '600ms'}}>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Why Choose Future Falcon</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "100% Indian R&D, design, and field-tested technology.",
              "Custom configurations for tactical and industrial missions.",
              "Local support, training, and rapid turnaround for service.",
              "Proven mission readiness and rugged reliability."
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-gray-300 text-lg">{reason}</p>
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

export default SurveillanceSecurityDrones;
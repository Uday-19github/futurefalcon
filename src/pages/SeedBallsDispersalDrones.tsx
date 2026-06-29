import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, ArrowLeft, Leaf, Zap, Target, TrendingUp, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// 🖼️ Replace these imports with your actual 3 images:
import image1 from "@/assets/sd.png";
import image2 from "@/assets/sdd.png";
import image3 from "@/assets/sg.png";

const SeedBallsDispersalDrones = () => {
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
    'Drone Survey and Mapping',
    'Firefighter\'s Falcon Fly',
    'Falcon Mist Wash Drones',
    'Custom Drone Services'
  ];

  const serviceOptions = ['Educational Institutions Service', 'Seed Ball Dispersal Drone Service', 'Surveillance & Security Drone Service', 'Drone Survey and Mapping Service', 'Firefighter\'s Falcon Fly Service', 'Falcon Mist Wash Drone Service', 'Custom Drone Service'];

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
              <GraduationCap className="w-16 h-16 text-yellow-500 relative z-10 animate-bounce" style={{animationDuration: '3s'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Seed Balls Dispersal Drones
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
              A cutting-edge, drone-based afforestation initiative designed to
              restore degraded ecosystems, enhance biodiversity, and combat
              climate change through precision aerial seed dispersal.
            </p>
            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={image1}
                alt="Drone seeding landscape"
                className="relative w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= INTRODUCTION & OVERVIEW ================= */}
        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#1a1a1a] border-gray-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{transitionDelay: '200ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Introduction</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Degraded ecosystems along riverbanks and forest margins often lack
              biodiversity. Traditional planting methods are slow, labor-intensive,
              and costly, particularly in remote or steep terrains. Drone-based
              seed balls dispersal presents a revolutionary approach to address these
              challenges.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Our system utilizes high-capacity drones equipped with AI and LiDAR
              mapping technology to optimize planting sites. Each drone can
              restore up to <span className="font-bold text-yellow-500">0.8 hectares in 15 minutes</span>,
              accelerating reforestation and soil regeneration on a massive scale.
            </p>
          </div>
        </Card>

        {/* ================= TECHNOLOGY & PODS ================= */}
        <section className={`grid grid-cols-1 sm:grid-cols-2 gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '300ms'}}>
          <div className="order-2 md:order-1">
            <Card className="p-10 h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#1a1a1a] border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h2 className="text-4xl font-bold text-white">Technology & Seed Pods</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "AI and LiDAR mapping ensures precision in seeding patterns.",
                  "Biodegradable pods made from clay and manure hold native seeds, nutrients, and moisture for optimal germination.",
                  "Natural binders maintain pod integrity across diverse terrain.",
                  "Each pod acts as a micro-ecosystem supporting up to 150 native species."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-lg group">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={image2}
                alt="Seed pod technology"
                className="relative w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ================= IMPACT & ROADMAP ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#1a1a1a] border-gray-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-white">Impact & Project Roadmap</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            The drone-based afforestation process is designed for speed,
            precision, and sustainability. It reduces manual labor needs by up to
            85% and decreases planting time by 65%.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              "Site Mapping and Analysis",
              "Seed Selection and Pod Preparation",
              "Aerial Seeding by Drone",
              "Monitoring and Follow-Up"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <span className="text-gray-400 font-medium">{step}</span>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-2 border-yellow-500/20 text-center">
            <h3 className="font-semibold text-white text-xl mb-2 flex items-center justify-center gap-2">
              🌱 Goal:
            </h3>
            <p className="text-gray-300 text-lg">
              To plant more than <span className="text-yellow-500 text-2xl font-bold">10 lakh saplings</span> by the end of this year.
            </p>
          </div>
        </Card>

        {/* ================= CASE STUDIES ================= */}
        <section className={`grid grid-cols-1 sm:grid-cols-2 gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '500ms'}}>
          <div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={image3}
                alt="Drone afforestation impact"
                className="relative w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div>
            <Card className="p-10 h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#1a1a1a] border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
                <h2 className="text-4xl font-bold text-white">Case Studies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 text-lg leading-relaxed">
                  In Andhra Pradesh, the Department of Environment, Forests &
                  Climate Change used drones to spray <span className="font-bold text-yellow-500">2,00,000 seed balls</span> over <span className="font-bold text-yellow-500">200 hectares</span> of forest area in just 15 days —
                  achieving rapid and cost-effective reforestation.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Globally, Canada's <span className="font-bold text-yellow-500">Flash Forest</span> aims to plant 1
                  billion trees by 2028 using drone technology — a model that
                  demonstrates the scalability and global relevance of aerial
                  afforestation.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* ================= DATA ANALYSIS ================= */}
        <Card className={`p-10 hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{transitionDelay: '600ms'}}>
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Performance Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { text: "Drone-based seeding takes only", highlight: "~15% of the time", suffix: "of manual methods." },
              { text: "Drones can cover", highlight: "8× more land per day", suffix: "than human labor." },
              { text: "Germination success rates are", highlight: "higher", suffix: "due to AI-assisted placement and nutrient-rich pods." },
              { text: "Overall manpower savings:", highlight: "85%", suffix: "| Time reduction: 65%" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#1a1a1a]/80 backdrop-blur border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                <p className="text-gray-400 text-lg">
                  {item.text} <span className="font-bold text-yellow-500 text-xl">{item.highlight}</span> {item.suffix}
                </p>
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
                  aria-label="Select Enquiry Type"
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
                  aria-label="Select Product or Service"
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

export default SeedBallsDispersalDrones;

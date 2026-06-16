import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Plane, Wrench, Gamepad2, Wind, Shield, Network, Users, Heart, Globe, Mail, Phone, MapPin, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import partner1 from "@/assets/1.png";
import partner2 from "@/assets/2.png";
import partner3 from "@/assets/3.png";
import partner4 from "@/assets/4.png";

const HeroPartnersWorkshops = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiry_type: "",
    product_service: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      image: partner1,
      title: "ST.FRANCIS SCHOOL ICSE",
      description: "Nurturing innovation, integrity, and excellence in every student.",
    },
    {
      image: partner2,
      title: "TAPOVAN",
      description: "Fostering creativity and experiential learning for young innovators.",
    },
    {
      image: partner3,
      title: "DAYA NANDA SAGAR INSTITUTIONS",
      description: "Collaborating to bridge the gap between academia and emerging tech industries.",
    },
    {
      image: partner4,
      title: "KARNATAK LINGAYAT EDUCATION SOCIETY",
      description: "Advancing technological education through collaboration and innovation.",
    },
  ];

  const workshops = [
    {
      icon: Plane,
      title: "Industry Applications",
      description: "Discover drone uses in agriculture, defense, logistics, and more",
    },
    {
      icon: Wrench,
      title: "Drone Assembly",
      description: "Build your own drone with hands-on DIY kits",
    },
    {
      icon: Gamepad2,
      title: "Flight Simulator",
      description: "Master controls in our advanced virtual environment",
    },
    {
      icon: Wind,
      title: "Real Flying",
      description: "Take to the skies with expert instructors",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Learn regulations and ethical usage",
    },
    {
      icon: Network,
      title: "Advanced UAV",
      description: "Multi-UAV systems and connectivity",
    },
  ];

  const productOptions = [
    "Seed Ball Dispersal Drones",
    "Surveillance & Security Drones",
    "Firefighter's Falcon Fly",
    "Falcon Mist Wash Drones",
    "Custom Drone Services",
  ];

  const serviceOptions = ['Educational Institutions Service', 'Seed Ball Dispersal Drone Service', 'Surveillance & Security Drone Service', 'Firefighter\'s Falcon Fly Service', 'Falcon Mist Wash Drone Service', 'Custom Drone Service'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "enquiry_type" && { product_service: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.email || !formData.enquiry_type || !formData.product_service) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbxDzA1Sa0_9gWfGBJbAZbYb902pzJshJ3VK5JD66HVI9SBxoJwmhSp0Fr1tbOt40YgKfQ/exec";

      const formDataToSend = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSend,
      });

      alert("Thank you! Your enquiry has been submitted successfully.");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        enquiry_type: "",
        product_service: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Sorry, there was an error submitting your enquiry. Please try again.");
    }
  };

  return (
    <main className="bg-black">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Drone workshop learning environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60" />
        </div>

        <div className="container relative z-10 px-4 py-32 mx-auto">
          <div className="absolute top-8 left-8 z-20">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/#dualtracks'}
              className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black text-yellow-500 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-sm font-semibold text-yellow-500 tracking-wide">
                Educational Excellence
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8">
              <span className="block text-white mb-3">
                Innovate With Drones
              </span>
              <span className="block text-yellow-500">
                Learn. Build. Fly.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
              Hands-on drone workshops designed to spark creativity, teach advanced UAV technology, and provide real-world flight experience for students and enthusiasts alike.
            </p>

            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 group"
              onClick={() => {
                document.getElementById("workshops")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Workshops
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* WORKSHOPS SECTION */}
      <section id="workshops" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Workshop Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive hands-on training combining theory and practice
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card
                key={index}
                className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-500">
                    <workshop.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {workshop.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                Our Network
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to advance drone technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 overflow-hidden group-hover:border-yellow-500/50 transition-all duration-500">
                    <img
                      src={partner.image}
                      alt={partner.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-yellow-500 mb-3 tracking-wider">
                    {partner.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {partner.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      </section>

      {/* DIY KITS SECTION */}
      <section className="relative py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                Learning Kits
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              DIY Kits by Age Group
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Age-appropriate learning kits designed for every skill level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { grade: "3-8 Std", kit: "DIY Kits", desc: "Basic assembly and flight concepts" },
              { grade: "8-12 Std", kit: "3D Printed DIY Kits", desc: "Advanced assembly with custom parts" },
              { grade: "Engineering", kit: "Drones with GPS ", desc: "Code-based flight control" },
              { grade: "Industrial Training Institute", kit: "Drone building and pilot training", desc: "Master different UAV types and connectivity" }
            ].map((kit, i) => (
              <Card key={i} className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-500">
                    <BookOpen className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="font-bold text-2xl text-yellow-500 mb-3">{kit.grade}</h3>
                  <h4 className="font-semibold text-lg text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">{kit.kit}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{kit.desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      </section>

      {/* GOVERNMENT SCHEMES SECTION */}
      <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
                National Initiatives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Government Schemes for Drones
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Supporting drone education through national initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Drone Shakti Initiative", desc: "Promotes drone use and supports drone technology centers in schools" },
              { title: "PLI Scheme for Drones", desc: "Encourages manufacturing, creating opportunities in engineering and operations" },
              { title: "YUVIKA Program", desc: "ISRO program providing STEM training, including drones, to school students" },
              { title: "Skill India & PMKVY 4.0", desc: "Specialized drone training modules prepare students for drone technology careers" },
              { title: "Digital India Initiative", desc: "Promotes drones in public services and infrastructure development" },
              { title: "NAMO Drone Didi Scheme", desc: "Empowers Women Self Help Groups (SHGs) with drones and training for agricultural services, fostering women-led rural entrepreneurship" }

            ].map((scheme, i) => (
              <Card key={i} className="group relative p-6 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-500">
                      <Award className="w-5 h-5 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-yellow-500 transition-colors duration-300">{scheme.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{scheme.desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
        <div
          className={`container mx-auto px-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="p-6 md:p-12 border-2 hover:border-yellow-500/50 bg-[#0a0a0a] hover:shadow-2xl transition-all duration-500">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white text-center">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-bold text-white">
                  Future Falcon Sky Technology Pvt. Ltd.
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-base md:text-lg">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <p>Bangalore, Karnataka</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400 text-base md:text-lg">
                    <Phone className="w-5 h-5 text-yellow-500" />
                    <p>+91 7829029214 / 8618418636</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-base md:text-lg">
                    <Mail className="w-5 h-5 text-yellow-500" />
                    <p>contact@futurefalconskytechnology.com</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Mobile Number (10 digits)"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none"
                />
                <select
                  name="enquiry_type"
                  value={formData.enquiry_type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white focus:border-yellow-500 focus:outline-none"
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="product">Product</option>
                  <option value="service">Service</option>
                </select>
                <select
                  name="product_service"
                  value={formData.product_service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white focus:border-yellow-500 focus:outline-none"
                  disabled={!formData.enquiry_type}
                >
                  <option value="">
                    Select{" "}
                    {formData.enquiry_type === "product"
                      ? "Product"
                      : formData.enquiry_type === "service"
                      ? "Service"
                      : "Product/Service"}
                  </option>
                  {formData.enquiry_type === "product" &&
                    productOptions.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  {formData.enquiry_type === "service" &&
                    serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                </select>
                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HeroPartnersWorkshops;

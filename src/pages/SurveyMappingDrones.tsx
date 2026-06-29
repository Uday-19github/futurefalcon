import React, { useEffect, useState } from "react";
import { ArrowLeft, Award, Building2, Database, FileText, Layers, Mail, Map, MapPin, Mountain, Phone, Radar, Route, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import surveyHero from "@/assets/su1.jpeg";
import miningImage from "@/assets/su1.jpeg";
import urbanImage from "@/assets/ub1.jpg";
import lidarImage from "@/assets/ub2.jpg";

const productOptions = [
  "Seed Ball Dispersal Drones",
  "Falcon X security and surveillance drone",
  "Drone Survey and Mapping",
  "Firefighter's Falcon Fly",
  "Falcon Mist Wash Drones",
  "Custom Drone Services",
];

const serviceOptions = [
  "Educational Institutions Service",
  "Seed Ball Dispersal Drone Service",
  "Surveillance & Security Drone Service",
  "Drone Survey and Mapping Service",
  "Firefighter's Falcon Fly Service",
  "Falcon Mist Wash Drone Service",
  "Custom Drone Service",
];

const keyFeatures = [
  { icon: Radar, text: "High-Accuracy RTK/PPK Surveying" },
  { icon: Layers, text: "LiDAR, RGB, Thermal & Multispectral Payloads" },
  { icon: Mountain, text: "Photogrammetry & 3D Mapping" },
  { icon: Route, text: "Automated Flight Planning & Data Collection" },
  { icon: FileText, text: "GIS & CAD Compatible Deliverables" },
  { icon: Map, text: "Digital Elevation & Surface Models" },
  { icon: Database, text: "Orthomosaic & Contour Generation" },
  { icon: Zap, text: "Fast Deployment with Reduced Survey Costs" },
];

const solutionSections = [
  {
    eyebrow: "Drone Surveillance for Mining",
    title: "Mining Survey & Monitoring",
    image: miningImage,
    imageAlt: "Drone survey for mining operations",
    description: [
      "Mining operations require continuous monitoring to maximize productivity while ensuring worker safety and environmental compliance. Drone-based surveys provide rapid and accurate aerial insights that eliminate the need for hazardous manual inspections.",
      "Our mining solutions help organizations monitor excavation progress, calculate stockpile volumes, inspect equipment, assess geological conditions, and generate precise terrain models for planning and operational efficiency.",
    ],
    applications: [
      "Mine Site Mapping",
      "Pre & Post Blast Analysis",
      "Stockpile Volume Measurement",
      "Rock Fragmentation Analysis",
      "Equipment Inspection",
      "Geotechnical Monitoring",
      "Environmental Monitoring",
      "Failure & Risk Assessment",
      "Open Pit Mine Surveying",
      "Progress Monitoring & Compliance",
    ],
    benefits: [
      "Faster site surveys",
      "Improved operational safety",
      "Accurate volumetric calculations",
      "Reduced downtime",
      "Better production planning",
      "GIS-ready mining datasets",
    ],
  },
  {
    eyebrow: "Drone Solutions for Urban Planning",
    title: "Smart Urban Planning & Land Development",
    image: urbanImage,
    imageAlt: "Drone mapping for smart urban planning",
    description: [
      "Drone mapping enables planners, engineers, and government agencies to create accurate digital maps for urban expansion, smart city development, and infrastructure planning. High-resolution orthomosaics combined with GIS data simplify land administration and project execution.",
      "Using drone-generated datasets, planners can analyze land use, road networks, utilities, drainage systems, and property boundaries with unmatched precision.",
    ],
    applications: [
      "Land Parcel Mapping",
      "Smart City Planning",
      "Cadastral Survey",
      "Property Boundary Verification",
      "Road & Utility Mapping",
      "Infrastructure Development",
      "Land Record Digitization",
      "Building Footprint Extraction",
      "Urban Expansion Monitoring",
      "Greenfield Project Planning",
    ],
    benefits: [
      "Faster land surveys",
      "Accurate cadastral mapping",
      "Improved planning efficiency",
      "Reduced surveying costs",
      "Better GIS integration",
      "Digital records for future planning",
    ],
  },
  {
    eyebrow: "LiDAR Drone Topography Mapping",
    title: "High-Precision LiDAR Mapping",
    image: lidarImage,
    imageAlt: "LiDAR drone topography mapping",
    description: [
      "LiDAR-equipped drones capture millions of laser points to create highly detailed 3D models of the terrain. Unlike conventional photogrammetry, LiDAR penetrates vegetation, enabling accurate mapping even in densely forested or difficult-to-access environments.",
      "These datasets are ideal for engineering design, flood modeling, corridor mapping, and terrain analysis where extreme accuracy is essential.",
    ],
    applications: [
      "Topographic Survey",
      "Digital Terrain Model (DTM)",
      "Digital Surface Model (DSM)",
      "3D Point Cloud Generation",
      "Corridor Mapping",
      "Forest Canopy Analysis",
      "Utility Route Planning",
      "River & Floodplain Mapping",
      "Highway & Railway Survey",
      "Infrastructure Planning",
    ],
    benefits: [
      "Dense 3D point cloud generation",
      "High accuracy under vegetation",
      "Faster terrain analysis",
      "Improved engineering design",
      "Better elevation modeling",
      "Accurate contour generation",
    ],
  },
];

const workflow = [
  {
    title: "1. Data Acquisition",
    icon: Radar,
    description:
      "Using RTK/PPK drones, LiDAR systems, RGB cameras, Thermal sensors, Differential GPS (DGPS), and Multispectral payloads, we capture high-quality aerial data tailored to project requirements.",
    points: ["RTK/PPK Drones", "LiDAR Systems", "RGB Cameras", "Thermal Sensors", "DGPS", "Multispectral Payloads"],
  },
  {
    title: "2. Data Processing",
    icon: Database,
    description: "Captured data is processed using advanced photogrammetry and GIS software.",
    points: ["Orthomosaic Maps", "Digital Elevation Models (DEM)", "Digital Surface Models (DSM)", "Contour Maps", "LiDAR Point Clouds", "3D Mesh Models"],
  },
  {
    title: "3. GIS Analysis",
    icon: Map,
    description: "Our experts analyze collected datasets through advanced GIS tools.",
    points: ["Terrain Analysis", "Volume Calculations", "Change Detection", "Feature Extraction", "Spatial Analysis", "Asset Classification"],
  },
  {
    title: "4. Deliverables",
    icon: FileText,
    description: "Clients receive industry-standard deliverables ready for engineering and planning teams.",
    points: ["Orthophotos", "CAD Drawings", "GIS Layers", "3D Models", "Point Cloud Files", "Survey Reports", "Contour Maps", "Geo-referenced Data"],
  },
];

const whyChoose = [
  "RTK/PPK Enabled Survey Drones",
  "Advanced LiDAR & Multi-Sensor Payloads",
  "High-Accuracy Geospatial Deliverables",
  "Complete GIS & CAD Integration",
  "Faster Data Acquisition & Processing",
  "End-to-End Survey & Mapping Solutions",
  "Experienced Technical Team",
  "Made in India with Local Support",
];

const SurveyMappingDrones = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "enquiry_type" && { product_service: "" }),
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
      const googleScriptURL = "https://script.google.com/macros/s/AKfycbxDzA1Sa0_9gWfGBJbAZbYb902pzJshJ3VK5JD66HVI9SBxoJwmhSp0Fr1tbOt40YgKfQ/exec";
      const formDataToSend = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key as keyof typeof formData]);
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-16 space-y-20">
        <section className={`text-center transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col items-center gap-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = "/#dualtracks"}
              className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black text-yellow-500 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 self-start"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full animate-pulse" />
              <Map className="w-16 h-16 text-yellow-500 relative z-10" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Drone Survey and Mapping
            </h1>
            <p className="max-w-4xl text-lg md:text-xl text-gray-400 leading-relaxed">
              Fast, accurate, and cost-effective geospatial intelligence for government agencies, infrastructure developers, mining companies, utility providers, and urban planners.
            </p>

            <div className="relative w-full max-w-5xl group mt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-yellow-500/80 to-yellow-500/60 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img
                src={surveyHero}
                alt="Survey and mapping drone"
                className="relative rounded-2xl shadow-2xl w-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: "200ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Introduction</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Future Falcon&apos;s Drone Survey and Mapping solutions provide fast, accurate, and cost-effective geospatial intelligence for government agencies, infrastructure developers, mining companies, utility providers, and urban planners. Powered by RTK/PPK GNSS, LiDAR, RGB, Thermal, and Multispectral sensors, our UAV solutions capture high-resolution aerial data with centimeter-level accuracy.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              From topographic surveys and land mapping to volumetric analysis and 3D terrain modeling, our drones significantly reduce project timelines while delivering GIS-ready datasets for planning, monitoring, and informed decision-making.
            </p>
          </div>
        </Card>

        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "300ms" }}>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                  <Icon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-base md:text-lg">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {solutionSections.map((section, index) => (
          <section
            key={section.title}
            className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${400 + index * 100}ms` }}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative group`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img
                src={section.image}
                alt={section.imageAlt}
                loading={index === 0 ? "eager" : "lazy"}
                className="relative h-full min-h-[320px] w-full rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <Card className={`${index % 2 === 1 ? "md:order-1" : ""} p-6 md:p-10 h-full hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a]`}>
              <p className="text-yellow-500 text-sm font-bold tracking-wider uppercase mb-3">{section.eyebrow}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{section.title}</h2>
              <div className="space-y-4 mb-6">
                {section.description.map((paragraph) => (
                  <p key={paragraph} className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {section.applications.map((item) => (
                      <span key={item} className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {section.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </section>
        ))}

        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "500ms" }}>
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Survey Workflow</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflow.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="p-6 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-gray-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-yellow-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className={`p-6 md:p-10 hover:shadow-2xl transition-all duration-500 border-2 border-yellow-500/50 bg-[#1a1a1a] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "700ms" }}>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Future Falcon</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((reason) => (
              <div key={reason} className="flex items-start gap-4 p-5 rounded-xl bg-[#2a2a2a] border-2 border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 hover:scale-105 group">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-gray-300 text-base md:text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className={`p-6 md:p-12 hover:shadow-2xl transition-all duration-500 border-2 hover:border-yellow-500/50 bg-[#0a0a0a] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "800ms" }}>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl font-bold text-white">Future Falcon Sky Technology Pvt. Ltd.</p>
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

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile Number (10 digits)"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-all"
              />
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
              <select
                name="product_service"
                value={formData.product_service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border-2 border-gray-800 text-white focus:border-yellow-500 focus:outline-none transition-all"
                disabled={!formData.enquiry_type}
              >
                <option value="">Select {formData.enquiry_type === "product" ? "Product" : formData.enquiry_type === "service" ? "Service" : "Product/Service"}</option>
                {formData.enquiry_type === "product" && productOptions.map((product) => (
                  <option key={product} value={product}>{product}</option>
                ))}
                {formData.enquiry_type === "service" && serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
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

export default SurveyMappingDrones;

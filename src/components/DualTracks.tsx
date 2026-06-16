import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, Microscope, Wrench, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import studentsWorkshop from "@/assets/students-workshop.jpg";
import falconMist from "@/assets/falcon-mist.jpg";
import droneHero from "@/assets/drone-hero.jpg";
import sspdrone from "@/assets/sspdrone.jpg";
import ssvdrone from "@/assets/ssvdrone.jpg";
import ffdrone from "@/assets/ffdrone.jpg";
import don from "@/assets/don.jpg";
import seed from "@/assets/seed.jpg";
import newff from "@/assets/newff.jpeg";
import drop from "@/assets/drop.png";

const DualTracks = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: GraduationCap,
      title: "Seed Ball Dispersal Drones",
      image: seed,
      description:
        "Comprehensive drone-based afforestation system designed to restore degraded ecosystems and enhance biodiversity through aerial seed dispersal.",
      features: [
        "AI & LiDAR-based Terrain Mapping",
        "0.8 ha Coverage in 15 Minutes",
        "Optimized for Riverbanks & Forests",
        "Biodegradable Pods Enriched for Growth",
      ],
      variant: "default" as const,
      route: "/seed-balls-dispersal-drones",
    },
    {
      icon: Building2,
      title: "Surveillance & Security Drones",
      image: don,
      description:
        "Advanced UAVs designed for tactical, civil, and industrial missions, ensuring superior visibility, reliability, and rapid field deployment.",
      features: [
        "EO–IR Gimbals & Thermal Vision",
        "Floodlights & Loudspeakers Control",
        "Disaster Response & Urban Monitoring",
        "Pipeline & Power Line Inspection",
        "Autonomous Patrol & Route Planning",
        "AI-Assisted Threat Detection & Analysis",
      ],
      variant: "secondary" as const,
      route: "/surveillance-security-drones",
    },
    {
      icon: Microscope,
      title: "Firefighter's Falcon Fly",
      image: drop,
      description:
        "Advanced aerial firefighting drone system engineered for precision water delivery, real-time thermal imaging, and intelligent navigation.",
      features: [
        "Sprays 20 L/min up to 2 km range",
        "Targets high-rise fires safely",
        "Real-time thermal imaging",
        "Reduces firefighter risk & response time",
        "Integrated Communication & Command Link",
      ],
      variant: "default" as const,
      route: "/firefighters-falcon-fly",
    },
    {
      icon: Wrench,
      title: "Falcon Mist Wash Drones",
      image: falconMist,
      description:
        "Aerial cleaning drones for high-rise and industrial maintenance, delivering precision, safety, and efficiency.",
      features: [
        "Eco-friendly and water-efficient cleaning",
        "Reaches inaccessible areas safely",
        "Reduces manpower and equipment costs",
        "Automated inspection with 4K & LiDAR sensors",
      ],
      variant: "secondary" as const,
      route: "/falcon-mist-wash-drones",
    },
    {
      icon: Award,
      title: "Drone Workshop Offerings",
      image: studentsWorkshop,
      description:
        "Drone education programs combining theory and practice to make technology engaging and industry-relevant for students.",
      features: [
        "Industry Applications & Innovations",
        "DIY Drone Kits by Age Group",
        "Drone Components & Assembly",
        "Virtual Flying Practice",
        "Real Flying Lessons",
        "Safety & Compliance",
      ],
      variant: "default" as const,
      route: "/drone-workshop-offerings",
    },
    {
      icon: Users,
      title: "Custom Drone Services",
      image: droneHero,
      description:
        "Drone engineering and deployment services for agriculture, surveillance, firefighting, and infrastructure.",
      features: [
        "Agriculture & Environment",
        "Surveillance & Security",
        "Firefighting & Disaster Response",
        "Infrastructure & Cleaning",
        "Data & Analytics Integration",
      ],
      variant: "secondary" as const,
      route: "/custom-drone-services",
    },
  ];

  return (
    <section id="dualtracks" className="relative bg-[#0a0a0a] py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Our Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Products & Services
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge drone technology solutions across multiple sectors, engineered for precision, safety, and innovation.
          </p>
        </div>

        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <Card
              key={i}
              className="group bg-[#1a1a1a] border-gray-800 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-500 w-full h-full flex flex-col overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 mb-2">
                  <div className="bg-yellow-500 p-2 rounded-lg">
                    <card.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 mb-6 leading-relaxed">{card.description}</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {card.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300 group/item hover:text-yellow-500 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0 group-hover/item:ring-4 group-hover/item:ring-yellow-500/20 transition-all duration-300" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={card.variant}
                  className="w-full mt-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] border-0"
                  onClick={() => navigate(card.route)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
  );
};

export default DualTracks;
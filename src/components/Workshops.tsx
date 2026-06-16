import { Card } from "@/components/ui/card";
import { Plane, Wrench, Gamepad2, Wind, Shield, Network } from "lucide-react";

const Workshops = () => {
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

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive hands-on training for all skill levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <workshop.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {workshop.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {workshop.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;

import { Card } from "@/components/ui/card";
import { Briefcase, Shield } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Medha Ravindranath",
      role: "Co-Founder",
      education: "Chemical Engineer (DSCE) | MBA (BITS Pilani)",
      experience: "10+ years in AI startups: Practo, Unacademy, Locus, Entropik",
      specialization: "Sales & Business Strategy",
      icon: Briefcase,
    },
    {
      name: "Himanshu Janu",
      role: "Co-Founder",
      education: "Chemical Engineer",
      experience: "Post Commander, Border Security Force (BSF)",
      specialization: "Certified Drone Pilot & Trainer",
      icon: Shield,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expert Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining business expertise with operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <founder.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-muted-foreground mb-2">{founder.education}</p>
              <p className="text-sm text-foreground mb-3">{founder.experience}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">
                  {founder.specialization}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

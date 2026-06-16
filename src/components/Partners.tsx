import { Card } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      image: "@/assets/1.png",
      title: "ST.FRANCIS SCHOOL ICSE",
      description: "Nurturing innovation, integrity, and excellence in every student.",
    },
    {
      image: "@/assets/2.png",
      title: "TAPOVAN",
      description: "Fostering creativity and experiential learning for young innovators.",
    },
    {
      image: "@/assets/3.png",
      title: "DAYA NANDA SAGAR INSTITUTIONS",
      description: "Collaborating to bridge the gap between academia and emerging tech industries.",
    },
    {
      image: "@/assets/4.png",
      title: "KARNATAK LINGAYAT EDUCATION SOCIETY",
      description: "Advancing technological education through collaboration and innovation.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with industry leaders to advance drone technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 group cursor-pointer animate-float"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {partner.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

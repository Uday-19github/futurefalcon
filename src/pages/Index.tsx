import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import DualTracks from "@/components/DualTracks";
import Enterprise from "@/components/Enterprise";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <DualTracks />
      <Enterprise />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;

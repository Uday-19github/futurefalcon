import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Building2, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      {/* Animated Background Dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-yellow-500 text-sm font-bold tracking-wider uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Get Started
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join us today and experience the future of drone technology
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <div className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-slide-up overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-500">
                  <GraduationCap className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                  For Educational Institutions
                </h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Start your drone journey with hands-on workshops and expert guidance
              </p>
              <Button
                onClick={() => navigate('/drone-workshop-offerings')}
                className="w-full group/btn bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] border-0 h-12"
              >
                Explore Workshops
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* For Enterprises */}
          <div className="group relative p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,179,8,0.2)] animate-slide-up overflow-hidden" style={{ animationDelay: "100ms" }}>
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-500">
                  <Building2 className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">
                  For Enterprises
                </h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Transform operations with Falcon Mist and industrial drone solutions
              </p>
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full group/btn bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] border-0 h-12">
                    Schedule Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-gray-800 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white text-2xl">Contact Us for Demo</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Get in touch with us to schedule a demo of our enterprise drone solutions.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-5 mt-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-yellow-500" />
                      </div>
                      <a href="tel:+918618418636" className="text-sm text-gray-300 hover:text-yellow-500 transition-colors font-medium">
                       +91 7829029214,+91 8618418636
                      </a>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-yellow-500" />
                      </div>
                      <a href="mailto:contact@futurefalconskytechnology.com" className="text-sm text-gray-300 hover:text-yellow-500 transition-colors break-all font-medium">
                        contact@futurefalconskytechnology.com
                      </a>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-yellow-500" />
                      </div>
                      <p className="text-sm text-gray-300 pt-2 font-medium">Bengaluru, Karnataka 560068</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>

        {/* Optional: Bottom Tagline */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
            <span className="text-yellow-500/70 font-medium">Let's Build the Future Together</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
  );
};

export default CallToAction;
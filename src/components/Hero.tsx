import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/team3.jpg";
import redLego from "@/assets/red.png";
import brownLego from "@/assets/brown.png";
import greenLego from "@/assets/green.png";
import whiteLego from "@/assets/white.png";
import { i } from "node_modules/framer-motion/dist/types.d-BJcRxCew";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary brick-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm lego-shadow-sm">
                Women Only Hackathon
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
              TYNET
              <span className="block text-accent">3.0</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-lg">
              Build Beyond Boundaries, Brick by Brick 🧱
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-background/90 px-4 py-3 rounded-xl lego-shadow-sm">
                <Calendar className="text-accent" />
                <span className="font-semibold">March 15-16, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-background/90 px-4 py-3 rounded-xl lego-shadow-sm">
                <MapPin className="text-accent" />
                <span className="font-semibold">Campus Venue</span>
              </div>
              <div className="flex items-center gap-2 bg-background/90 px-4 py-3 rounded-xl lego-shadow-sm">
                <Users className="text-accent" />
                <span className="font-semibold">200+ Participants</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="accent" size="lg" className="text-lg">
                Register Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-background">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden lego-shadow">
              <img 
                src={heroImage} 
                alt="LEGO themed hackathon illustration" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating LEGO Bricks Decoration */}
            <img 
              src={redLego} 
              alt="LEGO brick" 
              className="absolute -top-8 -right-8 w-20 h-20 rotate-12 animate-pulse" 
            />
            <img 
              src={greenLego} 
              alt="LEGO brick" 
              className="absolute -bottom-8 -left-8 w-20 h-20 -rotate-12 animate-pulse" 
            />
          </div>
        </div>
      </div>

      {/* Additional LEGO blocks scattered around - Hidden below 1800px */}
      <img 
        src={redLego} 
        alt="LEGO brick" 
        className="absolute top-20 left-5 w-48 h-48 rotate-45 animate-pulse opacity-40 lego-decorative" 
      />
      <img 
        src={whiteLego} 
        alt="LEGO brick" 
        className="absolute bottom-40 right-20 w-56 h-56 -rotate-45 animate-pulse opacity-30 lego-decorative" 
      />
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute top-1/2 left-10 w-40 h-40 rotate-12 animate-pulse opacity-20 lego-decorative" 
      />
      <img 
        src={greenLego} 
        alt="LEGO brick" 
        className="absolute top-[20%] right-2 w-32 h-32 -rotate-12 animate-pulse opacity-25 lego-decorative" 
      />

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

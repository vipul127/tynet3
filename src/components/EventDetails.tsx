import { Calendar, Clock, MapPin, Users, Sparkles, Code, Trophy } from "lucide-react";
import brownLego from "@/assets/brown.png";
import redLogo from "@/assets/red.png";
import whiteLego from "@/assets/white.png";
import greenLego from "@/assets/green.png";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      value: "March 15-16",
      label: "2025",
    },
    {
      icon: Clock,
      value: "24",
      label: "Hours",
    },
    {
      icon: MapPin,
      value: "Campus",
      label: "Innovation Hub",
    },
    {
      icon: Users,
      value: "Women",
      label: "Only",
    },
  ];

  const perks = [
    { icon: Sparkles, text: "Workshops" },
    { icon: Code, text: "Mentorship" },
    { icon: Trophy, text: "Swag & Prizes" },
  ];

  return (
    <section id="details" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative LEGO blocks */}
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute top-10 left-0 w-60 h-60 rotate-12 hidden lg:block opacity-30" 
      />
      <img 
        src={greenLego} 
        alt="LEGO brick" 
        className="absolute bottom-10 right-0 w-72 h-72 -rotate-12 hidden lg:block opacity-30" 
      />
      <img 
        src={redLogo} 
        alt="LEGO brick" 
        className="absolute top-1/3 right-5 w-56 h-56 rotate-45 hidden xl:block opacity-20" 
      />
      <img 
        src={whiteLego} 
        alt="LEGO brick" 
        className="absolute bottom-1/3 left-5 w-64 h-64 -rotate-45 hidden xl:block opacity-25" 
      />
      {/* <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute top-20 left-1/4 w-48 h-48 rotate-12 hidden xl:block opacity-15" 
      /> */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-primary">THE EVENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Quick <span className="text-primary">Facts</span>
          </h2>
        </div>

        {/* LEGO Block Style Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            const colors = ['bg-accent', 'bg-primary', 'bg-accent', 'bg-primary'];
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* LEGO brick top studs */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  <div className={`w-3 h-3 ${colors[index]} rounded-full opacity-40`} />
                  <div className={`w-3 h-3 ${colors[index]} rounded-full opacity-40`} />
                </div>
                
                <div className={`${colors[index]} rounded-2xl p-6 md:p-8 text-center lego-shadow group-hover:translate-y-1 group-hover:shadow-none transition-all`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-background mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-background mb-1">
                    {detail.value}
                  </div>
                  <div className="text-sm md:text-base text-background/80 font-medium">
                    {detail.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included - Icon Based */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              What's <span className="text-accent">Included</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div
                  key={index}
                  className="bg-muted/50 rounded-xl p-6 text-center hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold">{perk.text}</p>
                </div>
              );
            })}
          </div>

          {/* Simple perks list */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Free Meals", "Networking", "Expert Judges"].map((item, i) => (
              <span key={i} className="bg-background border-2 border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

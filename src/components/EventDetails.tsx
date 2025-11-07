import { Calendar, Clock, MapPin, Users, Lightbulb, Coffee, Award, Sparkles, Trophy, Users as UsersIcon } from "lucide-react";
import { motion } from "framer-motion";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";
import legoMeals from "@/assets/lego-meals.png";
import legoWorkshops from "@/assets/lego-workshops.png";
import legoNetworking from "@/assets/lego-networking.png";
import legoPrizes from "@/assets/lego-prizes.png";
import legoSwag from "@/assets/lego-swag.png";
import legoMentorship from "@/assets/lego-mentorship.png";

const EventDetails = () => {
  const highlights = [
    { icon: Lightbulb, label: "Workshops", image: legoWorkshops, color: "bg-[#FFD93D]" },
    { icon: Coffee, label: "Free Meals", image: legoMeals, color: "bg-[#FF6B6B]" },
    { icon: UsersIcon, label: "Networking", image: legoNetworking, color: "bg-[#4ECDC4]" },
    { icon: Trophy, label: "Prizes", image: legoPrizes, color: "bg-[#FFD93D]" },
    { icon: Award, label: "Swag", image: legoSwag, color: "bg-[#FF6B6B]" },
    { icon: Sparkles, label: "Mentorship", image: legoMentorship, color: "bg-[#4ECDC4]" },
  ];

  return (
    <section id="event-details" className="py-32 bg-[hsl(var(--accent))] relative overflow-hidden">
      {/* Floating LEGO Graphics - Hidden below 1800px */}
      <motion.img 
        src={redLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-40 h-40 opacity-10 lego-decorative" 
      />
      <motion.img 
        src={greenLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-48 h-48 opacity-10 lego-decorative" 
      />
      <motion.img 
        src={brownLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -15, 0],
          rotate: [5, 0, 5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-20 w-32 h-32 opacity-10 lego-decorative" 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">EVENT DETAILS</h2>
          <div className="w-24 h-1 bg-foreground mx-auto"></div>
        </motion.div>

        {/* Main Info Grid - Super Spacious */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ECDC4]/20 rounded-full -mr-16 -mt-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-[#4ECDC4] p-5 rounded-2xl lego-shadow-sm">
                <Calendar className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">DATE</h3>
                <p className="text-2xl font-semibold">March 15-16, 2025</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD93D]/20 rounded-full -ml-16 -mb-16" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-[#FFD93D] p-5 rounded-2xl lego-shadow-sm">
                <Clock className="w-12 h-12 text-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">DURATION</h3>
                <p className="text-2xl font-semibold">24 Hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#FF6B6B]/20 rounded-full -ml-20 -mt-20" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-[#FF6B6B] p-5 rounded-2xl lego-shadow-sm">
                <MapPin className="w-12 h-12 text-foreground" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">VENUE</h3>
                <p className="text-2xl font-semibold">Campus Innovation Hub</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4ECDC4]/20 rounded-full -mr-20 -mb-20" />
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-[#4ECDC4] p-5 rounded-2xl lego-shadow-sm">
                <Users className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">ELIGIBILITY</h3>
                <p className="text-2xl font-semibold">Women Only</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What to Expect - Modern White Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-5xl md:text-6xl font-bold text-center mb-16">WHAT TO EXPECT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-3xl p-8 lego-shadow hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden min-h-[280px] flex flex-col justify-between"
              >
                {/* Icon at top */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="bg-background/50 p-3 rounded-xl border-2 border-foreground/10">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-3xl md:text-4xl mt-1">{item.label}</h4>
                </div>

                {/* LEGO Image in bottom right corner as background */}
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="absolute bottom-0 right-0 w-32 h-32 md:w-36 md:h-36 object-contain opacity-60 pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
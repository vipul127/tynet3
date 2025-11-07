import { Linkedin, Mail } from "lucide-react";
import FacultySection from "./FacultySection";
import { motion } from "framer-motion";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import whiteLego from "@/assets/white.png";
import legoWorkshops from "@/assets/lego-workshops.png";
import legoNetworking from "@/assets/lego-networking.png";
import legoPrizes from "@/assets/lego-prizes.png";
import legoMentorship from "@/assets/lego-mentorship.png";

const Team = () => {
  const coreTeam = [
    {
      name: "Sarah Johnson",
      role: "Event Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      accentColor: "accent",
      legoImage: legoWorkshops,
    },
    {
      name: "Emily Chen",
      role: "Tech Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      accentColor: "primary",
      legoImage: legoPrizes,
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      accentColor: "accent",
      legoImage: legoNetworking,
    },
    {
      name: "Maria Garcia",
      role: "Operations Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      accentColor: "primary",
      legoImage: legoMentorship,
    },
    {
      name: "Jessica Lee",
      role: "Sponsorship Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      accentColor: "accent",
      legoImage: legoPrizes,
    },
    {
      name: "Aisha Rahman",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
      accentColor: "primary",
      legoImage: legoWorkshops,
    },
  ];

  return (
    <section id="team" className="py-32 bg-background relative overflow-hidden">
      {/* Floating LEGO Graphics - Hidden below 1800px */}
      <motion.img 
        src={redLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -25, 0],
          rotate: [10, 0, 10]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-5 w-36 h-36 opacity-5 lego-decorative" 
      />
      <motion.img 
        src={greenLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, 20, 0],
          rotate: [-10, 0, -10]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-5 w-44 h-44 opacity-5 lego-decorative" 
      />
      <motion.img 
        src={whiteLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-40 h-40 opacity-5 lego-decorative" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Faculty Section */}
        <FacultySection />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            W-ACM <span className="text-primary">Core Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">Building TYNET 3.0 brick by brick</p>
        </motion.div>

        {/* Modern Team Cards with Animated LEGO Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-8 lego-shadow hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden min-h-[380px] flex flex-col"
            >
              {/* Profile Image at Top */}
              <div className="relative flex justify-center mb-6">
                <div className="relative">
                  {/* LEGO Studs decoration */}
                  <div className="absolute -top-2 -left-2 grid grid-cols-2 gap-1 z-10">
                    <div className={`w-3 h-3 rounded-full ${member.accentColor === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                    <div className={`w-3 h-3 rounded-full ${member.accentColor === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                    <div className={`w-3 h-3 rounded-full ${member.accentColor === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                    <div className={`w-3 h-3 rounded-full ${member.accentColor === 'accent' ? 'bg-accent' : 'bg-primary'}`} />
                  </div>
                  
                  <div className={`w-42 h-42 rounded-2xl overflow-hidden border-4 ${member.accentColor === 'accent' ? 'border-accent' : 'border-primary'} lego-shadow`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name and Role - Large and Prominent */}
              <div className="text-center mb-4 flex-1 flex flex-col justify-start relative z-10">
                <div className={`inline-block mx-auto ${member.accentColor === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} px-4 py-1 rounded-full mb-3`}>
                  <span className={`text-xs font-bold uppercase tracking-wide ${member.accentColor === 'accent' ? 'text-accent' : 'text-primary'}`}>
                    {member.role}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'Fredoka, Arial, sans-serif' }}>
                  {member.name}
                </h3>
                
                {/* Social Links */}
                <div className="flex gap-3 justify-center">
                  <button className={`w-10 h-10 ${member.accentColor === 'accent' ? 'bg-accent/10 hover:bg-accent' : 'bg-primary/10 hover:bg-primary'} rounded-xl flex items-center justify-center transition-all hover:scale-110 group`}>
                    <Linkedin className={`w-5 h-5 ${member.accentColor === 'accent' ? 'text-accent' : 'text-primary'} group-hover:text-background`} />
                  </button>
                  <button className={`w-10 h-10 ${member.accentColor === 'accent' ? 'bg-accent/10 hover:bg-accent' : 'bg-primary/10 hover:bg-primary'} rounded-xl flex items-center justify-center transition-all hover:scale-110 group`}>
                    <Mail className={`w-5 h-5 ${member.accentColor === 'accent' ? 'text-accent' : 'text-primary'} group-hover:text-background`} />
                  </button>
                </div>
              </div>

              {/* Animated LEGO Image at Bottom Right Corner */}
              {/* <motion.img 
                src={member.legoImage}
                alt={`${member.role} LEGO`}
                className="absolute bottom-2 right-2 w-24 h-24 md:w-28 md:h-28 object-contain opacity-40 pointer-events-none"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: index * 0.3 
                }}
              /> */}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/10 border-4 border-primary/30 rounded-3xl p-10">
          <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate volunteers to help organize future events. 
            Join ACM Women and be part of something amazing!
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold lego-shadow hover:translate-y-1 hover:shadow-none transition-all">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
import { Linkedin, Mail } from "lucide-react";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";
import FacultySection from "./FacultySection";
import { motion } from "framer-motion";

const Team = () => {
  const coreTeam = [
    {
      name: "Sarah Johnson",
      role: "Event Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Emily Chen",
      role: "Tech Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: "Maria Garcia",
      role: "Operations Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    {
      name: "Jessica Lee",
      role: "Sponsorship Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    },
    {
      name: "Aisha Rahman",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* LEGO blocks scattered around */}
      <img 
        src={greenLego} 
        alt="LEGO brick" 
        className="absolute top-10 left-0 w-64 h-64 lego-shadow rotate-12 hidden lg:block opacity-20" 
      />
      <img 
        src={redLego} 
        alt="LEGO brick" 
        className="absolute top-40 right-0 w-56 h-56 lego-shadow -rotate-45 hidden xl:block opacity-15" 
      />
      <img 
        src={whiteLego} 
        alt="LEGO brick" 
        className="absolute bottom-20 left-5 w-60 h-60 lego-shadow rotate-45 hidden lg:block opacity-25" 
      />
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute bottom-40 right-10 w-52 h-52 lego-shadow -rotate-12 hidden xl:block opacity-20" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Faculty Section */}
        <FacultySection />

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet the <span className="text-primary">W-ACM Cores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate women from ACM Women (W-ACM) organizing TYNET 3.0
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-white rounded-[2.5rem] border-4 border-primary/30 shadow-xl p-8 flex flex-col items-center cartoon-frame overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform"
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
            >
              {/* Cartoon burst background */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-300 rounded-full border-4 border-white cartoon-burst z-0" />
              {/* LEGO stud accent */}
              <img src={redLego} alt="lego stud" className="absolute -top-6 -left-6 w-12 h-12 opacity-40 rotate-12" />
              <img src={greenLego} alt="lego stud" className="absolute -bottom-6 -right-6 w-12 h-12 opacity-40 -rotate-12" />
              {/* Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="relative z-10 w-32 h-32 object-cover rounded-2xl border-4 border-yellow-300 cartoon-img bg-white"
              />
              {/* Role badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold shadow cartoon-badge z-10 border-2 border-white">
                {member.role}
              </div>
              {/* Name and links */}
              <div className="text-center mt-12 z-10">
                <h3 className="text-xl font-extrabold mb-2" style={{ fontFamily: 'Fredoka, Arial, sans-serif' }}>{member.name}</h3>
                <div className="flex justify-center gap-3 mt-4">
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group-hover:scale-110">
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </button>
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group-hover:scale-110">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </button>
                </div>
              </div>
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

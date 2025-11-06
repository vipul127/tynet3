import { Linkedin, Mail } from "lucide-react";
import FacultySection from "./FacultySection";
import { motion } from "framer-motion";

const Team = () => {
  const coreTeam = [
    {
      name: "Sarah Johnson",
      role: "Event Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      accentColor: "accent",
    },
    {
      name: "Emily Chen",
      role: "Tech Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      accentColor: "primary",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      accentColor: "accent",
    },
    {
      name: "Maria Garcia",
      role: "Operations Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      accentColor: "primary",
    },
    {
      name: "Jessica Lee",
      role: "Sponsorship Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      accentColor: "accent",
    },
    {
      name: "Aisha Rahman",
      role: "Design Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
      accentColor: "primary",
    },
  ];

  return (
    <section id="team" className="py-32 bg-accent relative overflow-hidden">
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

        {/* Horizontal LEGO Box Style Cards */}
        <div className="space-y-6">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-background rounded-3xl p-6 lego-shadow hover:scale-[1.02] transition-all flex items-center gap-6 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Profile Image with LEGO Border */}
                <div className="relative flex-shrink-0">
                  {/* LEGO Studs decoration */}
                  <div className={`absolute -top-3 ${index % 2 === 0 ? '-left-3' : '-right-3'} grid grid-cols-2 gap-1`}>
                    <div className={`w-4 h-4 rounded-full bg-${member.accentColor}`} />
                    <div className={`w-4 h-4 rounded-full bg-${member.accentColor}`} />
                    <div className={`w-4 h-4 rounded-full bg-${member.accentColor}`} />
                    <div className={`w-4 h-4 rounded-full bg-${member.accentColor}`} />
                  </div>
                  
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-${member.accentColor} lego-shadow`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className={`inline-block bg-${member.accentColor}/10 px-4 py-1 rounded-full mb-3`}>
                    <span className={`text-sm font-bold text-${member.accentColor === 'accent' ? 'accent' : 'primary'}`}>
                      {member.role}
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-2" style={{ fontFamily: 'Fredoka, Arial, sans-serif' }}>
                    {member.name}
                  </h3>
                  
                  {/* Social Links */}
                  <div className={`flex gap-3 mt-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <button className={`w-11 h-11 bg-${member.accentColor}/10 hover:bg-${member.accentColor} rounded-xl flex items-center justify-center transition-all hover:scale-110 group`}>
                      <Linkedin className={`w-5 h-5 text-${member.accentColor === 'accent' ? 'accent' : 'primary'} group-hover:text-background`} />
                    </button>
                    <button className={`w-11 h-11 bg-${member.accentColor}/10 hover:bg-${member.accentColor} rounded-xl flex items-center justify-center transition-all hover:scale-110 group`}>
                      <Mail className={`w-5 h-5 text-${member.accentColor === 'accent' ? 'accent' : 'primary'} group-hover:text-background`} />
                    </button>
                  </div>
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
  {/* Team Section */}
};

export default Team;
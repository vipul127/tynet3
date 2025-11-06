import { Linkedin, Mail } from "lucide-react";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";

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
            <div 
              key={index}
              className="bg-card border-4 border-primary/20 rounded-2xl p-6 lego-shadow hover:translate-y-1 hover:shadow-none transition-all group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-primary rounded-2xl overflow-hidden lego-shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold lego-shadow-sm">
                  {member.role}
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                
                <div className="flex justify-center gap-3 mt-4">
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group-hover:scale-110">
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </button>
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group-hover:scale-110">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
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

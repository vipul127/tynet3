import { Lightbulb, Code, Trophy } from "lucide-react";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovate",
      description: "Transform creative ideas into reality with cutting-edge technology"
    },
    {
      icon: Code,
      title: "Build",
      description: "Collaborate with talented women developers to create amazing projects"
    },
    {
      icon: Trophy,
      title: "Win",
      description: "Compete for exciting prizes and recognition in the tech community"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* LEGO blocks scattered around */}
      <img 
        src={redLego} 
        alt="LEGO brick" 
        className="absolute top-10 left-0 w-56 h-56 rotate-45 hidden lg:block opacity-20" 
      />
      <img 
        src={greenLego} 
        alt="LEGO brick" 
        className="absolute top-40 right-0 w-64 h-64 -rotate-12 hidden xl:block opacity-15" 
      />
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute bottom-20 left-10 w-48 h-48 rotate-12 hidden lg:block opacity-25" 
      />
      <img 
        src={whiteLego} 
        alt="LEGO brick" 
        className="absolute bottom-40 right-5 w-52 h-52 -rotate-45 hidden xl:block opacity-20" 
      />
      <img 
        src={redLego} 
        alt="LEGO brick" 
        className="absolute top-1/2 right-10 w-44 h-44 rotate-90 hidden lg:block opacity-15" 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">TYNET 3.0</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TYNET 3.0 is the third edition of our exclusive women-only hackathon, bringing together 
            aspiring developers, designers, and innovators to build, learn, and compete. This year's 
            LEGO theme celebrates the power of building something amazing, one brick at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border-4 border-primary/20 rounded-2xl p-8 lego-shadow hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 lego-shadow-sm">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-primary/10 border-4 border-primary/30 rounded-3xl p-10 brick-pattern">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">By ACM Women</h3>
              <p className="text-lg text-muted-foreground">
                Organized by ACM Women, a student committee dedicated to empowering women in technology 
                and creating an inclusive community for all. Join us in our mission to inspire, connect, 
                and elevate women in computing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-6 lego-shadow-sm text-center">
                <div className="text-4xl font-bold text-primary">3rd</div>
                <div className="text-sm text-muted-foreground mt-2">Edition</div>
              </div>
              <div className="bg-background rounded-xl p-6 lego-shadow-sm text-center">
                <div className="text-4xl font-bold text-accent">48h</div>
                <div className="text-sm text-muted-foreground mt-2">Hacking Time</div>
              </div>
              <div className="bg-background rounded-xl p-6 lego-shadow-sm text-center">
                <div className="text-4xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground mt-2">Participants</div>
              </div>
              <div className="bg-background rounded-xl p-6 lego-shadow-sm text-center">
                <div className="text-4xl font-bold text-accent">$10K</div>
                <div className="text-sm text-muted-foreground mt-2">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, Trophy, Sparkles, Heart, Rocket, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";
import whiteLego from "@/assets/white.png";

const PastEvents = () => {
  const stats = [
    { number: "200+", label: "Participants" },
    { number: "50+", label: "Teams" },
    { number: "30+", label: "Mentors" },
    { number: "₹75K", label: "Prize Pool" }
  ];

  const highlights = [
    { icon: Sparkles, title: "48 Hours", description: "Non-stop innovation and coding", color: "bg-[#FFD93D]" },
    { icon: Trophy, title: "Amazing Prizes", description: "₹75,000 total prize money", color: "bg-[#FF6B6B]" },
    { icon: Users, title: "Expert Mentors", description: "30+ industry professionals", color: "bg-[#4ECDC4]" },
    { icon: Rocket, title: "AI/ML Track", description: "Specialized tech workshops", color: "bg-[#FFD93D]" },
    { icon: Heart, title: "Networking", description: "Build lasting connections", color: "bg-[#FF6B6B]" },
    { icon: Sparkles, title: "Real Impact", description: "Projects turned into startups", color: "bg-[#4ECDC4]" }
  ];

  const winners = [
    { position: "1st", team: "Team InnovatHers", prize: "₹35,000", project: "AI-powered healthcare solution", color: "bg-[#FF6B6B]" },
    { position: "2nd", team: "Team ByteBelles", prize: "₹25,000", project: "Smart campus navigation app", color: "bg-[#FFD93D]" },
    { position: "3rd", team: "Team SheCodes", prize: "₹15,000", project: "Mental health chatbot", color: "bg-[#4ECDC4]" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Modern & Clean */}
      <section className="relative bg-primary brick-pattern py-24 px-6 overflow-hidden">
        {/* LEGO blocks - Hidden below 1701px */}
        <img 
          src={redLego} 
          alt="LEGO brick" 
          className="absolute top-5 right-0 w-64 h-64 rotate-12 opacity-30 lego-decorative" 
        />
        <img 
          src={greenLego} 
          alt="LEGO brick" 
          className="absolute bottom-5 left-0 w-56 h-56 -rotate-45 opacity-25 lego-decorative" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/">
            <Button variant="outline" className="mb-8 bg-background hover:bg-background/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold text-sm lego-shadow-sm mb-6">
              Past Event Recap
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              TYNET <span className="text-accent">2.0</span>
            </h1>
            <p className="text-2xl text-foreground/80 max-w-2xl mb-8">
              A glimpse into our previous season - where 200+ women built amazing projects, brick by brick
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background/90 px-6 py-4 rounded-xl lego-shadow-sm"
                >
                  <div className="text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Highlights - Same style as "What to Expect" */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        <img 
          src={brownLego} 
          alt="LEGO brick" 
          className="absolute top-10 left-0 w-60 h-60 rotate-45 opacity-15 lego-decorative" 
        />
        <img 
          src={whiteLego} 
          alt="LEGO brick" 
          className="absolute bottom-20 right-0 w-64 h-64 -rotate-12 opacity-20 lego-decorative" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Event Highlights</h2>
            <p className="text-xl text-muted-foreground">What made TYNET 2.0 unforgettable</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border-4 border-foreground/10 rounded-3xl p-8 lego-shadow hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden min-h-[200px]"
              >
                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className={`${item.color} p-3 rounded-xl lego-shadow-sm`}>
                    <item.icon className="w-8 h-8 text-background" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Section - Trophy Podium Style */}
      <section className="py-20 px-6 bg-[hsl(var(--accent))] relative overflow-hidden">
        <img 
          src={greenLego} 
          alt="LEGO brick" 
          className="absolute top-10 left-0 w-56 h-56 rotate-12 opacity-10 lego-decorative" 
        />
        <img 
          src={redLego} 
          alt="LEGO brick" 
          className="absolute bottom-20 right-0 w-60 h-60 -rotate-45 opacity-10 lego-decorative" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Champions of TYNET 2.0</h2>
            <p className="text-xl text-foreground/80">Teams that built beyond boundaries</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {winners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-3xl p-8 lego-shadow hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden"
              >
                {/* Position Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${winner.color} rounded-full flex items-center justify-center font-bold text-background text-lg lego-shadow-sm`}>
                  {winner.position}
                </div>

                <div className="pt-8">
                  <Trophy className={`w-16 h-16 mb-4 ${winner.color.replace('bg-', 'text-')}`} />
                  <h3 className="text-2xl font-bold mb-2">{winner.team}</h3>
                  <div className={`inline-block ${winner.color} text-background px-4 py-2 rounded-full font-bold text-lg mb-4`}>
                    {winner.prize}
                  </div>
                  <p className="text-muted-foreground mt-4">
                    <strong>Project:</strong> {winner.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Event Gallery</h2>
            <p className="text-xl text-muted-foreground">Memories from TYNET 2.0</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center lego-shadow hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="text-center">
                  <div className="text-6xl mb-2">📸</div>
                  <span className="text-muted-foreground font-semibold">Photo {i}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Success Stories */}
      <section className="py-20 px-6 bg-primary/10 brick-pattern">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Real Impact</h2>
            <p className="text-xl text-muted-foreground">How TYNET 2.0 changed lives</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-10 lego-shadow hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 lego-shadow-sm">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Projects Turned Startups</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Several projects from TYNET 2.0 went on to become successful startups and received funding. 
                The winning team's AI-powered healthcare solution is now being used in 3 hospitals across the city, 
                helping thousands of patients daily.
              </p>
              <div className="mt-6 pt-6 border-t border-foreground/10">
                <p className="text-accent font-bold text-xl">3 Startups Launched • ₹50L+ Funding Raised</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background rounded-3xl p-10 lego-shadow hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 lego-shadow-sm">
                <Heart className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Community That Lasts</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TYNET 2.0 created a thriving community of 200+ women developers who continue to collaborate, 
                mentor each other, and organize monthly meetups. The connections made during the event turned 
                into lifelong friendships and professional networks.
              </p>
              <div className="mt-6 pt-6 border-t border-foreground/10">
                <p className="text-primary font-bold text-xl">200+ Active Members • 12+ Monthly Meetups</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Join TYNET 3.0 */}
      <section className="py-24 px-6 bg-accent relative overflow-hidden">
        <img 
          src={whiteLego} 
          alt="LEGO brick" 
          className="absolute top-10 right-0 w-72 h-72 rotate-12 opacity-10 lego-decorative" 
        />
        <img 
          src={brownLego} 
          alt="LEGO brick" 
          className="absolute bottom-10 left-0 w-64 h-64 -rotate-45 opacity-10 lego-decorative" 
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready for TYNET 3.0?
            </h2>
            <p className="text-2xl text-white/90 mb-10 leading-relaxed">
              Join us for the biggest edition yet! Build beyond boundaries, brick by brick. 
              <br className="hidden md:block" />
              Bigger prizes, better workshops, and more opportunities await.
            </p>
            <Link to="/">
              <Button variant="default" size="lg" className="text-xl px-10 py-7 bg-primary text-background hover:bg-primary/90 font-bold lego-shadow">
                Register for TYNET 3.0
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PastEvents;

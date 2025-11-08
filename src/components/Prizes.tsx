import { Trophy, Award, Medal, Sparkles } from "lucide-react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import redLego from "@/assets/red.png";
import whiteLego from "@/assets/white.png";
import brownLego from "@/assets/brown.png";
import greenLego from "@/assets/green.png";

const CountingNumber = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [count, duration, inView, value]);

  return (
    <motion.p ref={nodeRef} className="text-5xl md:text-6xl font-bold text-background mb-2">
      ₹{display}L
    </motion.p>
  );
};

const Prizes = () => {
  return (
    <section id="prizes" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Prize <span className="text-accent">Pool</span>
          </h2>
          <p className="text-xl text-muted-foreground">Over ₹15,00,000 in total prizes</p>
        </motion.div>

        {/* LEGO Podium Style - Vertical Towers - Different Colors */}
        <div className="flex items-end justify-center gap-4 md:gap-8 mb-20">
          {/* 2nd Place - Bright Yellow */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div 
              className="relative mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFD93D] rounded-2xl flex items-center justify-center lego-shadow mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-background" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-xs font-bold text-white">
                2nd
              </div>
            </motion.div>
            {/* LEGO Tower - Bright Yellow */}
            <div className="bg-[#FFD93D] w-36 md:w-44 rounded-3xl lego-shadow flex flex-col items-center justify-center relative group-hover:shadow-2xl transition-shadow overflow-visible" style={{ height: '320px' }}>
              {/* Studs on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                <div className="w-5 h-5 bg-black/10 rounded-full" />
                <div className="w-5 h-5 bg-black/10 rounded-full" />
              </div>
              
              {/* Prize Amount - Centered */}
              <div className="relative z-10 text-center">
                <CountingNumber value={3} />
                <p className="text-background/80 font-semibold text-sm">+ Perks</p>
              </div>
            </div>
          </motion.div>

          {/* 1st Place - Tallest Tower - Bright Red/Coral */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -15, scale: 1.05 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div 
              className="relative mb-4"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FF6B6B] rounded-2xl flex items-center justify-center lego-shadow mb-2 group-hover:scale-110 transition-transform">
                <Trophy className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#FFD93D] rounded-full flex items-center justify-center text-sm font-bold border-4 border-background">
                1st
              </div>
            </motion.div>
            {/* Tallest LEGO Tower - Bright Red */}
            <div className="bg-[#FF6B6B] w-44 md:w-52 rounded-3xl lego-shadow flex flex-col items-center justify-center relative group-hover:shadow-2xl transition-shadow overflow-visible" style={{ height: '420px' }}>
              {/* Studs on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                <div className="w-6 h-6 bg-white/20 rounded-full" />
                <div className="w-6 h-6 bg-white/20 rounded-full" />
              </div>
              
              {/* Prize Amount - Centered */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="flex justify-center"
                >
                  <Sparkles className="w-8 h-8 text-white/80 mb-2" />
                </motion.div>
                <CountingNumber value={5} />
                <p className="text-white/90 font-semibold text-sm">+ Premium Perks</p>
              </div>
            </div>
          </motion.div>

          {/* 3rd Place - Bright Teal/Cyan */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div 
              className="relative mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ECDC4] rounded-2xl flex items-center justify-center lego-shadow mb-2 group-hover:scale-110 transition-transform">
                <Medal className="w-8 h-8 md:w-10 md:h-10 text-background" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center text-xs font-bold text-white">
                3rd
              </div>
            </motion.div>
            {/* LEGO Tower - Bright Teal */}
            <div className="bg-[#4ECDC4] w-36 md:w-44 rounded-3xl lego-shadow flex flex-col items-center justify-center relative group-hover:shadow-2xl transition-shadow overflow-visible" style={{ height: '280px' }}>
              {/* Studs on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                <div className="w-5 h-5 bg-white/10 rounded-full" />
                <div className="w-5 h-5 bg-white/10 rounded-full" />
              </div>
              
              {/* Prize Amount - Centered */}
              <div className="relative z-10 text-center">
                <CountingNumber value={2} />
                <p className="text-background/80 font-semibold text-sm">+ Perks</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Special Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Special Categories</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Best Design", "Most Innovative", "Social Impact", "People's Choice"].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-accent/10 border-2 border-accent/30 rounded-full px-6 py-3 font-semibold hover:bg-accent/20 transition-colors"
              >
                {category} <span className="text-accent ml-2">₹50K</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating LEGO Graphics - Hidden below 1700px */}
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
        src={redLego} 
        alt="LEGO brick" 
        className="absolute bottom-40 left-10 w-52 h-52 rotate-45 animate-pulse opacity-30 lego-decorative" 
      />

      <img 
        src={whiteLego} 
        alt="LEGO brick" 
        className="absolute top-[30%] left-5 w-56 h-56 -rotate-45 animate-pulse opacity-30 lego-decorative" 
      />
      
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute top-1/2 left-10 w-40 h-40 rotate-12 animate-pulse opacity-20 lego-decorative" 
      />
      <img 
        src={greenLego} 
        alt="LEGO brick" 
        className="absolute top-[20%] right-2 w-32 h-32 -rotate-64 animate-pulse opacity-25 lego-decorative" 
      />
      <img 
        src={brownLego} 
        alt="LEGO brick" 
        className="absolute top-[50%] right-2 w-32 h-32 -rotate-270 animate-pulse opacity-25 lego-decorative" 
      />

        {/* All Participants Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/10 border-4 border-primary/30 rounded-3xl p-8 md:p-12 brick-pattern"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-primary">Every Participant</span> Gets
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-2xl p-6 lego-shadow hover:translate-y-[-4px] transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2">Goodies & Swag</h4>
              <p className="text-muted-foreground text-sm">Exclusive TYNET 3.0 merchandise & tech goodies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-2xl p-6 lego-shadow hover:translate-y-[-4px] transition-all text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-xl mb-2">Participation Certificate</h4>
              <p className="text-muted-foreground text-sm">Official certificate to boost your portfolio</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background rounded-2xl p-6 lego-shadow hover:translate-y-[-4px] transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-2">Memories with ACM-W</h4>
              <p className="text-muted-foreground text-sm">Unforgettable networking & learning experience</p>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm md:text-base">
              Plus free meals, workshops, mentorship sessions, and lifetime connections! 🎉
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;

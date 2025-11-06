import { Trophy, Award, Medal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

        {/* LEGO Podium Style */}
        <div className="flex items-end justify-center gap-8 mb-20">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center lego-shadow mb-2">
                <Award className="w-10 h-10 text-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold">
                2nd
              </div>
            </div>
            {/* LEGO Stack */}
            <div className="bg-primary/80 w-48 h-56 rounded-3xl lego-shadow flex flex-col items-center justify-center relative">
              {/* Studs on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="w-6 h-6 bg-foreground/20 rounded-full" />
                <div className="w-6 h-6 bg-foreground/20 rounded-full" />
              </div>
              <p className="text-5xl font-bold text-background mb-2">₹3L</p>
              <p className="text-background/80 font-semibold">+ Perks</p>
            </div>
          </motion.div>

          {/* 1st Place - Taller */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center lego-shadow mb-2">
                <Trophy className="w-12 h-12 text-background" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-sm font-bold border-4 border-background">
                1st
              </div>
            </div>
            {/* Taller LEGO Stack */}
            <div className="bg-accent w-56 h-72 rounded-3xl lego-shadow flex flex-col items-center justify-center relative">
              {/* Studs on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="w-7 h-7 bg-background/20 rounded-full" />
                <div className="w-7 h-7 bg-background/20 rounded-full" />
              </div>
              <Sparkles className="w-8 h-8 text-background/60 mb-2" />
              <p className="text-6xl font-bold text-background mb-2">₹5L</p>
              <p className="text-background/80 font-semibold">+ Premium Perks</p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center lego-shadow mb-2">
                <Medal className="w-10 h-10 text-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold">
                3rd
              </div>
            </div>
            {/* LEGO Stack */}
            <div className="bg-primary/60 w-48 h-48 rounded-3xl lego-shadow flex flex-col items-center justify-center relative">
              {/* Studs on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-4">
                <div className="w-6 h-6 bg-foreground/20 rounded-full" />
                <div className="w-6 h-6 bg-foreground/20 rounded-full" />
              </div>
              <p className="text-5xl font-bold text-background mb-2">₹2L</p>
              <p className="text-background/80 font-semibold">+ Perks</p>
            </div>
          </motion.div>
        </div>

        {/* Special Categories - Minimalist Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Special Categories</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Best Design", "Most Innovative", "Social Impact", "People's Choice"].map((category, i) => (
              <div key={i} className="bg-accent/10 border-2 border-accent/30 rounded-full px-6 py-3 font-semibold hover:bg-accent/20 transition-colors">
                {category} <span className="text-accent ml-2">₹50K</span>
              </div>
            ))}
          </div>
          
          <div className="inline-block bg-muted/50 rounded-2xl px-8 py-4 text-sm text-muted-foreground">
            All participants get certificates, swag & networking opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
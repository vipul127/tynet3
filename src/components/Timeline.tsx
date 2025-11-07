import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import redLego from "@/assets/red.png";
import greenLego from "@/assets/green.png";
import brownLego from "@/assets/brown.png";

const Timeline = () => {
  const day1Events = [
    { time: "09:00 AM", event: "Registration & Welcome", color: "bg-[hsl(var(--accent))]" },
    { time: "10:00 AM", event: "Opening Ceremony", color: "bg-[hsl(var(--primary))]" },
    { time: "11:00 AM", event: "Hackathon Begins!", color: "bg-[hsl(var(--accent))]" },
    { time: "01:00 PM", event: "Lunch Break", color: "bg-[hsl(var(--primary))]" },
    { time: "02:00 PM", event: "Workshop Session 1", color: "bg-[hsl(var(--accent))]" },
    { time: "04:00 PM", event: "Mentor Meet & Greet", color: "bg-[hsl(var(--primary))]" },
    { time: "07:00 PM", event: "Dinner & Networking", color: "bg-[hsl(var(--accent))]" },
    { time: "09:00 PM", event: "Late Night Coding", color: "bg-[hsl(var(--primary))]" },
  ];

  const day2Events = [
    { time: "08:00 AM", event: "Breakfast", color: "bg-[hsl(var(--accent))]" },
    { time: "09:00 AM", event: "Final Sprint", color: "bg-[hsl(var(--primary))]" },
    { time: "11:00 AM", event: "Submission Deadline", color: "bg-[hsl(var(--accent))]" },
    { time: "12:00 PM", event: "Lunch Break", color: "bg-[hsl(var(--primary))]" },
    { time: "01:00 PM", event: "Project Presentations", color: "bg-[hsl(var(--accent))]" },
    { time: "04:00 PM", event: "Judging & Deliberation", color: "bg-[hsl(var(--primary))]" },
    { time: "05:30 PM", event: "Prize Distribution", color: "bg-[hsl(var(--accent))]" },
    { time: "06:00 PM", event: "Closing Ceremony", color: "bg-[hsl(var(--primary))]" },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Floating LEGO Graphics */}
      <motion.img 
        src={redLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-40 h-40 opacity-10 hidden lg:block" 
      />
      <motion.img 
        src={greenLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-48 h-48 opacity-10 hidden lg:block" 
      />
      <motion.img 
        src={brownLego} 
        alt="LEGO brick"
        animate={{ 
          y: [0, -15, 0],
          rotate: [5, 0, 5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-32 h-32 opacity-10 hidden xl:block" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">EVENT TIMELINE</h2>
          <div className="w-24 h-1 bg-foreground mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">24 Hours of Innovation & Fun</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[hsl(var(--accent))] rounded-3xl p-8 mb-8 lego-shadow">
              <h3 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
                <Clock className="w-8 h-8" />
                DAY 1
              </h3>
              <p className="text-center text-lg mt-2">March 15, 2025</p>
            </div>

            <div className="space-y-4">
              {day1Events.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`${item.color} w-6 h-6 rounded-full lego-shadow-sm flex-shrink-0`}></div>
                    {index < day1Events.length - 1 && (
                      <div className="w-1 h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <div className={`${item.color} flex-1 rounded-2xl p-6 lego-shadow-sm hover:scale-105 transition-transform mb-4`}>
                    <div className="font-bold text-xl mb-1">{item.time}</div>
                    <div className="text-lg">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[hsl(var(--primary))] rounded-3xl p-8 mb-8 lego-shadow">
              <h3 className="text-4xl font-bold text-center flex items-center justify-center gap-3">
                <Clock className="w-8 h-8" />
                DAY 2
              </h3>
              <p className="text-center text-lg mt-2">March 16, 2025</p>
            </div>

            <div className="space-y-4">
              {day2Events.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`${item.color} w-6 h-6 rounded-full lego-shadow-sm flex-shrink-0`}></div>
                    {index < day2Events.length - 1 && (
                      <div className="w-1 h-full bg-border mt-2"></div>
                    )}
                  </div>
                  <div className={`${item.color} flex-1 rounded-2xl p-6 lego-shadow-sm hover:scale-105 transition-transform mb-4`}>
                    <div className="font-bold text-xl mb-1">{item.time}</div>
                    <div className="text-lg">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

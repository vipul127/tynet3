import { Calendar, Clock, MapPin, Users, Lightbulb, Coffee, Award, Sparkles, Trophy, Users as UsersIcon } from "lucide-react";
import { motion } from "framer-motion";

const EventDetails = () => {
  const highlights = [
    { icon: Lightbulb, label: "Workshops" },
    { icon: Coffee, label: "Free Meals" },
    { icon: UsersIcon, label: "Networking" },
    { icon: Trophy, label: "Prizes" },
    { icon: Award, label: "Swag" },
    { icon: Sparkles, label: "Mentorship" },
  ];

  return (
    <section id="event-details" className="py-32 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform"
          >
            <div className="flex items-start gap-6">
              <div className="bg-accent p-5 rounded-2xl">
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
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform"
          >
            <div className="flex items-start gap-6">
              <div className="bg-accent p-5 rounded-2xl">
                <Clock className="w-12 h-12" />
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
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform"
          >
            <div className="flex items-start gap-6">
              <div className="bg-accent p-5 rounded-2xl">
                <MapPin className="w-12 h-12" />
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
            className="bg-background rounded-3xl p-12 lego-shadow hover:scale-105 transition-transform"
          >
            <div className="flex items-start gap-6">
              <div className="bg-accent p-5 rounded-2xl">
                <Users className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">ELIGIBILITY</h3>
                <p className="text-2xl font-semibold">Women Only</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Highlights - Icon Only, No Text Overload */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background/50 backdrop-blur-sm border-4 border-foreground rounded-[3rem] p-16"
        >
          <h3 className="text-4xl font-bold text-center mb-16">WHAT TO EXPECT</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="bg-accent p-8 rounded-2xl lego-shadow hover:scale-110 transition-transform">
                  <item.icon className="w-12 h-12" />
                </div>
                <p className="font-bold text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
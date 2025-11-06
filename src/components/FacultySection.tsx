import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const faculty = [
  {
    name: "Dr. Anjali Mehta",
    role: "Faculty Sponsor",
    image: "/faculty1.jpg",
  },
  {
    name: "Prof. Rakesh Singh",
    role: "Faculty Coordinator",
    image: "/faculty2.jpg",
  },
];

export default function FacultySection() {
  return (
    <section className="mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
          <GraduationCap className="w-6 h-6 text-primary" />
          <span className="font-bold text-primary">Faculty Mentors</span>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex-1 relative group"
          >
            {/* LEGO Baseplate Style */}
            <div className="bg-background rounded-3xl p-8 lego-shadow hover:scale-105 transition-all h-full flex flex-col items-center text-center">
              {/* Studs Pattern Top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-20">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="w-3 h-3 rounded-full bg-primary" />
                ))}
              </div>

              {/* Profile Image - Circular with Border */}
              <div className="relative mb-6 mt-4">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary lego-shadow">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* LEGO stud accent on image */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-background" />
              </div>

              <h3 className="text-2xl font-extrabold mb-2" style={{ fontFamily: 'Fredoka, Arial, sans-serif' }}>
                {f.name}
              </h3>
              
              <div className="bg-primary px-5 py-2 rounded-full">
                <span className="text-sm font-bold text-background">{f.role}</span>
              </div>

              {/* Studs Pattern Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-20">
                {[...Array(4)].map((_, idx) => (
                  <div key={idx} className="w-3 h-3 rounded-full bg-accent" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import pallaviImg from "@/assets/pallavi.png";
import sangeetaImg from "@/assets/sangeeta.png";

const faculty = [
  {
    name: "Dr. Pallavi Chavan",
    role: "Faculty Sponsor",
    image: pallaviImg,
    accent: "primary" as const,
  },
  {
    name: "Dr. Sangeeta Chaudhari",
    role: "Faculty Coordinator",
    image: sangeetaImg,
    accent: "accent" as const,
  },
];

export default function FacultySection() {
  return (
    <section className="mb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-[120px] opacity-60 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-background/70 border border-primary/30 rounded-full text-primary uppercase tracking-[0.25em] text-xs font-semibold mb-4">
          <GraduationCap className="w-5 h-5" />
          Faculty Mentors
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Guiding Lights of ACM-W
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          The brilliant faculty duo who ensure every TYNET cohort is future-ready, fearless, and fuelled with curiosity.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5 max-w-3xl mx-auto relative z-10">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            <div
              className={`group rounded-[22px] border-4 ${
                f.accent === "primary" ? "border-primary/40" : "border-accent/40"
              } bg-background/95 lego-shadow overflow-hidden relative`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-500">
                <div
                  className={`absolute inset-2 rounded-[18px] blur-3xl ${
                    f.accent === "primary" ? "bg-primary/25" : "bg-accent/25"
                  }`}
                />
              </div>

              <div className="grid md:grid-cols-[1fr_0.8fr]">
                <div className="relative min-h-[140px] md:min-h-[200px] overflow-hidden">
                  <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40 pointer-events-none" />

                  <div className="absolute top-6 left-6 flex gap-2">
                    {[...Array(2)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-4 h-4 rounded-full ${
                          f.accent === "primary" ? "bg-primary" : "bg-accent"
                        } opacity-80`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-2">
                    {[...Array(3)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full ${
                          f.accent === "primary" ? "bg-primary/80" : "bg-accent/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-3 md:p-5 flex flex-col justify-center text-center md:text-left relative z-10">
                  <div
                    className={`inline-flex items-center justify-center self-center md:self-start px-4 py-1 rounded-full border text-[0.55rem] font-bold tracking-[0.3em] uppercase ${
                      f.accent === "primary"
                        ? "text-primary border-primary/50 bg-primary/5"
                        : "text-accent border-accent/50 bg-accent/5"
                    }`}
                  >
                    {f.role}
                  </div>
                  <h3
                    className="text-[1.5rem] md:text-[1.9rem] font-black mt-3"
                    style={{ fontFamily: "Fredoka, Arial, sans-serif" }}
                  >
                    {f.name}
                  </h3>
                  <div className="mt-3 h-[2px] w-12 rounded-full mx-auto md:mx-0 bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

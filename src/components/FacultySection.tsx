import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Anjali Mehta",
    role: "Faculty Sponsor",
    image: "/faculty1.jpg", // Replace with actual image path
  },
  {
    name: "Prof. Rakesh Singh",
    role: "Faculty Coordinator",
    image: "/faculty2.jpg", // Replace with actual image path
  },
];

export default function FacultySection() {
  return (
    <section className="mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            Faculty <span className="text-primary">Mentors</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-white rounded-[2.5rem] border-4 border-primary/30 shadow-xl p-8 flex flex-col items-center w-full max-w-xs cartoon-frame overflow-hidden"
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-300 rounded-full border-4 border-white cartoon-burst z-0" />
              <img
                src={f.image}
                alt={f.name}
                className="relative z-10 w-32 h-32 object-cover rounded-2xl border-4 border-yellow-300 cartoon-img"
                style={{ background: '#fff' }}
              />
              <div className="mt-6 text-center z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-primary text-white font-bold text-base shadow cartoon-badge mb-2">
                  {f.role}
                </div>
                <h3 className="text-xl font-extrabold mt-2 mb-1" style={{ fontFamily: 'Fredoka, Arial, sans-serif' }}>{f.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

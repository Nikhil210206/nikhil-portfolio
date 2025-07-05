import { motion } from "framer-motion";

const achievements = [
  "🏅 Finalist – IIT Madras Embedded Challenge",
  "🔥 Top 25% – Google Build With India Hackathon",
  "💥 Top 100 – Social Winter of Code 5.0",
  "⚡ Finalist – Shaastra Clash of Codes @ IIT Madras",
  "🚀 Qualified – Quantathon 2.0 Finals (1st year team)",
  "🧠 Top 20 – MOZOHack 6.0 out of 750+ teams",
  "🎯 Participated – TechXcelerate @ BITS Pilani Hyd",
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-10 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-white shadow-md backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-all duration-300"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

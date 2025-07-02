import { motion } from "framer-motion";

const achievements = [
  "🏅 Finalist in IIT Madras Embedded Challenge",
  "🥈 Top 25% in Build with India Hackathon by Google",
  "🔥 Top 100 in Social Winter of Code 5.0",
  "🥇 Finalist - Shaastra Clash of Codes @ IIT Madras",
  "🚀 Only 1st year team to qualify Quantathon 2.0 Finals",
  "🎯 Top 20/750+ in MOZOHack 6.0",
  "🧠 Participated in TechXcelerate BITS Pilani Hyd",
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-white text-center"
      >
        Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 p-4 rounded-lg text-white"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

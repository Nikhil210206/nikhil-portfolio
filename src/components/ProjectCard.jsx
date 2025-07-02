import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 shadow-xl backdrop-blur-2xl p-6 rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:ring-1 hover:ring-white/20"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          View Project →
        </a>
      )}
    </motion.div>
  );
}

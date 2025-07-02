import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300 p-6 rounded-xl"
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

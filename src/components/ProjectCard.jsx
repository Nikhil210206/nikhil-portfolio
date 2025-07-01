import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-lg"
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

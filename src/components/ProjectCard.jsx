import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-white hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
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

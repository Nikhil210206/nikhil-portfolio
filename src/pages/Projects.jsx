import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Guard AI",
    description:
      "AI-based proctoring with audio, lip, head movement detection and real-time monitoring.",
  },
  {
    title: "QR Event Check-in",
    description:
      "Full-stack event platform with QR-based login, admin dashboard and attendance export.",
  },
  {
    title: "Fit You",
    description:
      "AI-driven fitness platform with diet & workout plans adapted to Indian preferences.",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-10 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </motion.section>
  );
}

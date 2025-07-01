import React from 'react';
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Guard AI",
      description:
        "Real-time AI-based remote proctoring system with face tracking, audio detection, and session summaries.",
    },
    {
      title: "QR Event Check-in",
      description:
        "A full-stack event check-in platform with unique QR codes, admin dashboards, and real-time status export.",
    },
    {
      title: "Fit You",
      description:
        "AI-powered fitness and diet planner tailored to your goals and food preferences (veg/non-veg).",
    },
  ];

  return (
    <section className="min-h-screen px-4 py-10 flex flex-col items-center" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-white"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

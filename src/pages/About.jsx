import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-10 flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-white"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-center text-gray-300 text-lg leading-relaxed"
      >
        I’m <span className="text-white font-semibold">Nikhil Balamurugan</span>, a passionate
        Computer Science student from SRM University, building modern applications with React,
        AI/ML, and open source. I love solving real-world problems with tech — from proctoring systems
        to QR check-in apps and fitness solutions.
        <br /><br />
        Tools I use include <span className="text-white">React, Flask, TensorFlow, Tailwind CSS, GitHub</span>, and more.
      </motion.p>
    </motion.section>
  );
}

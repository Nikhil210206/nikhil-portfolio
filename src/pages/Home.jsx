import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-10 flex flex-col items-center justify-center text-center"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        Nikhil Balamurugan
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl mt-4 text-gray-400"
      >
        Software Developer | AI Enthusiast | Open Source Contributor
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 space-x-4"
      >
        <a 
          href="https://github.com/Nikhil210206" 
          target="_blank" 
          className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/nikhilb21/" 
          target="_blank" 
          className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>
        <a 
          href="/resume.pdf" 
          download 
          className="px-6 py-2 border border-gray-400 text-gray-400 rounded hover:bg-gray-100 hover:text-black"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Home;

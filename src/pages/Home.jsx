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
      className="min-h-screen px-4 py-10 flex flex-col items-center justify-center text-center relative"
    >
      {/* SVG Background Layer 1 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-30 blur-3xl"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: "#00f", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#0ff", stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#grad1)" />
        </svg>
        {/* SVG Background Layer 2 (optional, for more effect) */}
        <svg
          className="absolute top-[10%] left-[30%] w-[80%] h-[80%] opacity-20 blur-2xl"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: "#f0f", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ff0", stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="250" fill="url(#grad2)" />
        </svg>
      </div>

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

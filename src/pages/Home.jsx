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
      {/* Psychedelic SVG Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Blue to Cyan */}
        <svg
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] opacity-30 blur-3xl"
          viewBox="0 0 800 600"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#grad1)" />
        </svg>
        {/* Magenta to Yellow */}
        <svg
          className="absolute top-[10%] left-[30%] w-[80%] h-[80%] opacity-20 blur-2xl"
          viewBox="0 0 800 600"
        >
          <defs>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0f" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="250" fill="url(#grad2)" />
        </svg>
        {/* Orange to Pink */}
        <svg
          className="absolute top-[40%] left-[60%] w-[60%] h-[60%] opacity-25 blur-2xl"
          viewBox="0 0 800 600"
        >
          <defs>
            <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff9800" stopOpacity="1" />
              <stop offset="100%" stopColor="#e040fb" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="200" fill="url(#grad3)" />
        </svg>
        {/* Green to Blue */}
        <svg
          className="absolute top-[60%] left-[10%] w-[70%] h-[70%] opacity-20 blur-2xl"
          viewBox="0 0 800 600"
        >
          <defs>
            <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ff90" stopOpacity="1" />
              <stop offset="100%" stopColor="#00bfff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="220" fill="url(#grad4)" />
        </svg>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-4 text-black dark:text-white"
      >
        Hello, I’m Nikhil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl mt-4 text-gray-800 dark:text-gray-300"
      >
        Software Developer | AI Enthusiast
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

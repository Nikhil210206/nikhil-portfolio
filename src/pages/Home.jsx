import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      {/* Background glow SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] opacity-20 blur-2xl"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#grad1)" />
        </svg>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Nikhil Balamurugan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-xl md:text-2xl mt-6 text-gray-300 max-w-2xl"
      >
        Software Engineer • AI/ML Dev • Open Source Contributor
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-10 space-x-4"
      >
        <a
          href="https://github.com/Nikhil210206"
          target="_blank"
          className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nikhilb21/"
          target="_blank"
          className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 border border-gray-400 text-gray-300 rounded-full hover:bg-gray-100 hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}

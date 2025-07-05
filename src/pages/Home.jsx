import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
      {/* Background blob SVG */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 top-1/2 w-[60vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 animate-blob"
        >
          <path
            fill="url(#gradient)"
            d="M47.6,-63.9C60.4,-54.1,68.3,-40.5,72.3,-26.7C76.4,-12.9,76.7,1.1,73.3,14.7C69.9,28.2,62.7,41.3,51.7,51.6C40.7,61.9,25.8,69.4,10.5,70.5C-4.8,71.6,-20.5,66.3,-35.4,58.2C-50.2,50.2,-64.2,39.4,-70.5,25.4C-76.7,11.4,-75.2,-5.7,-67.9,-20.3C-60.7,-35,-47.7,-47.3,-33.7,-57C-19.8,-66.8,-9.9,-73.9,3.2,-78.1C16.4,-82.4,32.8,-83.6,47.6,-63.9Z"
            transform="translate(100 100)"
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#7f00ff" />
            </linearGradient>
          </defs>
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
        Sophomore • AI/ML Dev • Open Source Contributor
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
          className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
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

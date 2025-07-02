import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['Home', 'About', 'Projects', 'Experience', 'Achievements'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.toLowerCase());
        return el ? el.offsetTop : 0;
      });

      const index = offsets.findIndex((offset, i) => {
        const next = offsets[i + 1] || Infinity;
        return scrollY >= offset - 120 && scrollY < next - 120;
      });

      if (index !== -1) setActive(sections[index]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-black/70 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-white">Nikhil B.</a>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="text-white ml-4"
          >
            🌓
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className={`transition duration-300 ${
                active === sec
                  ? 'text-blue-400 underline underline-offset-4'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {sec}
            </a>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden bg-black/90 px-6 pb-4 space-y-2 text-center">
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="text-white mb-2"
          >
            🌓
          </button>
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className="block text-gray-300 hover:text-white"
              onClick={() => setShowMobileMenu(false)}
            >
              {sec}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

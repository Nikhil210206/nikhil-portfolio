export default function Footer() {
  return (
    <footer className="bg-white/10 text-white py-6 text-center border-t border-white/10 mt-10">
      <p className="text-sm">© {new Date().getFullYear()} Nikhil Balamurugan. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/Nikhil210206" target="_blank" className="hover:underline text-gray-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/nikhilb21" target="_blank" className="hover:underline text-gray-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

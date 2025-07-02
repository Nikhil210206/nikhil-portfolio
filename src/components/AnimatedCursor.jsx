import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[999] w-6 h-6 border-2 border-white rounded-full pointer-events-none transition-transform duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2"
    />
  );
}

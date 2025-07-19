import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = e.pageX + "px";
      trail.style.top = e.pageY + "px";
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default CursorTrail;
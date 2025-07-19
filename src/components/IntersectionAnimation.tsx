import { useEffect, useRef } from "react";

interface IntersectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  delay?: number;
}

const IntersectionAnimation = ({ 
  children, 
  className = "", 
  animationClass = "animate-fade-in",
  threshold = 0.1,
  delay = 0
}: IntersectionAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClass);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, threshold, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default IntersectionAnimation;
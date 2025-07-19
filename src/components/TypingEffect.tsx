import { useState, useEffect } from "react";

const TypingEffect = ({ 
  text, 
  speed = 100, 
  delay = 500 
}: { 
  text: string; 
  speed?: number; 
  delay?: number; 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span>
      {displayText}
      {isTyping && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

export default TypingEffect;
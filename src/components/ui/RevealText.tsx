import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { 
          y: "110%", // Pushed down out of bounds
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Trigger slightly earlier for a better user experience
          },
          y: "0%",
          duration: 1.2,
          ease: "power4.out", // Very smooth easing curve similar to premium sites
          delay: delay,
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full m-0 p-0 leading-tight">
      {/* The inner element slides up seamlessly unmasking itself via overflow-hidden */}
      <div ref={innerRef} className={`block w-full ${className}`}>
        {children}
      </div>
    </div>
  );
};

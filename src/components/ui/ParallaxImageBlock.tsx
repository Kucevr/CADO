import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParallaxImageBlock = ({ 
  src, 
  alt = "Parallax section image",
  height = "h-[70vh]"
}: { 
  src: string; 
  alt?: string;
  height?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`relative w-full ${height} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="parallax-bg-img absolute top-[-20%] left-0 w-full h-[140%] object-cover grayscale-[20%]"
      />
    </section>
  );
};

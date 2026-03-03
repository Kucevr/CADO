import { RevealText } from '../ui/RevealText';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ApproachHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="px-[3%] pb-24">
        <RevealText>
          <h1 className="font-serif text-[10vw] leading-[0.9] tracking-[-0.02em] uppercase mb-12">
            Our Approach
          </h1>
        </RevealText>
        <div className="w-full md:w-3/4 lg:w-1/2 ml-auto">
          <RevealText delay={0.1}>
            <p className="text-2xl md:text-4xl font-medium leading-tight">
              We believe that good design starts with intuition, thrives on empathy, and is perfected through deep collaboration.
            </p>
          </RevealText>
        </div>
      </div>

      <div className="parallax-container w-full h-[60vh] md:h-[80vh] overflow-hidden relative mb-32">
        <img 
          src="/assets/hero/approach-hero.jpeg" 
          alt="Studio CODA Design Process" 
          className="parallax-bg absolute top-[-20%] left-0 w-full h-[140%] object-cover"
        />
      </div>
    </div>
  );
};
import { RevealText } from '../ui/RevealText';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const NewsHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-line').forEach((item) => {
        gsap.fromTo(item, 
          { scaleX: 0 },
          { scrollTrigger: { trigger: item, start: "top 85%" }, scaleX: 1, duration: 1.5, ease: "power4.out", transformOrigin: "left center" }
        )
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <RevealText>
        <h1 className="font-serif text-[10vw] leading-[0.9] tracking-[-0.02em] uppercase mb-16">
          News
        </h1>
      </RevealText>
      <div className="w-full h-[1px] bg-black/20 mb-16 reveal-line"></div>
    </div>
  );
};
import { RevealText } from '../ui/RevealText';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ApproachPhilosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.scale-reveal').forEach((item) => {
        gsap.fromTo(item, 
          { scale: 0.95, opacity: 0 },
          { scrollTrigger: { trigger: item, start: "top 85%" }, scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
        )
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#111] text-white py-32 px-[3%] mt-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <RevealText>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">"Design is not just what it looks like and feels like. Design is how it works."</h2>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl">
            We immerse ourselves into every brand we touch, translating their core values into a tangible atmosphere. By fusing striking aesthetics with seamless operations, we craft environments that don't just stand out — they endure.
          </p>
        </RevealText>
        
        <div className="w-full mt-24 grid grid-cols-2 gap-4 scale-reveal">
          <div className="aspect-square overflow-hidden bg-white/10">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Detail 1"/>
          </div>
          <div className="aspect-square overflow-hidden bg-white/10 relative top-12">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Detail 2"/>
          </div>
        </div>
      </div>
    </div>
  );
};
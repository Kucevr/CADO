import { RevealText } from '../ui/RevealText';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.reveal-block');
      
      blocks.forEach((item) => {
        gsap.fromTo(item, 
          { 
            y: 80, 
            opacity: 0,
            scale: 0.95
          },
          {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out"
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="text-center mb-20">
        <RevealText>
          <h1 className="font-serif text-[10vw] leading-[0.9] tracking-[-0.02em] uppercase">
            Studio CODA
          </h1>
        </RevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
        <div className="reveal-block overflow-hidden aspect-[3/4]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
            alt="Studio CODA team" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <RevealText>
            <h2 className="text-3xl lg:text-4xl font-serif">A collective of passionate designers, architects, and storytellers.</h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
              Based in Coral Gables, Florida, Studio CODA is an award-winning boutique cruise ship and hospitality design studio. We specialize in creating high-end, innovative spaces that leave a lasting impression.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
              Founded in 2016 by a group of industry veterans, our studio was built on the premise that design should be intimate, collaborative, and unconstrained by corporate bloat.
            </p>
          </RevealText>
        </div>
      </div>
    </div>
  );
};
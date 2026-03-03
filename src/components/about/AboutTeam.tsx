import { RevealText } from '../ui/RevealText';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  {name: "Javier Calle", role: "Founding Partner"},
  {name: "Jorge Mesa", role: "Founding Partner"},
  {name: "Greg Walton", role: "Founding Partner"},
  {name: "Yohandel Ruiz", role: "Founding Partner"},
  {name: "Carolina Ocaña", role: "Design Director"},
  {name: "Marco Gonzalez", role: "Lead Architect"},
];

export const AboutTeam = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.team-card');
      blocks.forEach((item) => {
        gsap.fromTo(item, 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: { trigger: item, start: "top 85%" },
            y: 0, opacity: 1, duration: 1, ease: "power3.out"
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="border-t border-white/20 pt-16">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
        <RevealText>
          <h3 className="text-4xl md:text-5xl font-serif">Leadership</h3>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-xl text-white/50 max-w-md mt-6 md:mt-0 text-right">
            The visionary minds guiding our creative and strategic direction forward.
          </p>
        </RevealText>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {TEAM_MEMBERS.map((person, i) => (
          <div key={i} className="group team-card">
            <div className="bg-white/5 aspect-square mb-6 overflow-hidden relative">
              <div className="w-full h-full bg-white/10 group-hover:scale-105 transition-transform duration-700 blur-[2px] group-hover:blur-0"></div>
              {/* Decorative grid overlay for the empty image box */}
              <div className="absolute inset-0 border border-white/10 m-4 opacity-50"></div>
            </div>
            <h4 className="text-2xl font-serif">{person.name}</h4>
            <div className="w-8 h-[1px] bg-white text-white my-3 transition-all duration-300 group-hover:w-16"></div>
            <p className="text-white/60 text-sm uppercase tracking-widest">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
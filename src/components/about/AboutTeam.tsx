import { RevealText } from '../ui/RevealText';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  {name: "Javier Calle", role: "Founding Partner", image: "/assets/team/team-javier.jpeg"},
  {name: "Jorge Mesa", role: "Founding Partner", image: "/assets/team/team-jorge.jpeg"},
  {name: "Greg Walton", role: "Founding Partner", image: "/assets/team/team-greg.jpeg"},
  {name: "Yohandel Ruiz", role: "Founding Partner", image: "/assets/team/team-yohandel.jpeg"},
  {name: "Carolina Ocaña", role: "Design Director", image: "/assets/team/team-carolina.jpeg"},
  {name: "Marco Gonzalez", role: "Lead Architect", image: "/assets/team/team-marco.jpeg"},
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
              <img 
                src={person.image} 
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" 
                alt={person.name} 
              />
              <div className="absolute inset-0 border border-white/10 m-4 opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity duration-700"></div>
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
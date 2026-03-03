import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "../TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ReadyToStart = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rts-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-[3%] bg-[#111] text-white flex flex-col items-center justify-center text-center">
      <h2 className="rts-fade font-serif text-[10vw] md:text-[8vw] leading-none mb-8 tracking-tight uppercase">
        Ready to talk?
      </h2>
      <p className="rts-fade text-lg md:text-2xl text-white/70 max-w-2xl mb-12" style={{ fontFamily: "var(--font-sans)" }}>
        Let's collaborate to envision and build spaces that inspire.
      </p>
      <div className="rts-fade">
        <Link to="/contact" className="group relative pr-1 py-1 flex items-center overflow-hidden text-2xl font-medium transition-colors w-fit">
          <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
            <MoveRight strokeWidth={1.5} className="w-6 h-6" />
          </div>
          <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-8">
            Get in touch
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
          </span>
          <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
            <MoveRight strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </section>
  );
};

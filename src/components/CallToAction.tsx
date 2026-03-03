import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up-cta", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-[3%] bg-white text-black overflow-hidden border-b border-gray-200">
      
      {/* Giant STUDIO CODA header */}
      <h2 className="fade-up-cta font-serif text-[12vw] md:text-[15vw] leading-[0.9] tracking-[-0.05em] uppercase text-center mb-12">
        THE ATELIER
      </h2>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 fade-up-cta items-start mt-12">
        {/* Left Image */}
        <div className="w-full md:w-[40%]">
          <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
              alt="Studio CODA team working" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-[60%] flex flex-col justify-start">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <span className="text-sm font-medium tracking-wide uppercase mt-2">Atelier</span>
            <p className="text-2xl md:text-3xl lg:text-[40px] font-medium leading-[1.2]">
              Collaborating with us means entering a shared creative process. We listen until we understand not just what you want, but why you want it—then we design the answer.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <span className="text-sm opacity-0 hidden md:block">Spacer</span>
            <p className="text-xl md:text-2xl font-medium leading-snug">
              From the earliest sketch to the final walk-through, we remain present. We obsess over sightlines, textures, and the way afternoon light falls across a room. This closeness to the work—and to the people who will inhabit it—is what transforms a project from impressive to unforgettable.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
             <span className="text-sm opacity-0 hidden md:block">Spacer</span>
             <Link to="/about-us" className="group relative pr-1 py-1 flex items-center overflow-hidden text-2xl font-medium transition-colors w-fit">
              {/* Left Arrow (hidden initially, slides in) */}
              <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
                <MoveRight strokeWidth={1.5} className="w-6 h-6" />
              </div>

              {/* Text (translates right to make room space) */}
              <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-8">
                More about the atelier
                {/* Animated underline from left to right */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
              </span>

              {/* Existing Right Arrow (starts visible, flies off to right) */}
              <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
                <MoveRight strokeWidth={1.5} className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CallToAction;
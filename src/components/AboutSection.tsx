import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 4. Typography Reveals: "does not slide up... instead, it fades in uniformly"
      // "The fade-in duration is approximately 500 milliseconds (0.5s), with no stagger delays"
      gsap.utils.toArray('.fade-in-text').forEach((elem) => {
        gsap.fromTo(elem as Element, 
          { opacity: 0 },
          {
            scrollTrigger: {
              trigger: elem as Element,
              start: "top 85%",
            },
            opacity: 1,
            duration: 0.5,
            ease: "none"
          }
        );
      });

      // 2. Scroll Triggers (Parallax): moves at about 60% scroll speed
      gsap.fromTo(".parallax-img",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".parallax-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-black py-20 lg:py-32 overflow-hidden px-[3%]">
      
      {/* Upper Giant Text Section */}
      <div className="w-full mb-32 fade-in-text">
        <h2 className="font-serif text-[6vw] leading-none lg:leading-[0.95] tracking-tight uppercase max-w-[95%]">
          Intention drives every surface, every shadow, every moment of stillness in the rooms we build.
        </h2>
        
        {/* Centered Small Image */}
        <div className="mt-20 flex justify-center w-full fade-in-text">
          <div className="parallax-container aspect-[3/4] w-[35%] md:w-[25%] lg:w-[20%] overflow-hidden relative group">
            <img
              src="/assets/about/chandelier-detail.jpeg"
              alt="Chandelier Detail"
              className="parallax-img absolute inset-0 w-full h-[130%] object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 w-full my-20" />

      {/* Lower About Two-Column Layout */}
      <div className="flex flex-col md:flex-row justify-between w-full h-full gap-10 lg:gap-20 fade-in-text">
        {/* Left Column */}
        <div className="w-full md:w-1/4">
          <p className="text-xl lg:text-2xl font-medium tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
            Luxury interiors for<br />
            bold living
          </p>
        </div>

        {/* Center/Right Text Block */}
        <div className="w-full md:w-2/4">
          <div className="text-xl lg:text-3xl font-medium leading-snug space-y-8" style={{ fontFamily: "var(--font-sans)" }}>
            <p>
              Studio CODA is a collective of architects and interior designers devoted to enriching everyday rituals. We shape environments where materials, light, and proportion speak quietly but unmistakably. Every collaboration begins with listening—understanding the textures of a client’s life before we ever draw a line.
            </p>
            <p>
              Our process is deeply tactile and intensely personal. We source rare stones, hand-finished metals, and bespoke fabrics that age with grace. From penthouse residences to resort sanctuaries, each space is an invitation to slow down and feel everything around you with renewed clarity.
            </p>
          </div>
        </div>

        {/* Far Right Approach Arrow */}
        <div className="hidden md:flex w-1/4 justify-end items-start mt-[-5px]">
          <Link to="/approach" className="group relative pr-1 py-2 flex items-center overflow-hidden text-lg font-medium transition-colors">
            {/* Left Arrow (hidden initially, slides in) */}
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>

            {/* Text (translates right to make room space) */}
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
              Approach
              {/* Animated underline from left to right */}
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
            </span>

            {/* Existing Right Arrow (starts visible, flies off to right) */}
            <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Mobile Approach Link */}
        <div className="md:hidden mt-8 w-full">
          <Link to="/approach" className="group relative pr-1 py-2 flex items-center overflow-hidden text-lg font-medium transition-colors">
            <span className="relative">
              Approach
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current"></span>
            </span>
            <div className="ml-2 flex items-center">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Initial Load: scale from 1.15 to 1.0 over ~1s
      // 2. Then fade in the giant text 'FORM FOLLOWS FEELING' cleanly (no delay)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(".reveal-overlay", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      })
      .fromTo(
        ".hero-image-scale",
        { scale: 1.15 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        "-=0.2"
      )
      // Linear basic fade in for giant text after scale completes
      .fromTo(".giant-text",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "none" },
        "-=0.2"
      )
      // Fade in the middle texts smoothly
      .fromTo(
        ".hero-text-block",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );

      // Parallax effect on the background image
      gsap.to(".hero-image-parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#111] text-white flex flex-col justify-end overflow-hidden">
      {/* Absolute overlay for initial load reveal effect */}
      <div className="reveal-overlay absolute inset-0 bg-[#F6F5F2] z-50 pointer-events-none"></div>

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-image-scale w-full h-full">
          <img
            src="/assets/hero/home-hero.jpeg"
            alt="CODA Studio — Luxury Resort Interior"
            className="hero-image-parallax w-full h-[125%] object-cover opacity-80 -top-[12.5%] relative"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div> 
      </div>

      {/* Middle Layout overlay */}
      <div className="absolute top-[40%] -translate-y-1/2 left-0 w-full px-[3%] z-20 flex justify-between items-center text-sm md:text-base pointer-events-none mt-10">
        {/* Left Column */}
        <div className="hero-text-block hidden md:block w-1/4">
          <p className="font-semibold tracking-wide text-lg" style={{ fontFamily: "var(--font-sans)" }}>
            Luxury interiors<br/>
            for bold living
          </p>
        </div>

        {/* Center Column */}
        <div className="hero-text-block w-full md:w-2/4 flex flex-col items-center text-center">
          <span className="text-[14px] tracking-[0.1em] font-medium mb-2 uppercase">Vision</span>
          <p className="text-xl md:text-2xl lg:text-[32px] mb-2 max-w-[800px] font-medium leading-[1.2] text-white">
            We design atmospheres that<br className="max-md:hidden"/> blur the line between emotion<br className="max-md:hidden"/> and architecture, crafted to endure.
          </p>
        </div>

        {/* Right Column */}
        <div className="hero-text-block hidden md:flex w-1/4 justify-end">
          <Link to="/approach" className="group relative pr-1 py-2 flex items-center overflow-hidden text-lg font-semibold transition-colors pointer-events-auto">
            {/* Left Arrow (hidden initially, slides in) */}
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0 text-white">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>

            {/* Text (translates right to make room space) */}
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7 text-white">
              Approach
              {/* Animated underline from left to right */}
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-white origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
            </span>

            {/* Existing Right Arrow (starts visible, flies off to right) */}
            <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%] text-white">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
      
      {/* Bottom Text - completely centered and taking up width */}
      <div className="relative z-10 w-full text-center pb-[2vh] overflow-hidden pointer-events-none">
        <h1 className="giant-text font-serif text-[12vw] leading-[0.9] uppercase tracking-[-0.07em] whitespace-nowrap text-white text-center w-full">
          <span className="block mb-[-1.5vw]">WHERE SPACE</span>
          <span className="block">BREATHES</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
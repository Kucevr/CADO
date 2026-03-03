import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const Preloader = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const infoRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Helper to add refs inside the array
  const pushInfoRef = (el: HTMLDivElement | null) => {
    if (el && !infoRefs.current.includes(el)) {
      infoRefs.current.push(el);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          setIsVisible(false);
        }
      });

      // 1. Initial State
      gsap.set(logoTextRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(infoRefs.current, { opacity: 0, y: 10 });
      gsap.set(counterRef.current, { opacity: 0, y: 20 });

      // 2. Animate elements in
      tl.to(logoTextRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" })
        .to(infoRefs.current, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.8")
        .to(counterRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

      // 3. Counter 0 -> 100%
      tl.to(counter, {
        val: 100,
        duration: 2.0,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            // Keep it fixed double digit format optional, but standard percent is fine
            counterRef.current.innerText = Math.round(counter.val) + '%';
          }
        }
      });

      // 4. Pre-Exit: Scale logo down slightly, fade everything out
      tl.to(logoTextRef.current, {
        scale: 0.95,
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.in"
      }, "+=0.2")
      .to(infoRefs.current, {
        opacity: 0,
        duration: 0.4,
        stagger: 0.05
      }, "<")
      .to(counterRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4
      }, "<");

      // 5. Exit: Slide the whole overlay UP
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
      });

    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 z-[10000] bg-[#141414] text-[#F6F5F2] w-full h-full pointer-events-none overflow-hidden"
    >
      {/* Corner Information Elements */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between w-full h-full pointer-events-none">
        
        {/* Top Corners */}
        <div className="flex justify-between w-full uppercase tracking-widest text-[10px] md:text-xs">
          <div ref={pushInfoRef} className="flex flex-col">
            <span className="opacity-50">Studio</span>
            <span>CODA</span>
          </div>
          <div ref={pushInfoRef} className="flex flex-col text-right">
            <span className="opacity-50">EST.</span>
            <span>2016</span>
          </div>
        </div>

        {/* Bottom Corners */}
        <div className="flex justify-between items-end w-full uppercase tracking-widest text-[10px] md:text-xs">
          <div ref={pushInfoRef} className="flex flex-col">
            <span className="opacity-50">Location</span>
            <span>Coral Gables, FL</span>
          </div>
          <div ref={pushInfoRef} className="flex flex-col text-right">
            <span className="opacity-50">Status</span>
            <span>Loading...</span>
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={logoWrapperRef} className="overflow-hidden">
          <h1 
            ref={logoTextRef} 
            className="font-serif text-[15vw] md:text-[10vw] leading-none tracking-tight"
          >
            CODA.
          </h1>
        </div>
      </div>

      {/* Bottom Center Percentage */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex justify-center items-center">
        <div 
          ref={counterRef}
          className="font-serif italic text-4xl md:text-6xl text-[#665D4F]"
        >
          0%
        </div>
      </div>

    </div>
  );
};
import { createContext, useContext, useRef, useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const TransitionContext = createContext<{
  transitionTo: (path: string) => void;
}>({ transitionTo: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const curtainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  // Set initial curtain position via GSAP (not inline style) so React re-renders don't override it
  useEffect(() => {
    if (curtainRef.current) {
      gsap.set(curtainRef.current, { yPercent: 100 });
    }
  }, []);

  const transitionTo = (path: string) => {
    // Prevent double clicking while animating or clicking the link of current page
    if (isAnimating.current || location.pathname === path) return;

    const curtain = curtainRef.current;
    const logo = logoRef.current;
    if (!curtain || !logo) return;

    isAnimating.current = true;
    
    // Stop Lenis/Browser scrolling during transition so it doesn't jump
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(curtain, { yPercent: 100 });
        document.body.style.overflow = "";
        isAnimating.current = false;
      }
    });

    // 0. Force reset to starting position: below screen
    tl.set(curtain, { yPercent: 100 });
    tl.set(logo, { opacity: 0 });

    // 1. Slide curtain UP into the screen to cover the current page
    tl.to(curtain, {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    // 2. Fade Logo in
    tl.to(logo, {
      opacity: 1,
      duration: 0.3
    }, "-=0.3");

    // 3. Middle phase: Instant Navigation while absolutely fully covered
    tl.add(() => {
      navigate(path);
      // Wait a tiny bit (1 frame) so React can unmount the heavy images BEFORE we change scroll
      requestAnimationFrame(() => {
        window.scrollTo(0, 0); 
      });
    });

    // We hold the curtain closed for a little bit to let images load / DOM update
    tl.set({}, {}, "+=0.3");

    // 4. Fade out logo early in the uncover phase
    tl.to(logo, {
      opacity: 0,
      duration: 0.3
    });

    // 5. Slide curtain UP out of the screen, revealing new page
    tl.to(curtain, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut"
    }, "-=0.1");
  };

  return (
    <TransitionContext.Provider value={{ transitionTo }}>
      {children}
      {/* Global Transition Curtain */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[99999] bg-[#141414] flex items-center justify-center pointer-events-none will-change-transform"
      >
        <div ref={logoRef} className="text-white text-[10vw] md:text-7xl font-serif font-bold tracking-tight opacity-0 will-change-opacity">
          CODA.
        </div>
      </div>
    </TransitionContext.Provider>
  );
};
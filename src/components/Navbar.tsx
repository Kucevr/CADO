import { useState, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Logo } from "./ui/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // States for scroll-hide behavior
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down past 100px and menu isn't open
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsHidden(true);
      } 
      // Show if scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    // Initial fade in for Navbar text
    gsap.fromTo(
      ".navbar-inner",
      { opacity: 0 },
      { opacity: 1, duration: 1.0, ease: "none", delay: 0.5 }
    );
  }, []);

  return (
    <header className={`navbar fixed top-0 w-full z-50 py-8 mix-blend-difference text-white pointer-events-none transition-transform duration-700 ease-[0.16,1,0.3,1] ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="navbar-inner w-full px-[3%]">
        <div className="flex justify-between items-start h-full pointer-events-none">
          
          {/* Left: Studio CODA text */}
          <div className="w-[20%] pointer-events-auto">
            <Link 
              to="/" 
              onMouseEnter={() => setHoveredLink("Studio CODA")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[22px] font-medium tracking-wide transition-opacity duration-300 relative flex items-center w-fit ${
                hoveredLink && hoveredLink !== "Studio CODA" ? "opacity-30" : "opacity-100"
              }`}
            >
              <div 
                className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                  hoveredLink === "Studio CODA" ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`} 
              />
              <span>Studio CODA</span>
            </Link>
          </div>

          {/* Left-Center: Logo */}
          <div className="w-[10%] flex justify-center pointer-events-auto">
            <Link 
              to="/" 
              onMouseEnter={() => setHoveredLink("Logo")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`transition-opacity duration-300 relative flex items-center ${
                hoveredLink && hoveredLink !== "Logo" ? "opacity-30" : "opacity-100"
              }`}
            >
              <Logo />
            </Link>
          </div>

          {/* Center: Main Links Column */}
          <div className="hidden lg:flex flex-col space-y-2 w-[20%] items-center text-[20px] font-medium tracking-wide pointer-events-auto">
            <div className="flex flex-col items-start w-[100px]">
              {["Projects", "Approach", "About Us"].map((item) => (
                <div key={item} className="w-full relative h-[30px]">
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`absolute left-0 group flex items-center transition-opacity duration-300 whitespace-nowrap ${
                      hoveredLink && hoveredLink !== item ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    <div 
                      className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                        hoveredLink === item ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`} 
                    />
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Center-Right: Secondary Links Column */}
          <div className="hidden lg:flex flex-col space-y-2 w-[20%] items-center text-[20px] font-medium tracking-wide pointer-events-auto">
            <div className="flex flex-col items-start w-[70px]">
              {["News", "Blog"].map((item) => (
                <div key={item} className="flex justify-start w-fit relative h-[30px]">
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`absolute left-0 group flex items-center transition-opacity duration-300 whitespace-nowrap ${
                      hoveredLink && hoveredLink !== item ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    <div 
                      className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                        hoveredLink === item ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`} 
                    />
                    <span>{item}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div className="w-[20%] flex justify-end pointer-events-auto">
            <Link 
              to="/contact" 
              onMouseEnter={() => setHoveredLink("Contact")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative group flex items-center text-[20px] font-medium tracking-wide transition-opacity duration-300 ${
                hoveredLink && hoveredLink !== "Contact" ? "opacity-30" : "opacity-100"
              }`}
            >
              <div 
                className={`absolute -left-4 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                  hoveredLink === "Contact" ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`} 
              />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center justify-end w-[70%] z-[60] pointer-events-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:opacity-75 focus:outline-none mix-blend-difference min-w-[44px] min-h-[44px] flex items-center justify-center">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[50] flex flex-col justify-center items-center transition-all duration-700 ease-[0.16,1,0.3,1] pointer-events-auto lg:hidden overflow-hidden ${
          isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
        style={{ backgroundColor: '#111' }}
      >
        <div className="space-y-6 flex flex-col items-center">
          {["Projects", "Approach", "About Us", "News", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif text-white uppercase tracking-widest hover:text-gray-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
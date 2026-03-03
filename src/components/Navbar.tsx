import { useState, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { Menu } from "lucide-react";
import { gsap } from "gsap";
import { Logo } from "./ui/Logo";

const NAV_LINKS = [
  { label: "Projects",  to: "/projects"  },
  { label: "Approach",  to: "/approach"  },
  { label: "About Us",  to: "/about-us"  },
  { label: "News",      to: "/news"      },
  { label: "Blog",      to: "/blog"      },
  { label: "Contact",   to: "/contact"   },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // States for scroll-hide behavior
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && y > 100 && !isOpen) setIsHidden(true);
      else if (y < lastScrollY) setIsHidden(false);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    gsap.fromTo(".navbar-inner", { opacity: 0 }, { opacity: 1, duration: 1.0, ease: "none", delay: 0.5 });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Header — z-[70] always above mobile overlay z-[60] */}
      <header
        className={`fixed top-0 w-full z-70 py-3 lg:mix-blend-difference text-white pointer-events-none transition-transform duration-700 ease-[0.16,1,0.3,1] ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="navbar-inner w-full px-[3%]">

          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-between pointer-events-none">

            <Link
              to="/"
              onMouseEnter={() => setHoveredLink("Studio")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`pointer-events-auto text-[18px] font-medium tracking-wide whitespace-nowrap transition-opacity duration-300 ${
                hoveredLink && hoveredLink !== "Studio" ? "opacity-30" : "opacity-100"
              }`}
            >
              Studio CODA
            </Link>

            <Link
              to="/"
              onMouseEnter={() => setHoveredLink("Logo")}
              onMouseLeave={() => setHoveredLink(null)}
              className={`pointer-events-auto flex items-center transition-opacity duration-300 ${
                hoveredLink && hoveredLink !== "Logo" ? "opacity-30" : "opacity-100"
              }`}
            >
              <Logo />
            </Link>

            <nav className="flex items-center gap-7 pointer-events-auto">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative flex items-center text-[18px] font-medium tracking-wide whitespace-nowrap transition-opacity duration-300 ${
                    hoveredLink && hoveredLink !== label ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <div
                    className={`absolute -left-3.5 w-1.5 h-1.5 bg-white rounded-full transition-all duration-300 ${
                      hoveredLink === label ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center justify-between pointer-events-none">
            <Link to="/" onClick={() => setIsOpen(false)} className="pointer-events-auto flex items-center">
              <Logo />
            </Link>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="pointer-events-auto text-white focus:outline-none min-w-11 min-h-11 flex items-center justify-end"
              aria-label="Toggle menu"
            >
              {isOpen
                ? <span className="text-[18px] font-medium">Close</span>
                : <Menu className="h-7 w-7" />
              }
            </button>
          </div>

        </div>
      </header>

      {/* Mobile overlay — z-[60] */}
      <div
        className={`fixed inset-0 z-60 flex flex-col justify-between px-[6vw] pt-[24vw] pb-[10vw] lg:hidden overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isOpen
            ? "translate-y-0 opacity-100 visible pointer-events-auto"
            : "-translate-y-full opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: "#000" }}
      >
        <div>
          <p className="text-white/40 mb-8 tracking-widest text-xs uppercase">Navigate</p>
          <nav className="flex flex-col items-start gap-4">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setIsOpen(false)}
                className="font-serif text-[14vw] leading-none text-white uppercase tracking-tight hover:opacity-50 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <address className="not-italic text-base text-white/60 leading-relaxed">
          Praspyekt Nyezalyezhnastsi 116<br />
          Minsk, Belarus 220114
        </address>
      </div>
    </>
  );
};

export default Navbar;
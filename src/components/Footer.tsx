import { useState } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { MoveRight } from "lucide-react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLinkClasses = (linkName: string) => {
    const isDimmed = hoveredLink && hoveredLink !== linkName;
    return `transition-opacity duration-300 w-fit block ${
      isDimmed ? "opacity-30" : "opacity-100"
    }`;
  };

  return (
    <footer className="bg-[#665D4F] text-[#F6F5F2] pt-24 pb-8 px-[3%] overflow-hidden selection:bg-[#F6F5F2] selection:text-[#665D4F]">
      <div className="flex flex-col lg:flex-row justify-between w-full h-full gap-12 lg:gap-8 mb-32">
        
        {/* Contact */}
        <div className="flex flex-col space-y-8 w-full lg:w-1/4 pr-4">
          <span className="text-base uppercase tracking-widest text-white/50">Contact</span>
          <div className="text-xl lg:text-[22px] leading-relaxed font-medium">
            <p className="mb-6">
              Studio CODA<br/>
              800 South Douglas Road,<br/>
              Suite 130, La Puerta Del Sol<br/>
              Coral Gables, FL 33134
            </p>
            <p>
              <a 
                href="mailto:info@studiocoda.com" 
                onMouseEnter={() => setHoveredLink("email")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`transition-opacity duration-300 w-fit block mb-1 ${
                  hoveredLink && hoveredLink !== "email" ? "opacity-30" : "opacity-100"
                }`}
              >
                info@studiocoda.com
              </a>
              <a 
                href="tel:7864332500" 
                onMouseEnter={() => setHoveredLink("phone")}
                onMouseLeave={() => setHoveredLink(null)}
                className={`transition-opacity duration-300 w-fit block ${
                  hoveredLink && hoveredLink !== "phone" ? "opacity-30" : "opacity-100"
                }`}
              >
                786.433.2500
              </a>
            </p>
          </div>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col space-y-8 w-full lg:w-1/4 px-4 max-lg:hidden lg:flex">
          <span className="text-base uppercase tracking-widest text-white/50">Sitemap</span>
          <div className="flex flex-col space-y-3 text-xl lg:text-[22px] font-medium">
            {['Home', 'Approach', 'Blog', 'News', 'About Us', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(" ", "-")}`} 
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
                className={getLinkClasses(item)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col space-y-8 w-full lg:w-1/4 px-4 max-lg:hidden lg:flex">
          <span className="text-base uppercase tracking-widest text-white/50">Socials</span>
          <div className="flex flex-col space-y-3 text-xl lg:text-[22px] font-medium">
            <a 
              href="https://instagram.com/studiocoda" 
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink("Instagram")}
              onMouseLeave={() => setHoveredLink(null)}
              className={getLinkClasses("Instagram")}
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com/company/studiocoda" 
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink("LinkedIn")}
              onMouseLeave={() => setHoveredLink(null)}
              className={getLinkClasses("LinkedIn")}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Updates */}
        <div className="flex flex-col space-y-8 w-full lg:w-1/4 pl-4">
          <span className="text-base uppercase tracking-widest text-white/50">Updates</span>
          <div className="flex flex-col">
            <p className="text-xl lg:text-[22px] font-medium mb-8">
              Get occasional updates on all things CODA.
            </p>
            <div className="relative w-full border-b border-white/60 pb-2 mb-4 group overflow-hidden">
              <input 
                type="email" 
                placeholder="Email here" 
                className="w-full bg-transparent outline-none placeholder:text-white/60 text-xl pr-8 focus:outline-none"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-6 overflow-hidden flex items-center justify-end transition-colors duration-300 group-hover:text-white">
                <MoveRight strokeWidth={1} className="w-5 h-5 absolute right-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]" />
                <div className="absolute right-full flex items-center h-full transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-full">
                  <div className="h-[1px] bg-current w-[20px] mr-[-4px]"></div>
                  <MoveRight strokeWidth={1} className="w-5 h-5" />
                </div>
              </button>
            </div>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              When you sign up for our newsletter you agree to our <Link to="/privacy-policy" className="underline hover:text-white">privacy policy</Link> and will receive commerical emails.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-base font-medium text-white/80 mt-16 pb-4">
        <div className="w-full md:w-1/4 pr-4 max-md:mb-4">© Studio CODA 2026</div>
        <div className="w-full md:w-1/4 px-4">
          <Link 
            to="/privacy-policy" 
            onMouseEnter={() => setHoveredLink("Privacy")}
            onMouseLeave={() => setHoveredLink(null)}
            className={getLinkClasses("Privacy")}
          >
            Privacy policy
          </Link>
        </div>
        <div className="w-full md:w-1/4 px-4 hidden md:block"></div>
        <div className="w-full md:w-1/4 pl-4 flex justify-end max-md:mt-4">
          <button 
            onClick={scrollToTop} 
            onMouseEnter={() => setHoveredLink("BackToTop")}
            onMouseLeave={() => setHoveredLink(null)}
            className={getLinkClasses("BackToTop")}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
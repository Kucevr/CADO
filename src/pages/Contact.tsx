import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveRight } from 'lucide-react';
import { SEO } from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>('.reveal-item');
      
      revealItems.forEach((item) => {
        gsap.fromTo(item, 
          { 
            y: 40, 
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#665D4F] min-h-screen text-[#F6F5F2] overflow-hidden pt-40 pb-24 selection:bg-[#F6F5F2] selection:text-[#665D4F]">
      <SEO 
        title="Contact | CODA Architecture" 
        description="Get in touch with CODA Studio for architecture and interior design inquiries." 
        url="https://coda-architecture.vercel.app/contact" 
      />
      <div className="px-[3%] flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Column: Heading and Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-serif text-[10vw] leading-[0.9] tracking-[-0.02em] uppercase reveal-item mb-16">
            Let's Talk
          </h1>
          
          <div className="flex flex-col space-y-12">
            <div className="reveal-item">
              <h3 className="text-xl uppercase tracking-widest text-[#F6F5F2]/50 mb-4">Location</h3>
              <p className="text-2xl font-serif">
                Studio CODA<br/>
                800 South Douglas Road,<br/>
                Suite 130, La Puerta Del Sol<br/>
                Coral Gables, FL 33134
              </p>
            </div>

            <div className="reveal-item">
              <h3 className="text-xl uppercase tracking-widest text-[#F6F5F2]/50 mb-4">Inquiries</h3>
              <a href="mailto:info@studiocoda.com" className="text-2xl font-serif block hover:opacity-70 transition-opacity">info@studiocoda.com</a>
              <a href="tel:7864332500" className="text-2xl font-serif block mt-2 hover:opacity-70 transition-opacity">786.433.2500</a>
            </div>
            
            <div className="reveal-item">
               <h3 className="text-xl uppercase tracking-widest text-[#F6F5F2]/50 mb-4">Social</h3>
               <div className="flex space-x-6">
                <a href="https://instagram.com/studiocoda" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70 transition-opacity">Instagram</a>
                <a href="https://linkedin.com/company/studiocoda" target="_blank" rel="noopener noreferrer" className="text-xl hover:opacity-70 transition-opacity">LinkedIn</a>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <form className="flex flex-col space-y-12 reveal-item">
            <div className="relative group w-full">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-[#F6F5F2]/30 py-4 text-2xl outline-none transition-colors duration-300 focus:border-[#F6F5F2] placeholder-[#F6F5F2]/30"
              />
            </div>
            <div className="relative group w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[#F6F5F2]/30 py-4 text-2xl outline-none transition-colors duration-300 focus:border-[#F6F5F2] placeholder-[#F6F5F2]/30"
              />
            </div>
            <div className="relative group w-full">
              <textarea 
                placeholder="Message" 
                rows={4}
                className="w-full bg-transparent border-b border-[#F6F5F2]/30 py-4 text-2xl outline-none transition-colors duration-300 focus:border-[#F6F5F2] placeholder-[#F6F5F2]/30 resize-none"
              ></textarea>
            </div>
            
            <button type="submit" className="group relative pr-1 py-1 flex items-center overflow-hidden text-2xl font-medium transition-colors w-fit pt-8">
              <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
                <MoveRight strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-8">
                Send Message
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
              </span>
              <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
                <MoveRight strokeWidth={1.5} className="w-6 h-6" />
              </div>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
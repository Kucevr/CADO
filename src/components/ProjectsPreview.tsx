import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "ember-pavilion",
    title: "Ember Pavilion",
    category: "Hotel Lobbies",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-2 aspect-[4/5]",
  },
  {
    id: "velora-residence",
    title: "Velora Residence",
    category: "Private Suites",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    id: "still-waters-retreat",
    title: "Still Waters Retreat",
    category: "Spa & Wellness",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 row-span-1 aspect-square",
  },
  {
    id: "noma-brasserie",
    title: "Noma Brasserie",
    category: "Fine Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-2 row-span-1 aspect-[2/1] mt-8",
  },
];

const ProjectsPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-heading',
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.project-heading',
            start: "top 85%",
          },
          opacity: 1,
          duration: 0.5,
          ease: "none"
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.project-card');

      cards.forEach((card) => {
        const image = card.querySelector('.parallax-image');

        gsap.fromTo(card,
          { opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );

        if (image) {
          gsap.fromTo(image,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-[3%] bg-white text-black overflow-hidden relative">
      <div className="project-heading w-full flex-col items-start relative mb-12 border-b border-gray-300 pb-2 group/header">
        <h2 className="font-serif text-[12vw] leading-[0.9] tracking-[-0.05em] uppercase">
          <span className="block mb-[-1.5vw]">FEATURED</span>
          <span className="block">PROJECTS</span>
        </h2>
        
        <div className="relative mt-4 md:absolute md:bottom-4 md:right-0 overflow-hidden">
          <Link to="/projects" className="group relative pr-1 py-1 flex items-center overflow-hidden text-lg font-medium transition-colors">
            {/* Left Arrow (hidden initially, slides in) */}
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>

            {/* Text (translates right to make room space) */}
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
              All projects
              {/* Animated underline from left to right */}
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
            </span>

            {/* Existing Right Arrow (starts visible, flies off to right) */}
            <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className={`project-card group block ${project.className}`}>
            <div className="overflow-hidden bg-gray-100 relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="parallax-image absolute inset-0 w-full h-[120%] object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-[2px] brightness-100 group-hover:brightness-75"
              />
              {/* Overlay View Text that slides up on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span className="font-serif text-3xl text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 tracking-widest">
                  View Project
                </span>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col md:flex-row md:items-baseline justify-between overflow-hidden">
              <h3 className="text-xl font-medium transition-transform duration-500 group-hover:translate-x-2">{project.title}</h3>
              <span className="text-base text-gray-500 mt-1 md:mt-0 transition-transform duration-500 group-hover:-translate-x-2" style={{ fontFamily: "var(--font-sans)" }}>{project.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
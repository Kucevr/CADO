import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TransitionLink as Link } from '../TransitionLink';
import { MoveRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_DATA = [
  {
    id: "grand-atrium",
    title: "Grand Atrium",
    class: "Public Spaces",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "allura-vista-suite",
    title: "Allura Vista Suite",
    class: "Guestrooms & Suites",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "serene-spa-and-wellness",
    title: "Serene Spa and Wellness",
    class: "Spa & Fitness",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "toscana",
    title: "Toscana",
    class: "Restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ocean-view-lounge",
    title: "Ocean View Lounge",
    class: "Public Spaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sunset-bar",
    title: "Sunset Bar",
    class: "Bars & Lounges",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
  }
];

export const ProjectsGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 70%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      {PROJECTS_DATA.map((project) => (
        <div key={project.id} className="project-item group">
          <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[4/3] mb-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
            />
          </Link>
          <div className="flex justify-between items-start">
            <div className="pr-4">
              <h3 className="text-2xl font-serif mb-1 line-clamp-1">{project.title}</h3>
              <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">{project.class}</p>
            </div>
            <Link to={`/projects/${project.id}`} className="group/btn relative py-1 flex items-center overflow-hidden text-lg font-medium transition-colors whitespace-nowrap">
              <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover/btn:translate-x-0">
                <MoveRight strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-7">
                View
                <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:scale-x-100"></span>
              </span>
              <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-[200%]">
                <MoveRight strokeWidth={1.5} className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
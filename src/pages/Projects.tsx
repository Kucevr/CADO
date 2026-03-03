import { useEffect } from 'react';
import { ProjectsHero } from '../components/projects/ProjectsHero';
import { ProjectsGrid } from '../components/projects/ProjectsGrid';
import { ProjectsStats } from '../components/projects/ProjectsStats';
import { ProjectsFocus } from '../components/projects/ProjectsFocus';
import { ProjectsClients } from '../components/projects/ProjectsClients';
import { SEO } from '../components/SEO';
import { ReadyToStart } from '../components/ui/ReadyToStart';
import { ParallaxImageBlock } from '../components/ui/ParallaxImageBlock';

const Projects = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#F6F5F2] min-h-screen text-black overflow-hidden">
      <SEO 
        title="Projects & Portfolio | CODA Studio" 
        description="Explore our curated portfolio of residential and commercial architecture projects." 
        url="https://coda-architecture.vercel.app/projects" 
      />
      {/* Hero Banner with local asset */}
      <div className="relative w-full h-[60vh] mb-32 group overflow-hidden -mx-[3%]">
        <img 
          src="/assets/hero/project-hero.jpeg" 
          alt="All Projects" 
          className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <div className="px-[3%] max-w-[1400px] mx-auto">
        <ProjectsHero />
        <ProjectsGrid />
        
        <div className="-mx-[3%] my-32">
          <ParallaxImageBlock src="/assets/hero/project-hero.jpeg" height="h-[60vh] md:h-[80vh]" />
        </div>

        <ProjectsStats />
        <ProjectsFocus />
        <ProjectsClients />
      </div>
      
      <div className="-mx-[3%] -mb-24">
        <ReadyToStart />
      </div>
    </div>
  );
};

export default Projects;
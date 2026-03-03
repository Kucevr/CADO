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
      <div className="px-[3%]">
        <ProjectsHero />
        <ProjectsGrid />
        
        <div className="-mx-[3%] my-32">
          <ParallaxImageBlock src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2600&auto=format&fit=crop" height="h-[60vh] md:h-[80vh]" />
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
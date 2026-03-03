import { useEffect } from 'react';
import { ApproachHero } from '../components/approach/ApproachHero';
import { ApproachProcess } from '../components/approach/ApproachProcess';
import { ApproachPhilosophy } from '../components/approach/ApproachPhilosophy';
import { ApproachSustainability } from '../components/approach/ApproachSustainability';
import { SEO } from '../components/SEO';
import { ReadyToStart } from '../components/ui/ReadyToStart';
import { ParallaxImageBlock } from '../components/ui/ParallaxImageBlock';

const Approach = () => {
  useEffect(() => {
  }, []);

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden pt-32">
      <SEO 
        title="Our Approach | CODA Architecture" 
        description="Our unique methodologies, creative process, and sustainability philosophy for creating timeless spaces." 
        url="https://coda-architecture.vercel.app/approach" 
      />
      <ApproachHero />
      <ApproachProcess />
      
      <ParallaxImageBlock src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2600&auto=format&fit=crop" height="h-[50vh] md:h-[70vh]" />

      <ApproachSustainability />
      <ApproachPhilosophy />
      
      <ReadyToStart />
    </div>
  );
};

export default Approach;
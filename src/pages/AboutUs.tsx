import { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutCulture } from '../components/about/AboutCulture';
import { AboutTeam } from '../components/about/AboutTeam';
import { AboutAwards } from '../components/about/AboutAwards';
import { AboutCareers } from '../components/about/AboutCareers';
import { SEO } from '../components/SEO';
import { ReadyToStart } from '../components/ui/ReadyToStart';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#111] text-white min-h-screen pt-40 pb-32">
      <SEO 
        title="About Us | CODA Studio" 
        description="Learn about our culture, team, and the prestigious awards won by CODA architectural design studio." 
        url="https://coda-architecture.vercel.app/about" 
      />
      <div className="px-[3%] max-w-7xl mx-auto">
        {/* Banner with local about image */}
        <div className="w-full aspect-[21/9] overflow-hidden mb-24 grayscale brightness-75">
          <img 
            src="/assets/hero/about-hero.jpeg" 
            alt="About CODA Studio" 
            className="w-full h-full object-cover"
          />
        </div>
        <AboutHero />
        <AboutCulture />
        <AboutTeam />
        <AboutCareers />
        <AboutAwards />
      </div>
      
      <div className="-mx-[3%] -mb-32 mt-24">
        <ReadyToStart />
      </div>
    </div>
  );
};

export default AboutUs;
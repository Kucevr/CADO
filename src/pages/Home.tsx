import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectsPreview from "../components/ProjectsPreview";
import BlogPreview from "../components/BlogPreview";
import CallToAction from "../components/CallToAction";
import { SEO } from "../components/SEO";

const Home = () => {
  return (
    <div className="w-full">
      <SEO 
        title="CODA | Architecture & Interior Design" 
        description="Award-winning architecture and interior design studio crafting timeless, minimal spaces globally." 
        url="https://coda-architecture.vercel.app/" 
      />
      <Hero />
      <AboutSection />
      <ProjectsPreview />
      <BlogPreview />
      <CallToAction />
    </div>
  );
};

export default Home;
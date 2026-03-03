import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogHeader } from '../components/blog/BlogHeader';
import { BlogFeatured } from '../components/blog/BlogFeatured';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSubscribe } from '../components/blog/BlogSubscribe';
import { BlogAuthors } from '../components/blog/BlogAuthors';
import { SEO } from '../components/SEO';
import { ReadyToStart } from '../components/ui/ReadyToStart';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.blog-card');

      cards.forEach((item) => {
        gsap.fromTo(item,
          {
            y: 50,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-black overflow-hidden pt-32 pb-24">
      <SEO 
        title="Journal | CODA Architecture" 
        description="Insights, observations, and thoughts on modern architecture and interior design from the CODA team." 
        url="https://coda-architecture.vercel.app/blog" 
      />
      <div className="px-[3%]">
        <BlogHeader />
        <BlogFeatured />
        <BlogGrid />
        <BlogAuthors />
        <BlogSubscribe />
      </div>

      <div className="-mx-[3%] -mb-24 mt-24">
        <ReadyToStart />
      </div>
    </div>
  );
};

export default Blog;
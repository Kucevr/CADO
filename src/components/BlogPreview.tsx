import { useRef, useEffect } from "react";
import { TransitionLink as Link } from "./TransitionLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: "romance-of-travel",
    date: "Feb 26, 2026",
    title: "Slow Luxury: What Heritage Railways Reveal About Modern Hospitality and Sensory Design",
    image: "https://images.unsplash.com/photo-1533604101087-43be4c1fb3a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "maximalism",
    date: "Nov 12, 2025",
    title: "The Return of Richness: Why Layered, Textured Interiors Are Defining a New Era of Design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "miami-design",
    date: "Oct 21, 2025",
    title: "Coastal Modernism: How Miami's Design Scene Became a Crossroads of Art, Food, and Architecture",
    image: "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=800&auto=format&fit=crop",
  },
];

const BlogPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-heading',
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.5, 
          ease: "none",
          scrollTrigger: {
            trigger: '.blog-heading',
            start: "top 85%",
          }
        }
      );

      gsap.utils.toArray<HTMLElement>('.blog-card').forEach((card) => {
        const image = card.querySelector('.parallax-image');

        gsap.fromTo(card,
          { opacity: 0 },
          {
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
    <section ref={containerRef} className="py-24 px-[3%] bg-white text-black overflow-hidden mt-20">
      
      <h2 className="blog-heading font-serif text-[6.5vw] leading-[1.0] lg:leading-[0.9] tracking-tight uppercase mb-32 max-w-[98%]">
        Our journal is a living archive where ideas about craft, culture, and the future of spatial design take shape.
      </h2>

      <div className="blog-heading w-full flex justify-between items-end border-b border-gray-300 pb-4 mb-12">
        <span className="text-lg font-medium">Latest journal entries</span>
        <Link to="/blog" className="group relative pr-1 py-1 flex items-center overflow-hidden text-lg font-medium transition-colors">
          {/* Left Arrow (hidden initially, slides in) */}
          <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
            <MoveRight strokeWidth={1.5} className="w-5 h-5" />
          </div>

          {/* Text (translates right to make room space) */}
          <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
            See all journal entries
            {/* Animated underline from left to right */}
            <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
          </span>

          {/* Existing Right Arrow (starts visible, flies off to right) */}
          <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
            <MoveRight strokeWidth={1.5} className="w-5 h-5" />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="blog-card group block">
            <div className="overflow-hidden bg-gray-100 aspect-[4/5] relative w-full mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="parallax-image absolute inset-0 w-full h-[120%] object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:blur-[2px] brightness-100 group-hover:brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span className="font-serif text-3xl text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 tracking-widest">
                  Read Article
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-gray-400 text-sm font-medium">{post.date}</span>
              <h3 className="text-2xl font-medium leading-snug group-hover:text-gray-500 transition-colors duration-300">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default BlogPreview;
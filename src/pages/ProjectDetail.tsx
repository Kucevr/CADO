import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TransitionLink as Link } from '../components/TransitionLink';
import { MoveRight } from 'lucide-react';
import { SEO } from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const projectData: Record<string, {
  title: string;
  category: string;
  year: string;
  location: string;
  heroImage: string;
  description: string;
  challenge: string;
  solution: string;
  galleryImages: string[];
}> = {
  "ember-pavilion": {
    title: "Ember Pavilion",
    category: "Hotel Lobbies",
    year: "2025",
    location: "Coral Gables, FL",
    heroImage: "/assets/projects/project-1-main.jpeg",
    description: "A grand hotel entrance reimagined as a living room — warm tones of burnt sienna meet raw travertine columns, creating a threshold between the everyday and the extraordinary.",
    challenge: "The existing lobby felt cavernous and impersonal, more transit hall than welcoming space. Guests would pass through without pausing, missing the opportunity for connection that defines great hospitality.",
    solution: "We introduced intimate seating clusters anchored by a sculptural fireplace, lowered ceiling planes in key zones, and a palette of smoked oak and hand-rubbed plaster that absorbs sound and invites lingering. Evening light is filtered through perforated bronze screens, casting patterns that shift with the season.",
    galleryImages: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d7dc0cc2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "velora-residence": {
    title: "Velora Residence",
    category: "Private Suites",
    year: "2024",
    location: "Miami Beach, FL",
    heroImage: "/assets/projects/project-2-main.jpeg",
    description: "A private penthouse suite where ocean views and minimal furnishings create a sanctuary of contemplation. Every element is calibrated to the rhythm of tides and the arc of sunlight.",
    challenge: "The client wanted a space that felt both restful and intellectually stimulating — a home for someone who collects art and craves silence in equal measure.",
    solution: "We designed floor-to-ceiling pivot windows that frame the Atlantic like living canvases. Furniture is sparse and sculptural: a single Noguchi lamp, a custom linen sofa, blackened steel shelving. The material palette — honed limestone, bleached ash, raw silk — whispers rather than shouts.",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "still-waters-retreat": {
    title: "Still Waters Retreat",
    category: "Spa & Wellness",
    year: "2024",
    location: "Coconut Grove, FL",
    heroImage: "/assets/projects/project-3-main.jpeg",
    description: "A wellness sanctuary nested in tropical canopy, designed to dissolve the boundary between built and natural environments. Water, stone, and silence are the primary materials.",
    challenge: "Transforming a dated fitness center into a world-class spa without disrupting the resort's operations or its connection to the surrounding banyan grove.",
    solution: "We threaded reflecting pools through the floor plan, their still surfaces doubling as light sources. Treatment rooms are wrapped in rammed earth walls that breathe and regulate humidity naturally. The scent of vetiver and the sound of slow-dripping water replace any need for artificial ambiance.",
    galleryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "noma-brasserie": {
    title: "Noma Brasserie",
    category: "Fine Dining",
    year: "2025",
    location: "Design District, Miami",
    heroImage: "/assets/projects/project-4-main.jpeg",
    description: "A 60-seat brasserie where Nordic restraint meets subtropical abundance. The menu changes weekly; the architecture is designed to make every iteration feel like an opening night.",
    challenge: "The chef wanted a room that could shift from an intimate Tuesday dinner to a vibrant Saturday celebration without rearranging a single chair.",
    solution: "We designed a modular lighting system — hand-blown glass pendants on motorized tracks — that completely reshapes the room's mood at the touch of a dial. Banquettes in cognac leather curve through the space like river bends. The open kitchen is framed by an arch of stacked terracotta, turning the cooking line into live theater.",
    galleryImages: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "grand-atrium": {
    title: "Grand Atrium",
    category: "Public Spaces",
    year: "2023",
    location: "Brickell, Miami",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2600&auto=format&fit=crop",
    description: "A soaring double-height atrium that transforms a commercial tower's ground floor into a civic gathering space — part gallery, part garden, entirely unexpected.",
    challenge: "The developer needed a lobby that would attract premium tenants while also welcoming the public — a space that felt both exclusive and generous.",
    solution: "We introduced a grid of slender steel columns wrapped in living moss, a central water table of black granite, and overhead skylights that cast shifting geometry across polished concrete floors. The result is a space that changes character every hour of the day.",
    galleryImages: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d7dc0cc2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "allura-vista-suite": {
    title: "Allura Vista Suite",
    category: "Guestrooms & Suites",
    year: "2024",
    location: "Fisher Island, FL",
    heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2600&auto=format&fit=crop",
    description: "A 2,800 sq ft corner suite where every surface is calibrated to frame the horizon. Warm walnut millwork and hand-troweled lime plaster create a cocoon within the sky.",
    challenge: "Maximizing the panoramic water views across two exposures while maintaining warmth and intimacy in a vast open floor plan.",
    solution: "We designed a curved walnut partition that flows from the entry through the living space, guiding sight lines toward the water. Bedroom walls are upholstered in raw Belgian linen, and a freestanding stone bathtub sits directly before a floor-to-ceiling window overlooking the bay.",
    galleryImages: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "serene-spa-and-wellness": {
    title: "Serene Spa and Wellness",
    category: "Spa & Fitness",
    year: "2023",
    location: "Key Biscayne, FL",
    heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2600&auto=format&fit=crop",
    description: "A 12,000 sq ft wellness center where the boundary between indoor and outdoor dissolves entirely. Tropical landscaping penetrates the architecture through open courts and reflecting pools.",
    challenge: "Creating a cohesive spa journey — from arrival through treatment to relaxation — within a fragmented existing footprint spread across three separate structures.",
    solution: "We connected the buildings with covered walkways lined in slatted teak, threading gardens and water features between each pavilion. Treatment rooms open onto private walled gardens. The hydrotherapy circuit culminates in an outdoor plunge pool shaded by a canopy of mature palms.",
    galleryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "toscana": {
    title: "Toscana",
    category: "Restaurants",
    year: "2024",
    location: "Surfside, FL",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2600&auto=format&fit=crop",
    description: "A 90-seat Italian restaurant that channels the warmth of a Tuscan farmhouse kitchen — stone arches, open hearth, and a hand-painted ceiling — within a contemporary coastal shell.",
    challenge: "The client wanted an authentic rustic atmosphere without resorting to cliché or pastiche. The space needed to feel genuinely Italian, not themed.",
    solution: "We sourced reclaimed terracotta from a demolished villa in Lucca for the flooring, commissioned a local muralist to paint the barrel-vaulted ceiling, and designed a central wood-burning oven clad in hand-cut limestone. Tables are solid chestnut, unfinished, meant to develop character over years of use.",
    galleryImages: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "ocean-view-lounge": {
    title: "Ocean View Lounge",
    category: "Public Spaces",
    year: "2025",
    location: "Bal Harbour, FL",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop",
    description: "A resort lounge cantilevered over the dune line, where the horizon becomes the primary design element. Sheer linen drapery and bleached oak blur the threshold between shelter and sky.",
    challenge: "Designing a lounge that feels expansive and connected to the ocean while providing genuine comfort and shade in South Florida's intense climate.",
    solution: "Deep overhangs and motorized screens filter light without blocking views. A raised platform at the ocean side creates a hierarchy of intimacy — casual seating near the bar, contemplative perches at the edge. Materials are salt-resistant: marine-grade stainless steel, Accoya wood, solution-dyed fabrics.",
    galleryImages: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d7dc0cc2d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    ]
  },
  "sunset-bar": {
    title: "Sunset Bar",
    category: "Bars & Lounges",
    year: "2024",
    location: "South Beach, Miami",
    heroImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2600&auto=format&fit=crop",
    description: "A rooftop cocktail bar designed around the daily spectacle of sunset — every seat, every surface, every fixture is oriented toward the western horizon.",
    challenge: "Creating a nightlife destination that transcends the typical rooftop bar formula while managing the practical challenges of wind, rain, and extreme UV exposure.",
    solution: "We designed retractable glass panels that transform the space from open-air to enclosed in under ninety seconds. The bar itself is a monolithic block of backlit onyx that glows amber at dusk. Seating is low and lounge-like, upholstered in weather-resistant bouclé, arranged in concentric arcs facing west.",
    galleryImages: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=1200&auto=format&fit=crop",
    ]
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const project = id ? projectData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      gsap.from('.proj-fade', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to('.proj-hero-img', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: '.proj-hero',
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.utils.toArray<HTMLElement>('.proj-gallery-img').forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black pt-40">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Project not found</h1>
          <Link to="/projects" className="underline text-lg">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      <SEO 
        title={`${project.title} | CODA Studio`}
        description={project.description}
        url={`https://coda-architecture.vercel.app/project/${id}`}
      />

      {/* Hero */}
      <div className="proj-hero relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="proj-hero-img absolute top-[-10%] left-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="px-[3%] max-w-6xl mx-auto py-20 md:py-32">
        
        {/* Title Block */}
        <div className="proj-fade mb-16">
          <span className="text-sm uppercase tracking-widest text-gray-500 block mb-4">{project.category}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">{project.title}</h1>
          <div className="flex gap-12 text-sm uppercase tracking-widest text-gray-500">
            <span>{project.year}</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="proj-fade mb-24">
          <p className="text-2xl md:text-3xl font-medium leading-snug max-w-4xl" style={{ fontFamily: "var(--font-sans)" }}>
            {project.description}
          </p>
        </div>

        {/* Challenge / Solution */}
        <div className="proj-fade grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">The Challenge</h3>
            <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Our Approach</h3>
            <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{project.solution}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {project.galleryImages.map((img, i) => (
            <div key={i} className={`proj-gallery-img overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}`}>
              <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="flex justify-center">
          <Link to="/projects" className="group relative pr-1 py-1 flex items-center overflow-hidden text-xl font-medium transition-colors">
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
              All projects
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
            </span>
            <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

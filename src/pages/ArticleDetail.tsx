import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TransitionLink as Link } from '../components/TransitionLink';
import { MoveRight } from 'lucide-react';
import { SEO } from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const articleData: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  intro: string;
  sections: { heading: string; body: string }[];
  pullQuote: string;
}> = {
  "romance-of-travel": {
    title: "Slow Luxury: What Heritage Railways Reveal About Modern Hospitality and Sensory Design",
    date: "February 26, 2026",
    readTime: "8 min read",
    category: "Hospitality",
    heroImage: "https://images.unsplash.com/photo-1533604101087-43be4c1fb3a7?q=80&w=2600&auto=format&fit=crop",
    intro: "In an age of instant everything, the most luxurious thing a space can offer is time. Heritage railways — from the Venice Simplon-Orient-Express to Japan's Shiki-shima — have long understood this. Their interiors are designed not for efficiency but for lingering, for watching landscapes pass at a pace that lets the eye rest and the mind wander.",
    sections: [
      {
        heading: "The Pace of Perception",
        body: "When you board a heritage train, the first thing that slows is your breathing. Compartments are lined in marquetry and polished brass; the scent of aged leather mingles with lavender pressed into the linens. Every detail asks you to pay attention. This is the opposite of the airport lounge, where design aims to make waiting painless. On a great train, waiting is the point."
      },
      {
        heading: "Lessons for the Hotel Industry",
        body: "The hospitality world is finally catching on. Properties like Aman Tokyo and Six Senses Ibiza have begun designing their guest experiences around the rhythm of the day rather than the demands of a check-in schedule. Arrivals are choreographed. Corridors are deliberately long, lined with art, lit by daylight filtered through linen scrims. The journey from lobby to room becomes a transition — a decompression chamber between public life and private rest."
      },
      {
        heading: "Designing for All the Senses",
        body: "The best railway interiors engage every sense simultaneously. The click of a lacquered cabinet latch, the weight of a silver teaspoon, the way afternoon light refracts through etched glass — these are not incidental. They are designed. And they remind us that true luxury is not about the cost of materials but the care with which they are combined."
      }
    ],
    pullQuote: "The most luxurious thing a space can offer is time — time to look, to listen, to feel the weight of a well-made thing beneath your hand."
  },
  "maximalism": {
    title: "The Return of Richness: Why Layered, Textured Interiors Are Defining a New Era of Design",
    date: "November 12, 2025",
    readTime: "6 min read",
    category: "Interior Design",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop",
    intro: "For two decades, the design world worshipped at the altar of less. White walls, hidden storage, invisible hardware — the goal was to erase any visual evidence that a human being actually lived in the space. That era is ending. A new generation of designers and clients is embracing richness: pattern on pattern, material against material, color used not as accent but as atmosphere.",
    sections: [
      {
        heading: "Beyond Minimalism's Promise",
        body: "Minimalism promised clarity. In practice, it often delivered sterility. The all-white kitchen, the floating vanity, the monochrome bedroom — these spaces photographed beautifully but lived poorly. They demanded constant maintenance and left no room for the beautiful mess of daily life. The pendulum is swinging back, not toward clutter, but toward depth."
      },
      {
        heading: "The New Layering",
        body: "What distinguishes the current movement from the maximalism of the 1980s is sophistication of palette and restraint of scale. Today's layered interiors might combine hand-glazed zellige tile, oiled walnut paneling, and a vintage Moroccan rug — but the color story is tight, usually three tones of the same family. The effect is rich without being chaotic, warm without being oppressive."
      },
      {
        heading: "Hospitality Leads the Way",
        body: "Hotels have been early adopters. Properties like The Ned in London and the Proper Hotels chain in the US have built their entire brand identity around collected, layered interiors that feel as if they evolved over decades rather than emerging from a single design package. Guests respond to spaces that feel lived-in because they feel safe — like someone has already done the work of making this place a home."
      }
    ],
    pullQuote: "Richness is not excess. It is the careful accumulation of things that have been chosen slowly, placed deliberately, and allowed to age with grace."
  },
  "miami-design": {
    title: "Coastal Modernism: How Miami's Design Scene Became a Crossroads of Art, Food, and Architecture",
    date: "October 21, 2025",
    readTime: "7 min read",
    category: "Culture",
    heroImage: "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=2600&auto=format&fit=crop",
    intro: "Twenty years ago, Miami's design identity was defined by pastel Art Deco and nightclub interiors. Today, the city is home to some of the most ambitious architectural projects in the Western Hemisphere — and its influence is reshaping how the world thinks about tropical modernism, cultural programming, and the intersection of commerce and creativity.",
    sections: [
      {
        heading: "The Design District Effect",
        body: "The transformation of the Design District from a warehouse neighborhood into a curated outdoor museum of architecture has been nothing short of extraordinary. Buildings by Sou Fujimoto, BIG, and Aranda\\Lasch sit alongside flagship stores that double as galleries. The message is clear: in Miami, shopping is a cultural act, and architecture is the medium."
      },
      {
        heading: "Food as Design Language",
        body: "Miami's restaurant scene has become inseparable from its design culture. Venues like Estimar and Boia De are as much about spatial experience as they are about cuisine. Chefs collaborate with architects from the outset, treating the dining room as an extension of the plate — a space where light, sound, proportion, and texture support the act of tasting."
      },
      {
        heading: "A New Tropical Vernacular",
        body: "Perhaps Miami's greatest contribution to global design is the emergence of a new tropical modernism — one that takes the lessons of mid-century Brazilian architecture (open plans, deep overhangs, integration with landscape) and reinterprets them through a contemporary lens of sustainability and technology. Developers are commissioning buildings that breathe, that shade themselves, that harvest rainwater and channel sea breezes through corridors designed as wind tunnels."
      }
    ],
    pullQuote: "Miami has stopped imitating other cities and started inventing its own language — one spoken in concrete, coral stone, and Caribbean light."
  },
  "sustainable-materials": {
    title: "Sourcing Sustainable Materials Without Compromising Luxury",
    date: "September 5, 2025",
    readTime: "5 min read",
    category: "Materials",
    heroImage: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2600&auto=format&fit=crop",
    intro: "The luxury design industry faces a paradox: clients demand rare, exquisite materials — marble quarried from specific veins, hardwoods from old-growth forests, metals mined in limited quantities — while the planet demands restraint. The question is no longer whether to source sustainably, but how to do so without losing the sensory richness that defines high-end interiors.",
    sections: [
      {
        heading: "Reclaimed Is the New Rare",
        body: "The most interesting materials in our current projects are not new. They are reclaimed oak beams from 19th-century barns in Vermont, hand-painted tiles salvaged from demolished Portuguese farmhouses, and antique brass hardware sourced from European estate sales. These materials carry stories that no newly manufactured product can replicate — and their imperfections are precisely what makes them feel alive."
      },
      {
        heading: "Innovation in Natural Finishes",
        body: "New technologies are expanding the palette of sustainable luxury. Bio-based resins can now replicate the depth and luminosity of exotic stones. Mycelium composites offer acoustic and thermal properties that rival traditional solutions. Hempcrete, once considered an alternative material, is now specified by leading architects for its beauty as much as its performance."
      },
      {
        heading: "The Client Conversation",
        body: "Our role has shifted from specifying materials to educating clients about the provenance of every surface they will touch. When a client understands that the limestone in their powder room was quarried by a family-owned operation that has restored the land behind them, the material becomes more than beautiful — it becomes meaningful. That meaning, we believe, is the truest form of luxury."
      }
    ],
    pullQuote: "Sustainability is not a constraint on beauty. It is a new dimension of it — one that requires more imagination, not less."
  },
  "hotel-lobbies": {
    title: "The Evolution of the Hotel Lobby: From Transit Hub to Social Epicenter",
    date: "March 10, 2026",
    readTime: "9 min read",
    category: "Hospitality",
    heroImage: "https://images.unsplash.com/photo-1542314831-c6a4d1421008?q=80&w=2600&auto=format&fit=crop",
    intro: "Once viewed simply as a place to hand over a credit card and get a room key, the hotel lobby has undergone a dramatic transformation. Leading brands are rethinking these grand entrances as all-day, multi-purpose social clubs — spaces where guests, locals, and remote workers converge around the shared desire for beautiful, functional environments.",
    sections: [
      {
        heading: "The Death of the Front Desk",
        body: "The physical front desk is disappearing. Properties like 1 Hotel South Beach and Ace Hotel New York have replaced the traditional counter with roaming staff equipped with tablets, allowing the lobby to shed its transactional character. In its place: communal tables, coffee bars, lending libraries, and work-friendly nooks that blur the line between hotel and co-working space."
      },
      {
        heading: "Programming the Ground Floor",
        body: "The most successful new lobbies are designed not as static spaces but as platforms for programming. Morning yoga sessions, afternoon wine tastings, evening DJ sets — the best hotel operators treat their lobbies like stages, with architecture that can adapt to each act. Flexible furniture systems, modular lighting, and acoustic treatments that allow multiple activities to coexist are now standard specifications in our hospitality projects."
      },
      {
        heading: "The Residential Turn",
        body: "Perhaps the most significant shift is the move toward residential warmth. Guests no longer want to feel like they are in a hotel — they want to feel like they are in someone's extraordinarily well-appointed home. This means libraries instead of business centers, pantries instead of mini-bars, fireplaces instead of flat-screen TVs. The materials are honest — leather that patinas, wood that scratches, stone that stains — because perfection, it turns out, is not welcoming."
      }
    ],
    pullQuote: "The best hotel lobby is one where you forget you are in a hotel — where the space itself becomes the reason to stay."
  },
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const article = id ? articleData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!article) return;
    const ctx = gsap.context(() => {
      gsap.from('.art-fade', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.to('.art-hero-img', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: '.art-hero',
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.utils.toArray<HTMLElement>('.art-section').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black pt-40">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Article not found</h1>
          <Link to="/blog" className="underline text-lg">Back to journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      <SEO 
        title={`${article.title} | CODA Journal`}
        description={article.intro.slice(0, 155) + '...'}
        url={`https://coda-architecture.vercel.app/blog/${id}`}
      />

      {/* Hero */}
      <div className="art-hero relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src={article.heroImage} 
          alt={article.title}
          className="art-hero-img absolute top-[-10%] left-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="px-[3%] max-w-3xl mx-auto py-20 md:py-32">
        
        {/* Meta */}
        <div className="art-fade mb-12">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm uppercase tracking-widest text-gray-500 mb-6">
            <span>{article.category}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">{article.title}</h1>
        </div>

        {/* Intro */}
        <div className="art-fade mb-16">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
            {article.intro}
          </p>
        </div>

        {/* Sections */}
        {article.sections.map((section, i) => (
          <div key={i} className="art-section mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">{section.heading}</h2>
            <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
              {section.body}
            </p>
          </div>
        ))}

        {/* Pull Quote */}
        <div className="art-section border-l-2 border-black pl-8 my-20">
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug italic">
            {article.pullQuote}
          </blockquote>
        </div>

        {/* Back Link */}
        <div className="flex justify-center mt-20">
          <Link to="/blog" className="group relative pr-1 py-1 flex items-center overflow-hidden text-xl font-medium transition-colors">
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
              All articles
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

export default ArticleDetail;

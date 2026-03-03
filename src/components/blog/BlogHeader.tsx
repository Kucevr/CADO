import { RevealText } from '../ui/RevealText';

const categories = ["All", "Process", "Design Trends", "Industry News", "Studio Culture"];

export const BlogHeader = () => {
  return (
    <>
      <RevealText>
        <h1 className="font-serif text-[10vw] leading-[0.9] tracking-[-0.02em] uppercase mb-12">
          Journal
        </h1>
      </RevealText>
      <RevealText delay={0.1}>
        <p className="text-2xl md:text-3xl max-w-4xl mb-24 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
          Our thoughts, perspectives, and deep-dives into the ever-evolving world of hospitality, architecture, and interior design.
        </p>
      </RevealText>

      {/* Categories / Tags */}
      <div className="flex flex-wrap gap-4 mb-16 border-b border-black/10 pb-8">
        {categories.map((cat, i) => (
          <button key={i} className={`px-5 py-2.5 min-h-[44px] rounded-full border border-black transition-colors ${i === 0 ? "bg-black text-white" : "bg-transparent text-black hover:bg-black/5"}`}>
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};
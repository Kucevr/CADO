import { RevealText } from '../ui/RevealText';

export const ProjectsHero = () => {
  return (
    <div className="flex flex-col mb-24">
      <RevealText>
        <h1 className="font-serif text-[12vw] leading-[0.8] tracking-[-0.02em] uppercase">
          Projects
        </h1>
      </RevealText>
      <RevealText delay={0.1}>
        <p className="text-2xl md:text-3xl mt-12 max-w-3xl font-medium" style={{ fontFamily: "var(--font-sans)" }}>
          Explore our portfolio of hospitality design, where every detail is considered to craft an unforgettable guest experience.
        </p>
      </RevealText>
    </div>
  );
};
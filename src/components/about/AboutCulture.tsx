import { RevealText } from '../ui/RevealText';

export const AboutCulture = () => {
  return (
    <div className="my-40 border-t border-white/20 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
      <RevealText>
        <h3 className="text-4xl lg:text-5xl font-serif pr-8">A culture of curiosity and collaboration.</h3>
      </RevealText>
      <div className="space-y-12">
        <RevealText delay={0.1}>
          <p className="text-xl text-white/70 leading-relaxed">
            We don’t just design spaces; we curate experiences. Our studio culture is rooted in a shared curiosity about the world. We travel extensively, drawing inspiration from different cultures, art forms, and architectural histories. This constant influx of new ideas keeps our work fresh and our minds open.
          </p>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="text-xl text-white/70 leading-relaxed">
            Collaboration is at the heart of everything we do. We believe that the best ideas emerge when diverse perspectives collide. Our open-plan studio allows ideas to flow freely, fostering an environment where every voice is heard and every contribution is valued.
          </p>
        </RevealText>
        
        {/* Expanded detail */}
        <div className="pt-8 flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-white/10">
          <div>
            <span className="block text-4xl font-serif text-white mb-2">2016</span>
            <span className="text-sm uppercase tracking-widest text-white/50">Year Founded</span>
          </div>
          <div>
            <span className="block text-4xl font-serif text-white mb-2">4</span>
            <span className="text-sm uppercase tracking-widest text-white/50">Founding Partners</span>
          </div>
          <div>
            <span className="block text-4xl font-serif text-white mb-2">35+</span>
            <span className="text-sm uppercase tracking-widest text-white/50">Global Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
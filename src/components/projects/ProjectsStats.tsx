import { RevealText } from '../ui/RevealText';

export const ProjectsStats = () => {
  return (
    <div className="mt-32 mb-16 pt-24 border-t border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
        <div className="py-8 md:py-0">
          <RevealText>
            <div className="text-6xl md:text-8xl font-serif mb-4">120+</div>
          </RevealText>
          <RevealText delay={0.1}>
            <div className="text-sm uppercase tracking-widest text-gray-500">Completed Projects</div>
          </RevealText>
        </div>
        <div className="py-8 md:py-0">
          <RevealText>
            <div className="text-6xl md:text-8xl font-serif mb-4">45</div>
          </RevealText>
          <RevealText delay={0.1}>
            <div className="text-sm uppercase tracking-widest text-gray-500">Ships Designed</div>
          </RevealText>
        </div>
        <div className="py-8 md:py-0">
          <RevealText>
            <div className="text-6xl md:text-8xl font-serif mb-4">8</div>
          </RevealText>
          <RevealText delay={0.1}>
            <div className="text-sm uppercase tracking-widest text-gray-500">Countries Reached</div>
          </RevealText>
        </div>
      </div>
    </div>
  );
};
import { RevealText } from '../ui/RevealText';

export const ApproachProcess = () => {
  return (
    <div className="px-[3%] pb-32">
      <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="w-full md:w-1/3">
          <RevealText>
            <h2 className="text-xl md:text-2xl uppercase tracking-widest font-semibold">The Process</h2>
          </RevealText>
        </div>
        <div className="w-full md:w-2/3 space-y-16">
          <div className="border-t border-black/20 pt-8">
            <RevealText>
              <h3 className="text-3xl lg:text-5xl font-serif mb-6">1. Empathize</h3>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                It begins with an understanding of not just the physical space, but the emotional landscape. Who is staying here? What do they need to feel? Calm, excited, inspired, grounded? We ask the questions that get to the root of the human experience.
              </p>
            </RevealText>
          </div>
          
          <div className="border-t border-black/20 pt-8">
            <RevealText>
              <h3 className="text-3xl lg:text-5xl font-serif mb-6">2. Ideate</h3>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                Our ideas are never restricted by conventional boundaries. We draw inspiration from art, fashion, history, and nature. Sketching, modeling, and debating until a cohesive, unique narrative emerges that perfectly fits the client's vision.
              </p>
            </RevealText>
          </div>

          <div className="border-t border-black/20 pt-8">
            <RevealText>
              <h3 className="text-3xl lg:text-5xl font-serif mb-6">3. Execute</h3>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                A brilliant concept is only as good as its execution. We obsess over the details – the texture of a fabric, the curve of a chair arm, the temper of the lighting. We work closely with artisans and craftsmen to ensure everything is perfect.
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </div>
  );
};
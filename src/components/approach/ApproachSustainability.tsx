import { RevealText } from '../ui/RevealText';

export const ApproachSustainability = () => {
  return (
    <div className="px-[3%] py-32 bg-[#F6F5F2]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Designing with conscience. Building for tomorrow.</h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              True luxury is sustainable. In every project, we strive to make choices that respect our environment without compromising the guest experience. From sourcing local materials to optimizing energy efficiency in our lighting plans, our approach ensures that the spaces we create endure, both structurally and ecologically.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
              Read Our Core Values
            </button>
          </RevealText>
        </div>
        <div className="lg:w-1/2 scale-reveal overflow-hidden aspect-[4/3]">
          <img 
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop" 
            alt="Sustainable materials" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 origin-center hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
import { RevealText } from '../ui/RevealText';

export const AboutAwards = () => {
  return (
    <div className="mt-40 text-center flex flex-col items-center border-t border-white/20 pt-32 pb-16">
      <RevealText>
        <h3 className="text-2xl uppercase tracking-widest text-[#B5A58D] font-medium mb-12">Industry Recognition</h3>
      </RevealText>
      
      <div className="flex flex-wrap justify-center gap-12 sm:gap-24 items-center">
        {/* Placeholder images for award badges - simply using text with sophisticated typography */}
        <div className="flex flex-col items-center group opacity-70 hover:opacity-100 transition-opacity">
           <span className="font-serif italic text-4xl mb-4 text-[#B5A58D]">Gold Key</span>
           <span className="text-sm tracking-widest uppercase text-white/50">Awards for Excellence</span>
        </div>
        <div className="flex flex-col items-center group opacity-70 hover:opacity-100 transition-opacity">
           <span className="font-serif italic text-4xl mb-4 text-[#B5A58D]">Hospitality Design</span>
           <span className="text-sm tracking-widest uppercase text-white/50">HD Awards 2024</span>
        </div>
        <div className="flex flex-col items-center group opacity-70 hover:opacity-100 transition-opacity">
           <span className="font-serif italic text-4xl mb-4 text-[#B5A58D]">Boutique Design</span>
           <span className="text-sm tracking-widest uppercase text-white/50">NY Best Space</span>
        </div>
      </div>

      <div className="mt-40">
        <RevealText>
          <h3 className="text-[12vw] md:text-[8vw] font-serif leading-none tracking-tighter opacity-10 uppercase">
            Award Winning
          </h3>
        </RevealText>
      </div>
    </div>
  );
};
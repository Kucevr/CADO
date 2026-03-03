import { RevealText } from '../ui/RevealText';

export const ProjectsClients = () => {
  return (
    <div className="mt-40 border-t border-black/10 pt-24 pb-16">
      <div className="text-center mb-20">
        <RevealText>
          <h2 className="text-xl uppercase tracking-widest text-gray-500 font-medium">Selected Clients</h2>
        </RevealText>
      </div>
      
      {/* Logos grid - text fallbacks for minimal high-end look */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-60">
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer">
          <span className="font-serif text-xl md:text-3xl font-light">Oceania Cruises</span>
        </div>
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer">
          <span className="font-sans text-lg md:text-2xl tracking-widest uppercase font-bold">Carnival</span>
        </div>
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer">
          <span className="font-serif text-xl md:text-3xl italic">Regent</span>
        </div>
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer">
          <span className="font-sans text-lg md:text-2xl tracking-widest font-black">NCL</span>
        </div>
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer md:col-start-2">
          <span className="font-serif text-lg md:text-2xl tracking-wider">Princess Cruises</span>
        </div>
        <div className="flex justify-center grayscale hover:grayscale-0 transition duration-500 hover:opacity-100 cursor-pointer md:col-start-3">
          <span className="font-sans text-lg md:text-2xl tracking-[0.2em] font-light">Resorts World</span>
        </div>
      </div>
    </div>
  );
};
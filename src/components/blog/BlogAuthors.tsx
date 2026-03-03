import { RevealText } from '../ui/RevealText';

export const BlogAuthors = () => {
  return (
    <div className="mt-40 mb-16 pt-24 border-t border-black/10">
      <RevealText>
        <h2 className="text-xl uppercase tracking-widest text-gray-500 font-medium mb-16 text-center">Featured Voices</h2>
      </RevealText>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
        {[
          { name: "Javier Calle", role: "Design Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
          { name: "Carolina Ocaña", role: "Lead Architect", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
          { name: "Marco Gonzalez", role: "Partner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
          { name: "Elena Rossi", role: "Senior Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" }
        ].map((author, i) => (
          <div key={i} className="flex flex-col items-center group cursor-pointer">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={author.image} alt={author.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <RevealText delay={0.1 * i}>
              <h3 className="font-serif text-xl mb-1 group-hover:text-[#B5A58D] transition-colors">{author.name}</h3>
            </RevealText>
            <RevealText delay={0.15 * i}>
              <p className="text-xs uppercase tracking-widest text-gray-500">{author.role}</p>
            </RevealText>
          </div>
        ))}
      </div>
    </div>
  );
};
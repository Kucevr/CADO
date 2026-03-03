import { RevealText } from '../ui/RevealText';
import { MoveRight } from 'lucide-react';

export const ProjectsFocus = () => {
  return (
    <div className="mt-40 border-t border-black/10 pt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <RevealText>
          <h2 className="font-serif text-[6vw] leading-[0.9] uppercase tracking-tight">Our Focus Areas</h2>
        </RevealText>
      </div>
      <div className="flex flex-col justify-center space-y-12">
         {[
           { title: "Cruise Ships", desc: "Pushing the boundaries of marine architecture to create floating masterpieces." },
           { title: "Resorts & Hotels", desc: "Curating grounded spaces that tell stories and elevate the guest feeling." },
           { title: "Restaurants", desc: "Designing vibrant dining concepts that engage the senses." },
           { title: "Spa & Wellness", desc: "Crafting serene sanctuaries focused on restoration and peace." }
         ].map((area, i) => (
            <div key={i} className="group border-b border-black/10 pb-8 hover:border-black transition-colors duration-300">
              <RevealText>
                <h3 className="text-3xl font-serif mb-4 flex items-center justify-between">
                  {area.title}
                  <MoveRight strokeWidth={1} className="w-6 h-6 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
              </RevealText>
              <RevealText delay={0.1}>
                <p className="text-xl text-gray-500 font-medium">{area.desc}</p>
              </RevealText>
            </div>
         ))}
      </div>
    </div>
  );
};
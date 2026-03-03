import { RevealText } from '../ui/RevealText';
import { ArrowUpRight } from 'lucide-react';

const jobOpenings = [
  { title: "Senior Interior Designer", location: "Coral Gables, FL", type: "Full-time" },
  { title: "Architectural Drafter", location: "Coral Gables, FL", type: "Full-time" },
  { title: "Project Manager (Marine)", location: "Remote / Hybrid", type: "Full-time" },
  { title: "Design Intern", location: "Coral Gables, FL", type: "Internship" }
];

export const AboutCareers = () => {
  return (
    <div className="mt-32 pt-24 border-t border-white/20">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
        <RevealText>
          <h2 className="text-4xl md:text-5xl font-serif">Join our team</h2>
        </RevealText>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <RevealText delay={0.1}>
            <p className="text-xl text-white/70 leading-relaxed">
              We are always on the lookout for forward-thinkers, rule-breakers, and story-makers. If you’re passionate about hospitality design and marine architecture, we’d love to meet you.
            </p>
          </RevealText>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {jobOpenings.map((job, idx) => (
          <div key={idx} className="group border-b border-white/20 pb-6 pt-4 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:border-white transition-colors duration-300">
            <div className="mb-4 md:mb-0">
              <RevealText>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-[#B5A58D] transition-colors">{job.title}</h3>
              </RevealText>
              <RevealText delay={0.1}>
                <div className="flex gap-4 text-sm tracking-widest uppercase text-white/50">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </RevealText>
            </div>
            
            <div className="opacity-100 md:opacity-0 md:-translate-x-4 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-x-0">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-white text-black">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
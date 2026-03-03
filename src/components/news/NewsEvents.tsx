import { RevealText } from '../ui/RevealText';
import { TransitionLink as Link } from '../TransitionLink';

const events = [
  { date: "May 14, 2026", location: "Miami, FL", title: "Cruise Ship Interiors Expo", description: "Join our partners for a keynote panel on the future of maritime wellness spaces." },
  { date: "June 22, 2026", location: "London, UK", title: "Hospitality Design Summit", description: "Studio CODA will be presenting our latest case studies on hybrid dining concepts." },
  { date: "August 10, 2026", location: "Virtual", title: "CODA Masterclass: Concept to Reality", description: "An exclusive deep-dive webinar into our drafting and rendering processes." }
];

export const NewsEvents = () => {
  return (
    <div className="mt-20 pt-20 border-t border-black/10">
      <RevealText>
        <h2 className="text-4xl font-serif mb-16">Upcoming Events</h2>
      </RevealText>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <div key={i} className="bg-white p-8 border border-black/5 hover:border-black/20 transition-colors shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            <RevealText delay={0.1 * i}>
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[#B5A58D] mb-2 block">{event.date}</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 mb-6 block">{event.location}</span>
                <h3 className="text-2xl font-serif mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-8">{event.description}</p>
                <div className="w-8 h-[1px] bg-black/20 mb-4"></div>
                <Link to="/contact" className="uppercase text-xs font-semibold tracking-widest hover:text-[#B5A58D] transition-colors py-3 inline-block">Register Interest</Link>
              </div>
            </RevealText>
          </div>
        ))}
      </div>
    </div>
  );
};
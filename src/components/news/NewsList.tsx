import { RevealText } from '../ui/RevealText';
import { MoveRight } from 'lucide-react';
import { TransitionLink as Link } from '../TransitionLink';

const newsItems = [
  {
    date: "February 2026",
    title: "Studio CODA Wins Gold at Hospitality Design Awards",
    category: "Awards"
  },
  {
    date: "January 2026",
    title: "Unveiling the Grand Atrium: A New Era of Cruise Design",
    category: "Announcements"
  },
  {
    date: "December 2025",
    title: "Our Expanding Team: Welcoming New Senior Designers",
    category: "Studio News"
  }
];

export const NewsList = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        {newsItems.map((news, i) => (
          <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-black/10 group cursor-pointer hover:border-black transition-colors duration-300 relative">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <RevealText delay={0.1}>
                <span className="text-sm uppercase tracking-widest text-gray-500">{news.date} - {news.category}</span>
              </RevealText>
            </div>
            <div className="w-full md:w-2/4">
              <RevealText delay={0.2}>
                <h3 className="text-3xl md:text-5xl font-serif group-hover:text-[#665D4F] transition-colors">{news.title}</h3>
              </RevealText>
            </div>
            <div className="w-full md:w-1/4 flex justify-end mt-6 md:mt-0 opacity-100 transition-opacity duration-500 overflow-hidden">
              <Link to="/blog" className="group relative pr-1 py-1 flex items-center overflow-hidden text-lg font-medium transition-colors">
                <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover:translate-x-0">
                  <MoveRight strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-7">
                  Read Story
                  <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-x-100"></span>
                </span>
                <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-[200%]">
                  <MoveRight strokeWidth={1.5} className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 flex justify-center w-full pb-20">
        <RevealText>
          <button className="group relative px-6 py-4 flex items-center overflow-hidden text-xl font-medium transition-colors border border-black/20 hover:border-black rounded-full">
            <span className="relative z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-[150%]">
              Load More News
            </span>
            <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-[150%] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-y-0">
              Load More News
            </span>
          </button>
        </RevealText>
      </div>
    </>
  );
};
import { MoveRight } from 'lucide-react';
import { TransitionLink as Link } from '../TransitionLink';

export const BlogFeatured = () => {
  return (
    <div className="blog-card mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 group cursor-pointer border-b border-black/10 pb-24">
      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
        <img src="/assets/blog/blog-featured.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Featured" />
      </div>
      <div className="flex flex-col justify-center max-lg:order-last">
        <span className="text-sm uppercase tracking-widest text-gray-500 mb-6">Featured - Mar 10, 2026</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.1] group-hover:text-[#665D4F] transition-colors">
          The Evolution of the Hotel Lobby: From Transit Hub to Social Epicenter
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Once viewed simply as a place to hand over a credit card and get a room key, the hotel lobby has undergone a dramatic transformation. We explore how leading brands are rethinking these grand entrances into all-day, multi-purpose social clubs.
        </p>
        <Link to={`/blog/hotel-lobbies`} className="group/btn relative pr-1 py-1 flex items-center overflow-hidden text-xl font-medium transition-colors w-fit">
          <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover/btn:translate-x-0">
            <MoveRight strokeWidth={1.5} className="w-6 h-6" />
          </div>
          <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-8">
            Read Article
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:scale-x-100"></span>
          </span>
          <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-[200%]">
            <MoveRight strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};
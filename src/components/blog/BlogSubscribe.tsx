import { RevealText } from '../ui/RevealText';

export const BlogSubscribe = () => {
  return (
    <div className="mt-40 border-t border-black/10 pt-24 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <RevealText>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Never miss a story.</h2>
        </RevealText>
        <RevealText delay={0.1}>
          <p className="text-xl text-gray-500 mb-12">
            Subscribe to our newsletter for the latest design insights, editorial deep dives, and studio announcements.
          </p>
        </RevealText>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full sm:w-auto sm:min-w-[300px] border-b border-black/20 pb-2 bg-transparent text-xl focus:outline-none focus:border-black transition-colors"
          />
          <button className="px-6 py-2 bg-black text-white hover:bg-[#665D4F] transition-colors mt-4 sm:mt-0 uppercase tracking-widest text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
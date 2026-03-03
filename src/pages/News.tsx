import { useEffect } from 'react';
import { NewsHeader } from '../components/news/NewsHeader';
import { NewsList } from '../components/news/NewsList';
import { NewsEvents } from '../components/news/NewsEvents';
import { NewsPress } from '../components/news/NewsPress';
import { SEO } from '../components/SEO';
import { ReadyToStart } from '../components/ui/ReadyToStart';

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F6F5F2] min-h-screen text-black overflow-hidden pt-32 pb-24">
      <SEO 
        title="News & Press | CODA Architecture" 
        description="Latest news, publications, and upcoming events from CODA Studio." 
        url="https://coda-architecture.vercel.app/news" 
      />
      <div className="px-[3%]">
        <NewsHeader />
        <NewsList />
        <NewsEvents />
        <NewsPress />
      </div>

      <div className="-mx-[3%] -mb-24 mt-24">
        <ReadyToStart />
      </div>
    </div>
  );
};

export default News;
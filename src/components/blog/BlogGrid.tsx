import { MoveRight } from 'lucide-react';
import { TransitionLink as Link } from '../TransitionLink';

const blogPosts = [
  {
    id: "romance-of-travel",
    date: "Feb 26, 2026",
    title: "The Romance of Travel: What Luxury Trains Can Teach the Cruise World",
    image: "/assets/blog/blog-romance-of-travel.jpeg",
  },
  {
    id: "maximalism",
    date: "Nov 12, 2025",
    title: "More Is More: Why Maximalism Is Making a Bold Return in Hospitality Design",
    image: "/assets/blog/blog-maximalism.jpeg",
  },
  {
    id: "miami-design",
    date: "Oct 21, 2025",
    title: "Miami Design: How the City Became a Global Capital of Culture and Creativity",
    image: "/assets/blog/blog-miami-design.jpeg",
  },
  {
    id: "sustainable-materials",
    date: "Sep 05, 2025",
    title: "Sourcing Sustainable Materials Without Compromising Luxury",
    image: "/assets/blog/blog-stone-architecture.jpeg",
  }
];

export const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card group flex flex-col">
          <div className="w-full aspect-square overflow-hidden mb-6">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
          <span className="text-sm uppercase tracking-widest text-gray-500 mb-4">{post.date}</span>
          <h3 className="text-2xl font-serif mb-6 flex-grow leading-tight">{post.title}</h3>
          <Link to={`/blog/${post.id}`} className="group/btn relative pr-1 py-1 flex items-center overflow-hidden text-lg font-medium transition-colors w-fit">
            <div className="absolute left-0 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] -translate-x-[150%] group-hover/btn:translate-x-0">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
            <span className="relative transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-7">
              Read Article
              <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-current origin-left scale-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:scale-x-100"></span>
            </span>
            <div className="ml-2 flex items-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-[200%]">
              <MoveRight strokeWidth={1.5} className="w-5 h-5" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
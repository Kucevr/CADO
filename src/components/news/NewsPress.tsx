import { RevealText } from '../ui/RevealText';

export const NewsPress = () => {
  return (
    <div className="mt-20 pt-20 border-t border-black/10">
      <RevealText>
        <h2 className="text-4xl font-serif mb-16">Press Inquiries</h2>
      </RevealText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <RevealText delay={0.1}>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-xl">
            For press releases, high-resolution images, and interview requests with our founding partners or design directors, please reach out to our media team.
          </p>
        </RevealText>
        <div>
          <RevealText delay={0.2}>
            <a href="mailto:press@studiocoda.com" className="text-2xl md:text-3xl lg:text-5xl font-serif hover:opacity-60 transition-opacity break-all">
              press@studiocoda.com
            </a>
          </RevealText>
        </div>
      </div>
    </div>
  );
};
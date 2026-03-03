export const SEO = ({ 
  title, 
  description,
  url = "https://coda-architecture.vercel.app/"
}: { 
  title: string; 
  description: string;
  url?: string;
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </>
  );
};
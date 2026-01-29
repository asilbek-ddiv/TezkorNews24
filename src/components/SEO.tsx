import { Helmet } from "@dr.pogodin/react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "TezkorNews24 - Yangiliklar",
  description = "O'zbekiston va dunyo yangiliklari tezkor tarzda",
  image = "https://tezkornews24.uz/default-og.jpg",
  url,
}: SEOProps) {
  const siteUrl = "https://tezkornews24.uz";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <html lang="uz" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="uz_UZ" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}

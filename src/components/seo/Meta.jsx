import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <meta name="theme-color" content="#000000" />
      <meta
        name="google-site-verification"
        content="s-pAT1lGWnHa4uxYEYNead8C1SfOr0yg0Mr4K7di5ZQ"
      />
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "AVALANCHE",
  keywords: "AVALANCHE,バンド,滋賀",
  description: "AVALANCHE Official Website",
  ogTitle: "AVALANCHE",
};
export default Meta;

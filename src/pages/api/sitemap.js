const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your pages.
  const links = [
    { url: "/", changefreq: "weekly", priority: 1 },
    { url: "/contact", changefreq: "weekly", priority: 0.8 },
    { url: "/profile", changefreq: "weekly", priority: 0.65 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

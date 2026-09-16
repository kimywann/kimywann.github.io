import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL } from "../../site.config.mjs";

const createUrlEntry = (location: string, lastModified?: Date) => {
  const lastModifiedTag = lastModified
    ? `\n    <lastmod>${lastModified.toISOString().slice(0, 10)}</lastmod>`
    : "";

  return `  <url>\n    <loc>${location}</loc>${lastModifiedTag}\n  </url>`;
};

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  const postUrls = posts.map((post) => {
    const location = new URL(`/posts/${post.id}/`, SITE_URL).toString();

    return createUrlEntry(location, post.data.date);
  });
  const homeUrl = createUrlEntry(new URL("/", SITE_URL).toString());
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[homeUrl, ...postUrls].join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};

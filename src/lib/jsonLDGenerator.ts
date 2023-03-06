import siteData from "../data/siteData.json";
import { slugify } from "./utils";

type JSONLDGeneratorType = {
  type: string;
  post: {
    title: string;
    description: string;
    author: string;
    date: string;
    image: {
      src: string;
    };
  };
  url: string;
};

export default function jsonLDGenerator({
  type,
  post,
  url,
}: JSONLDGeneratorType) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}

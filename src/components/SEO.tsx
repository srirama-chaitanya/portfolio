import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string; // Add support for an image
}

export const SEO = ({
  title,
  description = "Srirama Chaitanya's modern, responsive portfolio with projects, Skills, and contact.",
  canonical,
  type = "website",
  image = `https://res.cloudinary.com/dplujo3dd/image/upload/v1726763668/DS_Chaitanya_origin_qzonyg.jpg`, // Default image
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      let el = document.querySelector<HTMLMetaElement>(
        prop ? `meta[property='${name}']` : `meta[name='${name}']`
      );
      if (!el) {
        el = document.createElement("meta");
        if (prop) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // General Meta Tags
    setMeta("description", description);

    // Open Graph Meta Tags
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", canonical || window.location.href, true);
    setMeta("og:image", image, true);

    // Twitter Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // Canonical URL
    const url = canonical || window.location.href;
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, canonical, type, image]);

  return null;
};

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords = [],
  ogImage = "/logo_bg.png",
  ogType = "website",
  canonicalUrl,
  structuredData,
}: SEOProps) {
  const fullTitle = `${title} | Saiesh Sasane - PCB Design & Embedded Systems Engineer`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const canonical = canonicalUrl || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "));
    }
    updateMetaTag("author", "Saiesh Sasane");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", canonical, true);
    updateMetaTag("og:image", `${siteUrl}${ogImage}`, true);
    updateMetaTag("og:site_name", "Saiesh Sasane Portfolio", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${siteUrl}${ogImage}`);

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, canonical, structuredData, fullTitle, siteUrl]);

  return null;
}

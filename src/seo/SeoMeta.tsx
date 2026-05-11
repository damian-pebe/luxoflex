import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  absoluteImageUrl,
  absoluteUrl,
  buildJsonLd,
  getSeoRoute,
  seoData,
} from "./seo";

const setMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== "content") element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const setAlternate = (hreflang: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export function SeoMeta() {
  const location = useLocation();

  useEffect(() => {
    const { route, canonicalPath, isRedirect, isNotFound } = getSeoRoute(location.pathname);
    const canonicalUrl = absoluteUrl(canonicalPath);
    const imageUrl = absoluteImageUrl(route.image);
    const robots = isRedirect || isNotFound ? "noindex,follow" : "index,follow";

    document.documentElement.lang = seoData.language;
    document.title = route.title;

    setMeta('meta[name="description"]', { name: "description", content: route.description });
    setMeta('meta[name="keywords"]', { name: "keywords", content: route.keywords.join(", ") });
    setMeta('meta[name="robots"]', { name: "robots", content: robots });
    setMeta('meta[name="googlebot"]', { name: "googlebot", content: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" });
    setMeta('meta[name="author"]', { name: "author", content: seoData.siteName });

    setCanonical(canonicalUrl);
    setAlternate("es-MX", canonicalUrl);
    setAlternate("x-default", canonicalUrl);

    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:title"]', { property: "og:title", content: route.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: route.description });
    setMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "es_MX" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: seoData.siteName });

    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: route.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: route.description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    let jsonLd = document.head.querySelector<HTMLScriptElement>("#luxoflex-route-schema");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.type = "application/ld+json";
      jsonLd.id = "luxoflex-route-schema";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(buildJsonLd(route));
  }, [location.pathname]);

  return null;
}

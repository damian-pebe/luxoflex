import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const seoDataPath = path.join(rootDir, "src", "seo", "seo-data.json");

const seoData = JSON.parse(await readFile(seoDataPath, "utf8"));
const sourceIndexHtml = await readFile(path.join(distDir, "index.html"), "utf8");

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
};

const absoluteUrl = (pathname) => {
  if (pathname.startsWith("http")) return pathname;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${seoData.siteUrl}${normalized === "/" ? "/" : normalized}`;
};

const absoluteImageUrl = (image) => absoluteUrl(image || seoData.defaultImage);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeAttr = (value) =>
  escapeHtml(value).replaceAll('"', "&quot;");

const findRoute = (pathname) => {
  const normalized = normalizePath(pathname);
  return seoData.routes.find((route) => route.path === normalized);
};

const serviceRoutes = seoData.routes.filter((route) => route.service);

const lastBreadcrumbName = (route) => {
  const last = route.breadcrumb[route.breadcrumb.length - 1];
  return last?.name || route.title;
};

const serviceOfferCatalog = () => ({
  "@type": "OfferCatalog",
  name: "Servicios de impresion y etiquetas Luxoflex",
  itemListElement: serviceRoutes.map((route) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: route.service.h1,
      description: route.service.summary,
      url: absoluteUrl(route.path),
      areaServed: "MX",
    },
  })),
});

const buildJsonLd = (route) => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoData.siteUrl}/#organization`,
    name: seoData.business.name,
    url: seoData.siteUrl,
    logo: absoluteImageUrl(seoData.business.logo),
    description: seoData.business.description,
    email: seoData.business.email,
    telephone: seoData.business.telephone,
    foundingDate: seoData.business.foundingDate,
    sameAs: seoData.business.sameAs,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoData.siteUrl}/#localbusiness`,
    name: seoData.business.name,
    url: seoData.siteUrl,
    image: absoluteImageUrl(seoData.defaultImage),
    logo: absoluteImageUrl(seoData.business.logo),
    description: seoData.business.description,
    telephone: seoData.business.telephone,
    email: seoData.business.email,
    foundingDate: seoData.business.foundingDate,
    priceRange: seoData.business.priceRange,
    address: {
      "@type": "PostalAddress",
      ...seoData.business.address,
    },
    areaServed: {
      "@type": "Country",
      name: "Mexico",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    sameAs: seoData.business.sameAs,
    hasOfferCatalog: serviceOfferCatalog(),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoData.siteUrl}/#website`,
    url: seoData.siteUrl,
    name: seoData.siteName,
    inLanguage: seoData.language,
    publisher: {
      "@id": `${seoData.siteUrl}/#organization`,
    },
  };

  const navigation = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${seoData.siteUrl}/#site-navigation`,
    name: "Navegacion principal Luxoflex",
    itemListElement: seoData.routes.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: lastBreadcrumbName(item),
      url: absoluteUrl(item.path),
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: route.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  const page = {
    "@context": "https://schema.org",
    "@type": route.schemaType === "Service" ? "WebPage" : route.schemaType,
    "@id": `${absoluteUrl(route.path)}#webpage`,
    url: absoluteUrl(route.path),
    name: route.title,
    description: route.description,
    inLanguage: seoData.language,
    image: absoluteImageUrl(route.image),
    isPartOf: {
      "@id": `${seoData.siteUrl}/#website`,
    },
    publisher: {
      "@id": `${seoData.siteUrl}/#organization`,
    },
  };

  const schemas = [organization, localBusiness, website, navigation, breadcrumb, page];

  if (route.service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(route.path)}#service`,
      name: route.service.h1,
      serviceType: lastBreadcrumbName(route),
      description: route.service.summary,
      url: absoluteUrl(route.path),
      image: absoluteImageUrl(route.service.image),
      areaServed: {
        "@type": "Country",
        name: "Mexico",
      },
      provider: {
        "@id": `${seoData.siteUrl}/#localbusiness`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: route.service.h1,
        itemListElement: route.service.applications.map((application) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: application,
          },
        })),
      },
    });
  }

  return schemas;
};

const upsertMeta = (html, attributeName, attributeValue, content) => {
  const escapedContent = escapeAttr(content);
  const tag = `<meta ${attributeName}="${attributeValue}" content="${escapedContent}" />`;
  const pattern = new RegExp(`<meta\\s+${attributeName}=["']${attributeValue}["'][^>]*>`, "i");

  if (pattern.test(html)) {
    return html.replace(pattern, () => tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertCanonical = (html, href) => {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, () => tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertJsonLd = (html, jsonLd) => {
  const tag = `<script id="luxoflex-route-schema" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  const byId = /<script[^>]*id=["']luxoflex-route-schema["'][\s\S]*?<\/script>/i;
  const anyJsonLd = /<script[^>]*type=["']application\/ld\+json["'][\s\S]*?<\/script>/i;

  if (byId.test(html)) {
    return html.replace(byId, () => tag);
  }

  if (anyJsonLd.test(html)) {
    return html.replace(anyJsonLd, () => tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const renderRouteHtml = ({ route, canonicalPath = route.path, noindex = false }) => {
  const canonicalUrl = absoluteUrl(canonicalPath);
  const imageUrl = absoluteImageUrl(route.image);
  let html = sourceIndexHtml;

  html = html.replace(/<html([^>]*)>/i, `<html lang="${seoData.language}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = upsertMeta(html, "name", "description", route.description);
  html = upsertMeta(html, "name", "keywords", route.keywords.join(", "));
  html = upsertMeta(html, "name", "robots", noindex ? "noindex,follow" : "index,follow");
  html = upsertMeta(html, "name", "author", seoData.siteName);
  html = upsertCanonical(html, canonicalUrl);
  html = upsertMeta(html, "property", "og:type", "website");
  html = upsertMeta(html, "property", "og:url", canonicalUrl);
  html = upsertMeta(html, "property", "og:title", route.title);
  html = upsertMeta(html, "property", "og:description", route.description);
  html = upsertMeta(html, "property", "og:image", imageUrl);
  html = upsertMeta(html, "property", "og:locale", "es_MX");
  html = upsertMeta(html, "property", "og:site_name", seoData.siteName);
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:title", route.title);
  html = upsertMeta(html, "name", "twitter:description", route.description);
  html = upsertMeta(html, "name", "twitter:image", imageUrl);
  html = upsertJsonLd(html, buildJsonLd(route));

  return html;
};

const writeRouteHtml = async (pathname, html) => {
  if (pathname === "/") {
    await writeFile(path.join(distDir, "index.html"), html);
    return;
  }

  const routeDir = path.join(distDir, pathname.replace(/^\//, ""));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoData.routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${seoData.siteUrl}/sitemap.xml
`;

for (const route of seoData.routes) {
  await writeRouteHtml(route.path, renderRouteHtml({ route }));
}

for (const redirect of seoData.redirects) {
  const targetRoute = findRoute(redirect.target);
  if (targetRoute) {
    await writeRouteHtml(
      redirect.path,
      renderRouteHtml({
        route: targetRoute,
        canonicalPath: targetRoute.path,
        noindex: true,
      })
    );
  }
}

const notFoundRoute = {
  ...seoData.routes[0],
  path: "/404",
  title: "Pagina no encontrada | Luxoflex",
  description: "La pagina que buscas no existe. Vuelve a Luxoflex para cotizar etiquetas personalizadas, flexografia, mangas termocontraibles o preprensa profesional.",
  keywords: ["404 Luxoflex", "pagina no encontrada", "etiquetas personalizadas Luxoflex"],
  image: seoData.defaultImage,
  schemaType: "WebPage",
  priority: 0,
  changefreq: "yearly",
  breadcrumb: [
    { name: "Inicio", path: "/" },
    { name: "404", path: "/404" },
  ],
};

await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await writeFile(path.join(distDir, "robots.txt"), robots);
await writeFile(path.join(distDir, "404.html"), renderRouteHtml({ route: notFoundRoute, noindex: true }));

console.log(`Generated SEO HTML for ${seoData.routes.length} routes, ${seoData.redirects.length} redirects, sitemap.xml, robots.txt and 404.html.`);

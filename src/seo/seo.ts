import seoDataJson from "./seo-data.json";

export type SeoService = {
  eyebrow: string;
  h1: string;
  intro: string;
  summary: string;
  accent: string;
  image: string;
  applications: string[];
  materials: string[];
  benefits: string[];
  related: string[];
};

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  schemaType: string;
  priority: number;
  changefreq: string;
  breadcrumb: Array<{ name: string; path: string }>;
  service?: SeoService;
};

type SeoBusiness = {
  name: string;
  description: string;
  telephone: string;
  secondaryTelephone: string;
  email: string;
  logo: string;
  foundingDate: string;
  priceRange: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  sameAs: string[];
};

type SeoData = {
  siteUrl: string;
  siteName: string;
  defaultImage: string;
  language: string;
  primaryNavigation: string[];
  business: SeoBusiness;
  routes: SeoRoute[];
  redirects: Array<{ path: string; target: string }>;
};

export const seoData = seoDataJson as SeoData;

export const notFoundSeoRoute: SeoRoute = {
  path: "/404",
  title: "Pagina no encontrada | Luxoflex",
  description:
    "La pagina que buscas no existe. Vuelve a Luxoflex para cotizar etiquetas personalizadas, flexografia, mangas termocontraibles o preprensa profesional.",
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

export const normalizePath = (path: string) => {
  if (!path || path === "/") return "/";
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return clean || "/";
};

export const absoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${seoData.siteUrl}${normalized === "/" ? "/" : normalized}`;
};

export const absoluteImageUrl = (path?: string) =>
  absoluteUrl(path || seoData.defaultImage);

export const getSeoRoute = (path: string) => {
  const normalized = normalizePath(path);
  const redirect = seoData.redirects.find((item) => item.path === normalized);
  const directRoute = seoData.routes.find((item) => item.path === normalized);
  const isExplicitNotFound = normalized === "/404";
  const canonicalPath = redirect?.target || normalized;
  const route =
    isExplicitNotFound ? notFoundSeoRoute :
    directRoute ||
    seoData.routes.find((item) => item.path === canonicalPath) ||
    notFoundSeoRoute;

  return {
    route,
    canonicalPath: isExplicitNotFound || (!redirect && !directRoute) ? "/404" : directRoute ? normalized : canonicalPath,
    isRedirect: Boolean(redirect),
    isNotFound: isExplicitNotFound || (!redirect && !directRoute),
  };
};

export const serviceRoutes = seoData.routes.filter(
  (route): route is SeoRoute & { service: SeoService } => Boolean(route.service)
);

const primaryNavigationRoutes = seoData.primaryNavigation
  .map((path) => seoData.routes.find((route) => route.path === path))
  .filter((route): route is SeoRoute => Boolean(route));

const lastBreadcrumbName = (route: SeoRoute) => {
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

const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${seoData.siteUrl}/#organization`,
  name: seoData.business.name,
  legalName: seoData.business.name,
  alternateName: ["Luxoflex Impresiones", "Luxoflex etiquetas"],
  url: seoData.siteUrl,
  logo: absoluteImageUrl(seoData.business.logo),
  description: seoData.business.description,
  email: seoData.business.email,
  telephone: seoData.business.telephone,
  foundingDate: seoData.business.foundingDate,
  sameAs: seoData.business.sameAs,
});

const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoData.siteUrl}/#localbusiness`,
  name: seoData.business.name,
  alternateName: ["Luxoflex Impresiones", "Luxoflex etiquetas"],
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
});

const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${seoData.siteUrl}/#website`,
  url: seoData.siteUrl,
  name: seoData.siteName,
  alternateName: ["Luxoflex Impresiones", "Luxoflex etiquetas"],
  inLanguage: seoData.language,
  publisher: {
    "@id": `${seoData.siteUrl}/#organization`,
  },
});

const navigationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${seoData.siteUrl}/#site-navigation`,
  name: "Navegacion principal Luxoflex",
  itemListElement: primaryNavigationRoutes.map((route, index) => ({
    "@type": "SiteNavigationElement",
    position: index + 1,
    name: lastBreadcrumbName(route),
    url: absoluteUrl(route.path),
  })),
});

const breadcrumbSchema = (route: SeoRoute) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: route.breadcrumb.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const pageSchema = (route: SeoRoute) => ({
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
});

const serviceSchema = (route: SeoRoute & { service: SeoService }) => ({
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

export const buildJsonLd = (route: SeoRoute) => {
  const schemas: Array<Record<string, unknown>> = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    navigationSchema(),
    breadcrumbSchema(route),
    pageSchema(route),
  ];

  if (route.service) {
    schemas.push(serviceSchema(route as SeoRoute & { service: SeoService }));
  }

  return schemas;
};

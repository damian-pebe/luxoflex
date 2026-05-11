import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import LandingPage from "./modules/Routes/LandingPageComponents/LandingPage";
import Contactus from "./modules/Routes/ContactUs/Contactus";
import { NavbarLuxoflex } from "./modules/NaviationBar/NavBar";
import Who from "./modules/Routes/Luxoflex/who";
import Vision from "./modules/Routes/Vision/Vision";
import Mission from "./modules/Routes/Mission/Mission";
import Footer from "./modules/Footer/Footer";
import PastWorks from "./modules/Routes/PastWorks/PastWorks";
import NotFoundPage from "./404";
import ServiceSeoPage from "./modules/Routes/ServiceSeo/ServiceSeoPage";
import { SeoMeta } from "./seo/SeoMeta";
import { seoData, serviceRoutes } from "./seo/seo";

const shellRoutes = new Set([
  ...seoData.routes.map((route) => route.path),
  ...seoData.redirects.map((redirect) => redirect.path),
  "/404",
]);

const normalizeAppPath = (path: string) => path.replace(/\/+$/, "") || "/";

function AppShell() {
  const location = useLocation();
  const showGlobalShell = shellRoutes.has(normalizeAppPath(location.pathname));

  return (
    <>
      <SeoMeta />
      {showGlobalShell && <NavbarLuxoflex />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {serviceRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<ServiceSeoPage path={route.path} />}
          />
        ))}
        <Route path="/contacto" element={<Contactus />} />
        <Route path="/nosotros" element={<Who />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mision" element={<Mission />} />
        <Route path="/galeria" element={<PastWorks />} />
        {seoData.redirects.map((redirect) => (
          <Route
            key={redirect.path}
            path={redirect.path}
            element={<Navigate to={redirect.target} replace />}
          />
        ))}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {showGlobalShell && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="overflow-hidden">
      <ThemeProvider storageKey="vite-ui-theme">
        <Router>
          <AppShell />
        </Router>
      </ThemeProvider>
      <Toaster />
    </div>
  );
}

export default App;

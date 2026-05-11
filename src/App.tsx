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

const shellRoutes = new Set([
  "/",
  "/etiquetas-personalizadas",
  "/flexografia",
  "/etiquetas-autoadheribles",
  "/mangas-termocontraibles",
  "/preprensa",
  "/contacto",
  "/nosotros",
  "/vision",
  "/mision",
  "/galeria",
  "/contactus",
  "/contactanos",
  "/luxoflex",
  "/quienes-somos",
  "/mission",
  "/proyectos",
  "/pastworks",
  "/trabajos",
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
        <Route path="/etiquetas-personalizadas" element={<ServiceSeoPage path="/etiquetas-personalizadas" />} />
        <Route path="/flexografia" element={<ServiceSeoPage path="/flexografia" />} />
        <Route path="/etiquetas-autoadheribles" element={<ServiceSeoPage path="/etiquetas-autoadheribles" />} />
        <Route path="/mangas-termocontraibles" element={<ServiceSeoPage path="/mangas-termocontraibles" />} />
        <Route path="/preprensa" element={<ServiceSeoPage path="/preprensa" />} />
        <Route path="/contacto" element={<Contactus />} />
        <Route path="/nosotros" element={<Who />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mision" element={<Mission />} />
        <Route path="/galeria" element={<PastWorks />} />
        <Route path="/contactus" element={<Navigate to="/contacto" replace />} />
        <Route path="/contactanos" element={<Navigate to="/contacto" replace />} />
        <Route path="/luxoflex" element={<Navigate to="/nosotros" replace />} />
        <Route path="/quienes-somos" element={<Navigate to="/nosotros" replace />} />
        <Route path="/mission" element={<Navigate to="/mision" replace />} />
        <Route path="/proyectos" element={<Navigate to="/galeria" replace />} />
        <Route path="/pastworks" element={<Navigate to="/galeria" replace />} />
        <Route path="/trabajos" element={<Navigate to="/galeria" replace />} />
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

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <div className="overflow-hidden">
      <ThemeProvider storageKey="vite-ui-theme">
        <Router>
          <NavbarLuxoflex />
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
          <Footer />
        </Router>
      </ThemeProvider>
      <Toaster />
    </div>
  );
}

export default App;

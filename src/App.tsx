import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./modules/NaviationBar/NavBar";
import { Toaster } from "./components/ui/toaster";
import LandingPage from "./modules/Routes/LandingPageComponents/LandingPage";
import Contactus from "./modules/Routes/ContactUs/Contactus";
import Who from "./modules/Routes/Luxoflex/who";
import Vision from "./modules/Routes/Vision/Vision";
import Mission from "./modules/Routes/Mission/Mission";
import Footer from "./modules/Footer/Footer";
import PastWorks from "./modules/Routes/PastWorks/PastWorks";
import NotFoundPage from "./404";
function App() {
  return (
    <>
      <ThemeProvider storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/luxoflex" element={<Who />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/pastworks" element={<PastWorks />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
// import Footer from "./modules/Footer/Footer";
import Navbar from "./modules/NaviationBar/NavBar";
import { FloatButton } from "antd";
import { Toaster } from "./components/ui/toaster";
import LandingPage from "./modules/Routes/LandingPageComponents/LandingPage";
import Contactus from "./modules/Routes/LandingPageComponents/ContactUs/Contactus";
import Who from "./modules/Routes/LandingPageComponents/Luxoflex/who";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
         
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/luxoflex" element={<Who />} />
          </Routes>

          {/* <Footer /> */}
          <FloatButton.BackTop />
        </Router>
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;

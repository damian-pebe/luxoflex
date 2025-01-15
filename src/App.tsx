import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
// import Footer from "./modules/Footer/Footer";
// import NavigationBar from "./modules/NaviationBar/NavBar";
import { FloatButton } from "antd";
import { Toaster } from "./components/ui/toaster";
import LandingPage from "./modules/LandingPage";
function App() {
  return (
    <>
    <div>
      hello luxoflex
    </div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          {/* <NavigationBar /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
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

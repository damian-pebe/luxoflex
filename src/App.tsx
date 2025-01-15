// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ThemeProvider } from "./components/theme-provider";
// import Footer from "./modules/Footer/Footer";
// import NavigationBar from "./modules/NaviationBar/NavBar";
// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
// import bgImage from "@/assets/crochet7.jpg";
// import { FloatButton } from "antd";
// import HeartModule from "./modules/NaviationBar/options/Heart/Heart";
// import CartModule from "./modules/NaviationBar/options/Cart/Cart";
// import { Admin } from "./modules/Routes/Admin/Admin";
// import { Toaster } from "./components/ui/toaster";
// import Product from "./modules/Routes/Product/Product";
// import LandingPage from "./modules/Routes/LandingPage/LandingPage";
// import Categoria from "./modules/Routes/Product/Categoria/Categoria";
// import SearchPage from "./modules/Routes/Search/Search";

function App() {
  return (
    <>
    <div>
      hello luxoflex
    </div>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div className="bg-[#E6DED6] h-20 md:hidden lg:hidden xl:hidden">
            <AspectRatio ratio={11 / 6}>
              <div className="relative w-full h-full group">
                <img
                  src={bgImage}
                  alt="Crochet Art"
                  className="w-full h-full object-cover"
                />
              </div>
            </AspectRatio>
          </div>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/heart" element={<HeartModule />} />
            <Route path="/cart" element={<CartModule />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product" element={<Product />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>

          <Footer />
          <FloatButton.BackTop />
        </Router>
      </ThemeProvider>
      <Toaster /> */}
    </>
  );
}

export default App;

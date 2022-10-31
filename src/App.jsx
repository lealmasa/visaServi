import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ServicioP } from "./pages/ServicioP";
import { ServiciosP } from "./pages/ServiciosP";
import { NosotrosP } from "./pages/NosotrosP";
import { Navbar, ScrollToTop, Contacto, Footer } from "./components";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="bg-bgPrimary ">
          <div className="lg:max-w-[1280px] w-ful mx-auto">
            <Navbar />
          </div>
        </div>
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/visaServi" element={<Home />}></Route>
          <Route path="/Servicios" element={<ServiciosP />}></Route>
          <Route path="/Servicios/:id" element={<ServicioP />}></Route>
          <Route path="/Nosotros" element={<NosotrosP />}></Route>
        </Routes>
      </ScrollToTop>
      <div id="Contacto" className="lg:max-w-[100%] w-full  sm:py-16 py-4 mt-16 flex justify-center items-start  bg-zinc-900 ">
        <Contacto />
      </div>
      <div className="lg:max-w-[100%] w-full  sm:py-12 sm:px-[9rem]  flex justify-center items-start  bg-zinc-900">
        <Footer  />
      </div>
    </>
  );
}

export default App;

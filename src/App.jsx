import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ServiciosP } from "./pages/ServiciosP";
import { NosotrosP } from "./pages/NosotrosP";
import { Navbar, ScrollToTop, Contacto, Footer } from "./components";
import styles, { layout } from "./style";
import ServicioVisasInternacionales from "./pages/ServicioVisasInternacionales";
import ServicioVisasEcuador from "./pages/ServicioVisasEcuador";
import ServicioVisasViajes from "./pages/ServicioVisasViajes";
import ServicioVisasTraducciones from "./pages/ServicioVisasTraducciones";

function App() {
  return (
    <>
      <div id="Navbar" className={`w-full  bg-bgPrimary `}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <Navbar />
        </div>
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Servicios" element={<ServiciosP />}></Route>
          <Route path="/Servicios/Traduducciones-de-Documentos" element={<ServicioVisasTraducciones />}></Route>
          <Route path="/Servicios/Asesoria-profesional-para-Tramitacion-de-Visas" element={<ServicioVisasInternacionales />}></Route>
          <Route path="/Servicios/Regularizacion-Migratoria-en-Ecuador" element={<ServicioVisasEcuador />}></Route>
          <Route path="/Servicios/Paquetes-Turisticos-y-Seguros-de-Viaje" element={<ServicioVisasViajes />}></Route>
          <Route path="/Nosotros" element={<NosotrosP />}></Route>
        </Routes>
      </ScrollToTop>
      <div
        id="Contacto"
        className="lg:max-w-[100%] w-full  sm:py-16 py-4 mt-16 flex justify-center items-start  bg-zinc-900 "
      >
        <Contacto />
      </div>
      <div className={"w-fullflex justify-center items-start bg-bgPrimary"}>
        <Footer />
      </div>
    </>
  );
}

export default App;

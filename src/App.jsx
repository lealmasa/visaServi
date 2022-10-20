import { Route, Routes} from "react-router-dom"
import { Home} from "./pages/Home"
import ServiciosP from "./pages/ServiciosP"
import {Navbar} from "./components"

function App() {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <div className='bg-bgPrimary '> 
          <div className='lg:max-w-[1280px] w-ful mx-auto'>
           <Navbar />
          </div> 
        </div>  

      </div >
      <Routes>
      <Route path= "/" element= { <Home />} ></Route>
      <Route path= "/Servicios" element= { <ServiciosP />} ></Route>
      </Routes>
    </>
  )
 } 
  



export default App

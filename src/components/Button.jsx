import { HashLink } from "react-router-hash-link";

import { iconPlane } from "../assets";



const button = () => {
  return (
    <HashLink
            smooth
            to="#Contacto"
            className=" flex gap-x-4  sm:pr-[16px] sm:pl-[20px] py-[14px] justify-center items-center content-center  sm:max-w-[314px] text-neutral-100 text-sm drop-shadow-xl cursor-pointer mx-auto  px-2 group  relative isolate"
          >

          <div className=" absolute rounded-md  bg-primary block  w-full h-full z-[-999] group-hover:scale-[1.05] group-active:scale-[.98] transition-all .3s ease-in-out"></div>
          <a className="text-center leading-[1.4rem] group-active:scale-[.98] transition-all 300s ease-in-out">
            Contactanos
          </a>
          <div className=" overflow-hidden w-[32px] ">
            <img
              src={iconPlane}
              alt="icono de avion"
              className=" h-6 group-hover:rotate-12 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all duration-300 ease-in-out group-active:rotate-[18deg] group-active:translate-x-10 group-active:translate-y-[-20px]"
            />
          </div>
          </HashLink>
  )
}

export default button
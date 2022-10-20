import { logoDark, iconGoTop } from "../assets";

const Footer = () => (
  <div className=" lg:max-w-[1280px] w-full gap-y-10 px-4 pt-12 pb-12 sm:pb-0 sm:pt-16 border-t-2 border-white grid grid-cols-[2fr_1fr] sm:grid-cols-3 sm:grid-rows-1 ">
    <img src={logoDark} alt="" className=" max-h-[100px] sm:max-h-[100px]" />
    <a href="" className=" justify-self-center  self-center flex flex-col-reverse sm:items-center gap-y-2">
      <span className=" text-gray-300">Ir arriba</span>
      <img src={iconGoTop} alt="" className="  w-[56px] sm:w-[32px] opacity-80" />
    </a>
    <div className=" flex-col text-gray-300 text-center sm:text-right text-sm col-span-2 self-center sm:col-span-1 sm:col-start-3 sm:row-start-1">
      <p>Copyright © 2022 Visa Servi.</p>
      <p>Desarrollado por @msbt</p>
    </div>
  </div>
);

export default Footer;

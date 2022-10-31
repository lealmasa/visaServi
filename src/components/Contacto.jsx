import React from "react";

import { contact, info } from "../constants/index";

const Contacto = () => (
  <div className=" lg:max-w-[1280px] mb-8 px-4 sm:px-[9rem] grid grid-cols-1 sm:grid-cols-2 grid-rows-[1fr_fr_2fr]  sm:gap-x-8 gap-y-6 sm:gap-y-12">
    <h2 className=" text-lg text-white text-center col-span-2" >
      ¿Ya estás listo para viajar o tienes alguna duda?
    </h2>
    <div className=" row-start-2 sm:w-[100%] ">
      <h3 className=" text-xl text-[#A58537] mb-4">Contactanos por:</h3>
      <div className="  bg-bgPrimary p-8  rounded-lg flex flex-col gap-y-6">
        <div className=" flex justify-center gap-x-6">
          {contact.map((social, index) => (
            <div key={social.id} className={`${social.bg} p-2 rounded-lg`}>
              <img src={social.icon} className=" cursor-pointer h-6"></img>
            </div>
          ))}
        </div>
        <div className=" flex flex-col gap-y-4">
          {info.map((info, index) => (
            <div className=" bg-[#E9EFFF] rounded-xl fle-x flex-col p-4 gap-4">
              <div key={info.id} className=" flex items-center gap-x-4">
                <img
                  src={info.icon}
                  alt="servicio icono"
                  className=" max-w-[24px]"
                />
                <div className=" flex flex-col">
                  <p className=" text-sm leading-tight ">{info.infoText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div  >
    <div className=" row-start-3 sm:row-start-2 w-[100%]">
      <h3 className=" text-xl text-[#A58537] mb-4">O Envianos un Mensaje</h3>
      <div className="  bg-bgPrimary p-8   rounded-lg">
        <form className=" flex flex-col gap-y-4">
          <div>
            <label className=" text-sm text-gray-500" htmlFor="nombre">
              Su nombre
            </label>
            <input
              className=" border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block"
              type="text"
              name="nombre"
              id=""
            />
          </div>
          <div>
            <label className=" text-sm text-gray-500" htmlFor="apellido">
              su apellido
            </label>
            <input
              className=" border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block"
              type="text"
              name="apellido"
              id=""
            />
          </div>
          <div>
            <label className=" text-sm text-gray-500" htmlFor="celular">
              Su celular
            </label>
            <input
              className=" border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block"
              type="text"
              name="celular"
              id=""
            />
          </div>
          <div>
            <label className=" text-sm text-gray-500" htmlFor="mensaje">
              Su mensaje
            </label>
            <textarea
              className=" border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block min-h-[120px]"
              type="text"
              name="mensaje"
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contacto;

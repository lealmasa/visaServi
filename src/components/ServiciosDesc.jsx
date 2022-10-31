import { useState } from "react";

import { useParams } from "react-router-dom";

import { Button } from "../components";


import { serviciosVisa, serviciosEcuador } from "../constants";

import { iconPlus, iconMinus, iconLink } from "../assets";

const ServiciosDesc = ({ title, paises, desc, img, list }) => {
  const { id } = useParams();
  const [selected, setSelected] = useState(false);

  if (
    id === "Asesoria-profesional-para-Tramitacion-de-Visas" ||
    id === "Regularizacion-Migratoria-en-Ecuador"
  ) {
    return (
      <div>
        <div className=" bg-[#FCEBDC]  mt-2 rounded-xl flex flex-col">
          <>
            <div
              className="   flex aling-center gap-x-4 justify-between sm:px-12 p-6 py-8 cursor-pointer"
              onClick={() => setSelected((prev) => !prev)}
            >
              <h3 className=" font-bold text-primary">{title}</h3>
              <img src={selected ? iconPlus : iconMinus} alt="" />
            </div>
            <div
              className={`${
                selected
                  ? "h-auto max-h-[9999px] pb-8"
                  : "max-h-[0px] overflow-hidden "
              } sm:px-12 px-8 flex flex-col gap-y-6 `}
            >
              {paises.map((pais, index) => (
                <div className=" flex flex-col gap-y-2">
                  <h4 className=" text-base leading-tight font-semibold ">
                    {pais.subtitle}
                  </h4>
                  <ul className=" list-disc list-outside marker:text-gray-600 px-6">
                    {pais.requisitos.map((list, index) => (
                      <li className=" text-sm">{list}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    );
  } else if (id === "Paquetes-Turisticos-y-Seguros-de-Viaje") {
    return (
      <div className={` flex flex-col sm:flex-row gap-x-4 mb-6`} >
        <div className=" max-w-[320px] max-h-[320px]">
          <img className=" w-[100%] rounded-md " 
          src={img} 
          alt="" 
          />
        </div>
        <div className=" flex flex-col">

        <h3 className=" font-bold text-primary">{title}</h3>
        <p className=" text-sm">{desc}</p>
        <div className=" flex justify-end align-bottom mt-auto">

        <a
            className="flex justify-end ml-auto items-center  mt-auto cursor-pointer"
          >
            <span className=" text-sm font-medium">Mas información</span>
            <img src={iconLink} alt="" className=" opacity-80" />
          </a>
        </div>

        </div>
      </div>
    );
  } else return <div>Hola</div>;
};

export default ServiciosDesc;

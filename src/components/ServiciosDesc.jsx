import { useState } from "react";

import { useParams} from "react-router-dom";


import { serviciosVisa, serviciosEcuador } from "../constants";

import { iconPlus, iconMinus } from "../assets";

const ServiciosDesc = ({title, paises, desc, img}) => {
  const { id } = useParams();
  const [selected, setSelected] = useState(false);
  
  if (id === "Asesoria-profesional-para-Tramitacion-de-Visas" || id === "Regularizacion-Migratoria-en-Ecuador") {

    return (
      <div>
          <div className=" bg-[#FCEBDC]  mt-2 rounded-xl flex flex-col">
            <>
              <div
                className="   flex aling-center justify-between px-12 py-8 cursor-pointer"
                onClick={() => setSelected((prev) => !prev)}
              >
                <h3 className=" text-center font-bold text-primary">
                  {title}
                </h3>
                <img src={selected ? iconPlus : iconMinus }  alt="" />
              </div>
              <div
                className={`${
                  selected ? "h-auto max-h-[9999px] pb-8" : "max-h-[0px] overflow-hidden "
                } px-12 flex flex-col gap-y-6 `}
              >
                {paises.map((pais, index) => (
                  <div className="">
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
  } else if (id === "Paquetes-Turisticos-y-Seguros-de-Viaje" ) {
    return (
      <div>hola pruevba</div>
    )
  }
  
  else return ( 
    <div>Hola</div>
  )
};

export default ServiciosDesc;

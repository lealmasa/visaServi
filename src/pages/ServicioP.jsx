import React, { useState } from "react";
import { useParams} from "react-router-dom";


import { Footer, Contacto, Hero_extra, ServiciosDesc } from "../components";

import { altHeroData, serviciosVisa, serviciosEcuador, servicesLocations } from "../constants";

export const ServicioP = () => {
  const { id } = useParams();
  

  function serviceParam() {
    if (id === "Asesoria-profesional-para-Tramitacion-de-Visas") {
      return serviciosVisa
    } else if (id === "Regularizacion-Migratoria-en-Ecuador" ) {
      return serviciosEcuador
    } else if (id === "Paquetes-Turisticos-y-Seguros-de-Viaje" ) {
      return servicesLocations
    } else if (id === "Traduducciones-de-Documentos" ) {
      return serviciosEcuador
    } else return null
  }
  function AltHeroParam() {
    if (id === "Asesoria-profesional-para-Tramitacion-de-Visas") {
      return altHeroData[0]
    } else if (id === "Regularizacion-Migratoria-en-Ecuador" ) {
      return altHeroData[1]
    } else if (id === "Paquetes-Turisticos-y-Seguros-de-Viaje" ) {
      return altHeroData[2]
    } else if (id === "Traduducciones-de-Documentos" ) {
      return altHeroData[3]
    } else return null
  }
  
  const [visaInfos, SetVisaInfos] = useState(serviceParam());

  return (
    <>
      <div className="flex justify-center items-start">
        <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
          <h1 className=" text-4xl font-semibold text-primary   mt-10  ">
            Nuestros Servicios
          </h1>
          <div className=" bg-bgPrimary lg:max-w-[1280px] w-full mt-8 p-4 sm:p-10 rounded-lg">
            <Hero_extra page={AltHeroParam()} />
            <div className=" mt-12">
              {visaInfos.map((visaInfo) => (
                <ServiciosDesc key={visaInfo.index} {...visaInfo} page={AltHeroParam()} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicioP;

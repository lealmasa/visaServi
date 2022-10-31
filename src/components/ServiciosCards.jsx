import { iconLink } from "../assets";

import { Link } from "react-router-dom";

import { services } from "../constants/index";


const ServiciosCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 sm:mt-16">
      {services.map((service, index) => (
        <div className=" bg-bgPrimary rounded-xl flex flex-col p-6 gap-4">
          <div key={service.id} className=" flex items-center gap-x-4">
            <div className={`${service.bg} p-5 rounded-xl`}>
              <img
                src={service.icon}
                alt="servicio icono"
                className=" max-w-[24px]"
              />
            </div>
            <div>
              <p className=" text-base leading-tight font-semibold">
                {service.title}
              </p>
            </div>
          </div>
          <p className=" text-sm">{service.subtitle}</p>
          <Link
            to={`/Servicios/${service.id}`}
            className="flex justify-end ml-auto items-center  mt-auto cursor-pointer"
          >
            <span className=" text-sm font-medium">Mas información</span>
            <img src={iconLink} alt="" className=" opacity-80" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ServiciosCards
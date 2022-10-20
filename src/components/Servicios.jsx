import { iconLink } from "../assets";

import { services } from "../constants/index";

const Servicios = () => (
  <div className=" mt-10 sm:pt-24">
    <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-24 justify-between">
      <h2 className=" text-4xl font-semibold text-primary">Servicios</h2>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat
        odio nulla accumsan nullam dignissim. Fames amet tempor tempor et elit
        libero nunc. Facilisis lorem malesuada lectus laoreet felis, sit sed
        libero egestas.{" "}
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 sm:mt-16">
      {services.map((service) => (
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
          <a  className=" flex justify-end ml-auto items-center  mt-auto cursor-pointer">
          <span className=" text-sm font-medium">Mas información</span>
          <img src={iconLink} alt="" className=" opacity-80" />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Servicios;

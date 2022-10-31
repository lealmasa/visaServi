import {
    ServiciosCards,
    Contacto,
    Footer,
  } from "../components";

export const ServiciosP = () => {

  return (
    <>
      <div className="flex justify-center items-start">
        <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
          <h1 className=" text-4xl font-semibold text-primary   mt-10  ">
            Nuestros Servicios
          </h1>
            < ServiciosCards /> 
        </div>
      </div>
    </>
  );
};

export default ServiciosP;
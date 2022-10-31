import { ServiciosCards } from "../components";

const Servicios = () => (
  <div className=" mt-10 sm:pt-24 ">
    <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-24 justify-between">
      <h2 className=" text-4xl font-semibold text-primary">Servicios</h2>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat
        odio nulla accumsan nullam dignissim. Fames amet tempor tempor et elit
        libero nunc. Facilisis lorem malesuada lectus laoreet felis, sit sed
        libero egestas.
      </p>
    </div>
    < ServiciosCards/>
  </div>
);

export default Servicios;

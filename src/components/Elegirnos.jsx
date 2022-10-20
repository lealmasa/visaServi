import { elegirnos } from "../constants/index";

const Elegirnos = () => (
  <div className=" mt-0 sm:pt-16">
    <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-24 justify-between">
      <h2 className=" text-4xl font-semibold text-primary">
        ¿Por qué elegirnos?
      </h2>
      <p className=" text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat
        odio nulla accumsan nullam dignissim. Fames amet tempor tempor et elit
        libero nunc. Facilisis lorem malesuada lectus laoreet felis, sit sed
        libero egestas.{" "}
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 sm:mt-16">
      {elegirnos.map((elegirnos) => (
        <div className=" bg-bgPrimary rounded-xl flex flex-col p-6 gap-4">
          <div key={elegirnos.id} className=" flex items-center gap-x-4">
            <div className={`${elegirnos.bg} p-5 rounded-xl`}>
              <img
                src={elegirnos.icon}
                alt="servicio icono"
                className=" max-w-[24px]"
              />
            </div>
            <div className=" flex flex-col">
              <p className=" text-base leading-tight font-semibold">
                {elegirnos.title}
              </p>
              <p className=" text-sm">{elegirnos.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Elegirnos;

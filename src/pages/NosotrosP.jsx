import { Footer, Hero_extra, Contacto, NosotrosDesc, NosotrosGallery } from "../components";
import { altHeroData } from "../constants";

export const NosotrosP = () => {
  return (
    <>
      <div className="flex justify-center items-start">
        <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
          <h1 className=" text-4xl font-semibold text-primary   mt-10  ">
            Quienes somos?
          </h1>
          <div className=" bg-bgPrimary lg:max-w-[1280px] w-full mt-8  p-10 py-4 rounded-lg">
            <Hero_extra page={altHeroData[0]} />
          </div>
          <div className=" lg:max-w-[1280px] w-full mt-4 rounded-lg">
            <NosotrosDesc />
          </div>
          <h2 className=" text-4xl font-semibold text-primary mt-20  ">
            Conocenos Mejor
          </h2>
          <div className="  bg-bgPrimary lg:max-w-[1280px] w-full mt-8 rounded-lg">
            <NosotrosGallery />
          </div>
        </div>
      </div>
    </>
  );
};

export default NosotrosP;

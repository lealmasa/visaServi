import React from "react";

import { Hero, Servicios, Elegirnos, Clientes, Contacto, Footer } from "../components";

export const Home = () => (
  <>
    <div className="flex justify-center items-start">
      <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-8 py-4 ">
        <Hero />
      </div>
    </div>
    <div className="flex justify-center items-start">
      <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
        <Servicios />
      </div>
    </div>
    <div className="flex justify-center items-start">
      <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
        <Elegirnos />
      </div>
    </div>
    <div className="flex justify-center items-start">
      <div className="lg:max-w-[1280px] w-full px-4 sm:px-[9rem] sm:py-6 py-4 ">
        <Clientes />
      </div>
    </div>
    <div className="lg:max-w-[100%] w-full  sm:py-16 py-4 mt-24 flex justify-center items-start  bg-zinc-900">
      <Contacto />
    </div>
    <div className="lg:max-w-[100%] w-full  sm:py-12 sm:px-[9rem]  flex justify-center items-start  bg-zinc-900">
      <Footer />
    </div>
  </>
);

export default Home;

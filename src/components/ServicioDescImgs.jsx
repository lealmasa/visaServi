import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import { iconPlus, iconMinus, iconLink } from "../assets";

const ServicioDescImgs = ({title, paises, desc, img, ws }) => {
  const [selected, setSelected] = useState(false);
  return (
    <motion.div
        className=" bg-[#F4E6D2] mt-4 rounded-xl flex flex-col  sm:px-12 p-8 grandpa"
        initial={{ opacity: 0, translateY: "12px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div
          className={` flex flex-col gap-y-4 sm:flex-row gap-x-4 destino-card`}
        >
          <div className=" max-w-[320px] max-h-[320px]">
            <img
              className=" w-[100%] rounded-md object-fill aspect-video"
              src={img}
              alt="Imagen de locacion"
            />
          </div>
          <div className=" flex flex-col">
            <h3 className=" font-bold text-primary">{title}</h3>
            <p className=" text-sm">{desc}</p>
            <div className=" flex justify-end group-odd:justify-start align-bottom mt-auto">
              <a href="https://walink.co/e2dab0"
              className="flex  group-odd[&]:ml-0 ml-auto items-center  mt-auto cursor-pointer group parent">
                <div className=" relative ">
                  <span className="text-sm font-medium group-hover:text-primary text-gray-600">
                    Reservar
                  </span>
                  <span
                    className=" 
                       w-0 group-hover:w-full group-hover:transition-all ease-in-out duration-300  absolute left-0  group-active:scale-[.9] -bottom-1 h-[2px] bg-primary "
                  ></span>
                </div>
                <img
                  src={iconLink}
                  alt="icono de link"
                  className=" opacity-60 hover-filter group-hover:opacity-100 group-active:scale-[.9]"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default ServicioDescImgs;

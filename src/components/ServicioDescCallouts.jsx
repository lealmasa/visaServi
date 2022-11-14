import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import { iconPlus, iconMinus, iconLink } from "../assets";

const ServicioDescCallouts = ({title, paises, desc, img, ws }) => {
  const [selected, setSelected] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "12px" }}
      whileInView={{ opacity: 1, translateY: "0" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className={` ${
          selected ? " " : " hover:bg-[#F6EBDA] "
        } bg-[#F4E6D2]  mt-2 rounded-xl flex flex-col`}
      >
        <>
          <div
            className="   flex  gap-x-4 justify-between sm:px-10 p-6 py-8 cursor-pointer"
            onClick={() => setSelected((prev) => !prev)}
          >
            <h3 className=" font-bold text-primary my-auto ">{title}</h3>
            <div
              className={`  bg-primary p-1 min-h-[28px] min-w-[28px] h-[28px] w-[28px] relative rounded-full isolate`}
            >
              <div
                className={` ${
                  selected ? "  " : " scale-0 "
                } h-[24px] aspect-square top-0 bottom-0 my-auto left-0 right-0 mx-auto rounded-full absolute bg-[#F4E6D2] z-[-999] transition-transform .2s ease-in`}
              ></div>
              <img
                src={selected ? iconMinus : iconPlus}
                alt=" icon para abrir la tarjeta "
                className=" select-none "
              />
            </div>
          </div>
          <div
            className={`${
              selected ? " pb-8 show-content" : " overflow-hidden hide-content "
            } sm:px-12 px-8 flex flex-col gap-y-6 transition-all 1s ease-in `}
          >
            {paises.map((pais, index) => (
              <div
                className={`${
                  selected
                    ? " show-content opacity-1"
                    : " overflow-hidden hide-content opacity-0 "
                } flex flex-col gap-y-2`}
              >
                <h4 className=" text-base leading-tight font-semibold  text-primary">
                  {pais.subtitle}
                </h4>
                <ul className=" list-disc list-outside marker:text-primary px-6">
                  {pais.requisitos.map((list, index) => (
                    <li className=" text-sm">{list}</li>
                  ))}
                </ul>
              </div>
            ))}
            <a
              href={ws}
              className={` group parent flex justify-end ml-auto items-center  mt-auto cursor-pointer `}
            >
              <div className=" relative">
                <motion.span
                  className=" block text-sm font-medium group-hover:text-primary text-gray-600"
                  initial={{ opacity: 0, translateX: "24px" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Tramitar
                </motion.span>
                <span
                  className=" 
                       w-0 group-hover:w-full group-hover:transition-all ease-in-out duration-300  absolute left-0  group-active:scale-[.9] -bottom-1 h-[2px] bg-primary "
                ></span>
              </div>
              <img
                src={iconLink}
                alt=" icono del link de la tarjeta"
                className=" opacity-60 hover-filter group-hover:opacity-100 group-active:scale-[.9]"
              />
            </a>
          </div>
        </>
      </div>
    </motion.div>
  );
};

export default ServicioDescCallouts;

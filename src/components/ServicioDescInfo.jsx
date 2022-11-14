import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import { iconPlus, iconMinus, iconLink } from "../assets";

const ServicioDescInfo = ({ title, paises, desc, img, ws }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className=" bg-[#F4E6D2] mt-4 rounded-xl flex flex-col sm:px-12 p-8 group gap-y-4">
      {paises.map((pais, index) => (
        <div>
          <div className=" flex flex-col gap-y-2">
            <h4 className=" text-base leading-tight font-semibold text-primary">
              {pais.subtitle}
            </h4>
            <ul className=" list-disc list-outside marker:text-primary px-6">
              {pais.requisitos.map((list, index) => (
                <li className=" text-sm">{list}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <a
        href="https://walink.co/c3fc3e"
        className="flex  group-odd[&]:ml-0 ml-auto items-center  mt-auto cursor-pointer group parent"
      >
        <div className=" relative ">
          <span className="text-sm font-medium group-hover:text-primary text-gray-600">
            Tramitar
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
  );
};

export default ServicioDescInfo;

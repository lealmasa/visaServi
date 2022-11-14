import React, { useState } from "react";
import { iconSliderL, iconSliderR, iconQuote } from "../assets";
import { clientes } from "../constants/index";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Clientes = () => {
  const [current, setCurrent] = useState(0);
  const length = clientes.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const moveDot = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <div className="  mt-20 sm:pt-18">
        <motion.h2
          className={` ${styles.heading2} text-center`}
          initial={{ opacity: 0, translateY: "12px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          ¿Qué dicen mis clientes?
        </motion.h2>

        <motion.div
          className=" grid grid-cols-2 mt-16 px-0 sm:gap-x-6 gap-y-6 sm:grid-cols-[1fr_max-content_1fr] sm:items-center "
          initial={{ opacity: 0, translateY: "12px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={iconSliderL}
            alt="icono para ir a la izquierda"
            className="  max-w-[48px] cursor-pointer  justify-self-end opacity-60 hover:opacity-100 hover-filterA active:scale-[.9] row-start-3 sm:row-start-1"
            onClick={prevSlide}
          />
          <>
            {clientes.map((cliente, index) => {
              return (
                <>
                  {index === current && (
                    <motion.div
                      className={` ${layout.sectionCard} mx-8 flex flex-col sm:flex-row items-center gap-x-4 row-start-1 col-span-3 sm:col-start-2 sm:col-span-1 min-h-[180px]`}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <motion.div className=" rounded-2xl overflow-hidden w-[240px]  flex-grow-0 aspect-[6/5]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3}}
                      viewport={{ once: true }}>
                        <img
                          src={cliente.img}
                          alt="imagen de clientes"
                          className=" object-center  w-full "
                        />
                      </motion.div>
                      <motion.div className=" flex flex-col sm:flex-row flex-shrink-1 min-h-[220px] sm:min-h-fit  sm:flex-grow-0 items-start justify-start gap-y-4 sm:gap-y-0 sm:gap-x-2 sm:mt-0 "
                      initial={{ opacity: 0, translateX: "-24px" }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}>
                        <img
                          src={iconQuote}
                          alt=" icono de cita"
                          className=" max-h-32 mb-[-24px]  sm:mb-0 sm:mt-[-24px] "
                        />
                        <div
                        >
                          <p className=" text-base font-medium max-w-xs">
                            {cliente.quote}
                          </p>
                          <p className=" text-sm italic">~ {cliente.autor}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </>
              );
            })}
          </>
          <img
            src={iconSliderR}
            alt=" icono de ir a la izquierda"
            className=" max-w-[48px] cursor-pointer justify-self-start opacity-60 hover:opacity-100 hover-filterA active:scale-[.9] row-start-3 sm:row-start-1 "
            onClick={nextSlide}
          />
          <div className="flex justify-self-center col-span-3 gap-x-4 col-start-1 row-start-2 row items-center">
            {Array.from({ length: length }).map((item, index) => (
              <div
                onClick={() => moveDot(index)}
                className={`${
                  current === index ? "bg-primary" : "bg-gray-400"
                } h-[12px] w-[12px] rounded-full cursor-pointer`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Clientes;

import React, { useState } from "react";
import { iconSliderL, iconSliderR, iconQuote } from "../assets";
import { clientes } from "../constants/index";

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
        <h2 className=" text-4xl font-semibold text-primary text-center">
          ¿Qué dicen mis clientes?
        </h2>

        <div className=" grid grid-cols-3 mt-16 px-0 sm:gap-x-6 gap-y-8 sm:grid-cols-[1fr_max-content_1fr] sm:items-center ">
          <img
            src={iconSliderL}
            alt=""
            className=" max-w-[48px] cursor-pointer opacity-1 justify-self-end "
            onClick={prevSlide}
          />
          <>
            {clientes.map((cliente, index) => {
              return (
                <>
                  {index === current && (
                    <div className=" bg-bgPrimary p-12  sm:p-10 rounded-xl mx-8 flex flex-col sm:flex-row items-center gap-x-4 row-start-1 col-span-3 sm:col-start-2 sm:col-span-1 min-h-[180px]">
                      <div className=" rounded-full overflow-hidden w-[180px] sm:w-[90px]  flex-grow-0 ">
                        <img src={cliente.img} alt="" className=" " />
                      </div>
                      <div className=" flex flex-col sm:flex-row flex-shrink-1 min-h-[220px] sm:min-h-fit  sm:flex-grow-0 items-start justify-start gap-y-4 sm:gap-y-0 sm:gap-x-2 sm:mt-0 ">
                        <img
                          src={iconQuote}
                          alt=""
                          className=" max-h-32 mb-[-24px]  sm:mb-0 sm:mt-[-24px] "
                        />
                        <p className=" text-base font-medium max-w-xs">
                          {cliente.quote}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </>
          <img
            src={iconSliderR}
            alt=""
            className=" max-w-[48px] cursor-pointer justify-self-start "
            onClick={nextSlide}
          />
          <div className="flex justify-self-center col-span-1 gap-x-4 col-start-2 row-start-2 items-center">
            {Array.from({ length: length }).map((item, index) => (
              <div
                onClick={() => moveDot(index)}
                className={`${
                  current === index ? "bg-gray-800" : "bg-gray-400"
                } h-[12px] w-[12px] rounded-full cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;

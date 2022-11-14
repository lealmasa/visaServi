import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";



import { bgImage, iconPlane, heroPlane } from "../assets";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const movingPlane = {
    transform: `translateY(${offsetY * -0.5}px) scale(${offsetY * 0.003 + 1})`,
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  function movePlane() {
    if (windowSize.innerWidth > 480) {
      return movingPlane;
    } else return null;
  }

  return (
    <div>
      <motion.div
        className={` bg-img h-[540px] bg-cover sm:h-[550px] bg-center selection:justify-start rounded-xl sm:rounded-lg px-6 py-8 sm:px-16 sm:py-24 flex flex-col gap-y-6 overflow-hidden relative`}
        initial={{ opacity: 0, translateY: "12px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className=" flex flex-col gap-y-2 justify-start sm:justify-between "
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2, duration: 0.9, type: "tween" }}
        >
          <h1 className=" sm:text-[2rem]  text-2xl text-center font-medium leading-tight  text-slate-100 ">
            Asesoria y tramitación profesional{" "}
            <br className=" sm:block hidden"></br> de visados internacionales y{" "}
            <br className=" sm:block hidden"></br> nacionales en Ecuador.
          </h1>
          <p className=" text-sm text-center text-white ">
            Gracias a nuestra labor cientos de familia han hecho realidad <br className=" sm:block hidden"></br>el sueño de viajar legalmente
          </p>
        </motion.div>
        <motion.div
        className=" z-10"
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <HashLink
            smooth
            to="#Contacto"
            className=" flex gap-x-4  sm:pr-[16px] sm:pl-[20px] py-[14px] justify-center items-center  sm:max-w-[314px] text-neutral-100 text-sm drop-shadow-xl cursor-pointer mx-auto  px-2 group  realtive isolate"
          >

          <div className=" absolute rounded-md  bg-primary  w-full h-full z-[-998] group-hover:scale-[1.02] group-focus:scale-[.98] transition-all .3s ease-in-out"></div>
          <div className=" absolute rounded-md  bg-primary  w-full h-full z-[-999]  group-focus:scale-[.98] transition-all .3s ease-in-out group-hover:blur"></div>
          <a className="text-center leading-[1.4rem] group-focus:scale-[.98] transition-all .3s ease-in-out">
            Cumple tu sueños y viaje Seguro
          </a>
          <div className=" overflow-hidden w-[32px] ">
            <img
              src={iconPlane}
              alt="icono de avion"
              className=" h-6 group-hover:rotate-12 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-all .5s ease-in-out group-focus:rotate-[18deg] group-focus:translate-x-10 group-focus:translate-y-[-20px]"
            />
          </div>
          </HashLink>
        </motion.div>
        <motion.div
          className=" h-[1px]  absolute bottom-[210px] left-0 right-0"
          initial={{ translateY: "180px", scale: 0.6 }}
          animate={{ translateY: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
        >
          <img
            src={heroPlane}
            alt="imagen de avion en el hero"
            id="hero-plane"
            style={movePlane()}
            className={` mx-auto w-[420px]`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

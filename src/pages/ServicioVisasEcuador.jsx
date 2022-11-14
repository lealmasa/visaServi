import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

import { Helmet} from "react-helmet-async"

import { Hero_extra, ServicioDescCallouts } from "../components";

import {
  altHeroData,
  serviciosEcuador,
  servicesLocations,
  traduccionInfo,
} from "../constants";

export const ServicioVisasEcuador = () => {
  const { id } = useParams();
  console.log(id)

 


  return (
    <>

      <section className={` ${styles.flexStart}`}>
        <div className={` ${layout.section}`}>
          <motion.h1
            className={` ${styles.heading2}   mt-10  `}
            initial={{ opacity: 0, translateY: "12px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.div
            className={` ${layout.sectionCard}  mt-8 `}
            initial={{ opacity: 0, translateY: "12px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Hero_extra page={altHeroData[1]} />
            <div className={` mt-12  }`}>
              {serviciosEcuador.map((visaInfo, id) => (
                <ServicioDescCallouts
                  key={id}
                  {...visaInfo}
                  page={altHeroData[1]}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicioVisasEcuador;

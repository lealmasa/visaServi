import { ServiciosCards, Contacto, Footer } from "../components";

import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const ServiciosP = () => {
  return (
    <>
      <Helmet>
        <title>VisaServi | Servicios</title>
        <meta
          name="description"
          content="Conoce información necesaria para tus trámites migratorios, reserva de paquetes turísticos o traducciones."
        />
        <meta
          name="keywords"
          content="visas, visado, Ecuador, traducciones de Documentos, asesoría de viajes, Estados Unidos, Europa, Canada, Reino Unido, Mexico "
        />
      </Helmet>
      <section className={`${styles.flexStart}`}>
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
          <ServiciosCards />
        </div>
      </section>
    </>
  );
};

export default ServiciosP;

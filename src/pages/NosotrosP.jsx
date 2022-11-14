import {
  Footer,
  Hero_extra,
  Contacto,
  NosotrosDesc,
  NosotrosGallery,
} from "../components";
import { altHeroData } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const NosotrosP = () => {
  return (
    <>
      <Helmet>
        <title>VisaServi | Nosotros</title>
        <link rel="canonical" href="/Nosotros" />
      </Helmet>
      <div className={`${styles.flexStart}`}>
        <div className={` ${layout.section}`}>
          <section>
            <motion.h1
              className={` ${styles.heading2}   mt-10  `}
              initial={{ opacity: 0, translateY: "12px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              Quienes somos?
            </motion.h1>
            <motion.div
              className={` ${layout.sectionCard} mt-8`}
              initial={{ opacity: 0, translateY: "12px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Hero_extra page={altHeroData[4]} />
            </motion.div>
          </section>
          <section>
            <motion.h2
              className={` ${styles.heading2} mt-16  `}
              initial={{ opacity: 0, translateY: "12px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              Conocenos Mejor
            </motion.h2>
            <motion.div
              className={` ${layout.sectionCard} mt-8`}
              initial={{ opacity: 0, translateY: "12px" }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <NosotrosGallery />
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default NosotrosP;

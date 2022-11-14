import { ServiciosCards } from "../components";
import styles from "../style";
import { motion } from "framer-motion";

const Servicios = () => (
  <div className=" mt-20 ">
    <motion.div
      className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-24 justify-between"
      initial={{ opacity: 0, translateY: "12px" }}
      whileInView={{ opacity: 1, translateY: "0" }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className={`${styles.heading2}`}>Servicios</h2>
    </motion.div>
    <ServiciosCards />
  </div>
);

export default Servicios;

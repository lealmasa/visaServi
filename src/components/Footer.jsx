import { logoDark, iconGoTop } from "../assets";
import styles, { layout } from "../style";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.div
    className={` ${styles.flexStart}`}
    initial={{ opacity: 0, translateY: "12px" }}
    whileInView={{ opacity: 1, translateY: "0" }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <div
      className={` ${layout.section} gap-y-10 px-4 pt-12 pb-12  sm:py-8 border-t-2 border-white grid grid-cols-[2fr_1fr] sm:grid-cols-3 sm:grid-rows-1 `}
    >
      <img src={logoDark} alt="logo de visaServi" className=" max-h-[100px] sm:max-h-[100px]" />
      <HashLink
        to="#NavBar"
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
        className=" justify-self-center  self-center flex flex-col-reverse sm:items-center  hover:text-primary parent group relative"
      >
        <span className="">Ir arriba</span>
        <span
          className=" 
                       w-0 group-hover:w-full group-hover:transition-all ease-in-out duration-300  absolute left-0 -bottom-1 h-[2px] bg-primary "
        ></span>
        <img
          src={iconGoTop}
          alt="icono para volver a arriba"
          className="  w-[56px] sm:w-[32px] hover-filterUp"
        />
      </HashLink>
      <div className=" flex-col text-center sm:text-right text-sm col-span-2 self-center sm:col-span-1 sm:col-start-3 sm:row-start-1">
        <p>Copyright © 2022 Visa Servi.</p>
        <p>Desarrollado por @msbt</p>
      </div>
    </div>
  </motion.div>
);

export default Footer;

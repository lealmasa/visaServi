import { iconLink } from "../assets";

import { Link } from "react-router-dom";

import { services } from "../constants/index";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const ServiciosCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 sm:mt-16">
      {services.map((service, index) => (
        <motion.div
          className={` ${layout.itemCard} flex flex-col  gap-4`}
          initial={{ opacity: 0, translateY: "12px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 0.5, delay: .1 }}
          viewport={{ once: true }}
        >
          <div key={service.id} className=" flex items-center gap-x-4">
            <div className={`${service.bg} p-5 rounded-xl`}>
              <motion.img
                src={service.icon}
                alt="servicio icono"
                className=" max-w-[24px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.p className=" text-base leading-tight font-semibold"
              initial={{ opacity: 0, translateX: "-24px" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}>
                {service.title}
              </motion.p>
            </div>
          </div>
          <motion.p className=" text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          >{service.subtitle}</motion.p>
          <Link
            to={`/Servicios/${service.id}`}
            className="group parent flex justify-end ml-auto items-center  mt-auto cursor-pointer"
          >
            <div className=" relative">
              <motion.span
                className=" block text-sm font-medium group-hover:text-primary text-gray-600"
                initial={{ opacity: 0, translateX: "24px" }}
                whileInView={{  opacity: 1, translateX: 0 }}
                transition={{ duration: .3, delay: .2}}
                viewport={{ once: true }}
              >
                Mas información
              </motion.span>
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
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiciosCards;

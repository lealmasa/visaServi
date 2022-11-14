import { elegirnos } from "../constants/index";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Elegirnos = () => (
  <div className=" mt-0 sm:pt-16">
    <motion.div
      className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-24 justify-between"
      initial={{ opacity: 0, translateY: "12px" }}
      whileInView={{ opacity: 1, translateY: "0" }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className={` ${styles.heading2}`}>¿Por qué elegirnos?</h2>
      <p className=" text-sm">
        Desde el primer contacto con nosotros, nuestros asesores migratorios
        manejarán su solicitud paso a paso con gran cuidado y atención. Le
        brindaran una atención personalizada con toda la información y asesoría
        necesaria para su trámite migratorio, reserva de paquetes turísticos o
        traducciones.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 sm:mt-16">
      {elegirnos.map((elegirnos) => (
        <motion.div
          className={` ${layout.itemCard} flex flex-col gap-4`}
          initial={{ opacity: 0, translateY: "12px" }}
          whileInView={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div key={elegirnos.id} className=" flex items-center gap-x-4">
            <div className={`${elegirnos.bg} p-5 rounded-xl`}>
              <motion.img
                src={elegirnos.icon}
                alt="servicio icono"
                className=" max-w-[24px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <div className=" flex flex-col">
              <motion.p
                className=" text-base leading-tight font-semibold"
                initial={{ opacity: 0, translateX: "-24px" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {elegirnos.title}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Elegirnos;

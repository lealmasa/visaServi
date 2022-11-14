import { nosotrosDesc } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";


const NosotrosDesc = () => (
  <motion.div
    className="flex flex-col sm:flex-row gap-4 sm:gap mt-8"
    initial={{ opacity: 0, translateY: "12px" }}
    whileInView={{ opacity: 1, translateY: "0" }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
  >
    {nosotrosDesc.map((nosotros, index) => (
      <div className={`" flex  ${layout.itemCard}`}>
        <div className=" flex flex-col" key={nosotros.id}>
          <div className=" max-w-fit bg-green  grid place-items-center rounded-lg p-4">
            <img src={nosotros.img} alt="Imagen del equipo de visaServi" className=" w-[24px] h-[24px]" />
          </div>
          <h3 className=" font-semibold mt-2">{nosotros.title}</h3>
          <p className=" text-sm">{nosotros.desc}</p>
        </div>
      </div>
    ))}{" "}
  </motion.div>
);

export default NosotrosDesc;

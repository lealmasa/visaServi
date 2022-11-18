import styles, { layout } from "../style";
import { contact, info } from "../constants/index";
import { iconLocationRed } from "../assets";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const form = useRef();
  const sendButton = (e) => {
    e.preventDefault();
    {sendEmail}
    {notify}

  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vom6g1v",
        "template_djrtuyg",
        form.current,
        "_Wj-QZ7diM_kr2xlq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  const notify = () =>
    toast.success("Enviado, gracias por comunicarte con nosotros!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <div
      className={`${layout.section} grid grid-cols-1 sm:grid-cols-2 grid-rows-[1fr_fr_2fr]  sm:gap-x-8 gap-y-6 sm:gap-y-12`}
    >
      <motion.h2
        className=" text-lg text-white text-center col-span-2"
        initial={{ opacity: 0, translateY: "12px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        ¿Ya estás listo para viajar o tienes alguna duda?
      </motion.h2>
      <motion.div
        className=" row-start-2 sm:w-[100%] "
        initial={{ opacity: 0, translateY: "12px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h3 className=" text-xl text-[#A58537] mb-4">Contactanos por:</h3>
        <div className={`${layout.itemCard} flex flex-col gap-y-6`}>
          <div className=" flex justify-center gap-x-6 relative isolate">
            {contact.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                className=" relative isolate group active:scale-95 transition-all .3 ease-in-out"
              >
                <div
                  key={social.id}
                  className={`${social.bg} grid place-content-center rounded-lg w-[40px] h-[40px] cursor-pointer `}
                >
                  <img
                    src={social.icon}
                    alt="icono de redes sociales"
                    className="  h-6"
                  ></img>
                </div>

                <div
                  className={`${social.bg} absolute left-0 top-0 rounded-lg w-[40px] h-[40px] z-[-99] transition-all .3s ease-in group-hover:blur opacity-60`}
                ></div>
              </a>
            ))}
          </div>
          <div className=" flex flex-col gap-y-4">
            {info.map((info, index) => (
              <div className=" bg-[#E9EFFF] rounded-xl fle-x flex-col p-4 gap-4">
                <div key={info.id} className=" flex items-start  gap-x-4">
                  <img
                    src={info.icon}
                    alt="servicio icono"
                    className=" max-w-[24px]"
                  />
                  <p className=" mt-1 text-sm leading-tight whitespace-pre-line ">
                    {info.infoText}
                  </p>
                </div>
              </div>
            ))}
            <div className=" bg-[#E9EFFF] flex flex-col rounded-xl p-4 gap-y-4">
              <div className=" flex items-start gap-x-4">
                <img
                  src={iconLocationRed}
                  alt="icono de locación"
                  className=" max-w-[24px]"
                />
                <p className=" text-sm  leading-tight mt-[3px] ">
                  Avenida Vicente Norero y Justino Cornejo, Sl 33, Mz 404,
                  detrás del Gobierno zonal de Guayaquil, frente del condominio
                  Isabella.
                </p>
              </div>

              <iframe
                className=" rounded"
                width="100%"
                height="250px"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31895.830781396202!2d-79.910520902381!3d-2.1617510392153823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d1ee9df0b19%3A0xe17b271dd0dc4bcc!2sVisaservi!5e0!3m2!1sen!2sve!4v1667513514700!5m2!1sen!2sve"
                frameborder="0"
                scrolling="no"
                loading="lazy"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className=" row-start-3 sm:row-start-2 w-[100%]"
        initial={{ opacity: 0, translateY: "32px" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className=" text-xl text-[#A58537] mb-4">Envianos un Mensaje</h3>
        <div className={`${layout.itemCard}`}>
          <form
            ref={form}
            onInput= {sendButton}

            className=" flex flex-col gap-y-4"
          >
            <div>
              <label className=" text-sm text-gray-500" htmlFor="nombre">
                Su nombre
              </label>
              <input
                className=" focus:border-primary border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block"
                type="text"
                name="user_name"
                id="nombre"
                onChange={(event) => setNombre(event.target.value)}
                value={nombre}
                required
              />
            </div>

            <div>
              <label className=" text-sm text-gray-500" htmlFor="email">
                Su Correo
              </label>
              <input
                className=" peer focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:border-pink-500 invalid:text-pink-600 focus:border-primary border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block"
                name="user_email"
                id="email"
                type="email"
                onChange={(event) => setCorreo(event.target.value)}
                value={correo}
              />
              <p class="peer-invalid:mt-2 mt-[-16px] invisible peer-invalid:visible text-pink-600 text-sm">
                Verifica que tu correo sea valido
              </p>
            </div>
            <div>
              <label className=" text-sm text-gray-500" htmlFor="mensaje">
                Su mensaje
              </label>
              <textarea
                className=" focus:border-primary border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none block min-h-[120px]"
                type="text"
                name="message"
                id="mensaje"
                onChange={(event) => setMensaje(event.target.value)}
                value={mensaje}
                required

              />
            </div>
            <input
              className=" bg-primary hover:scale-[1.03] active:scale-[.95] 300s ease-in-out rounded flex gap-x-4  sm:pr-[16px] sm:pl-[20px] py-[14px] justify-center items-center content-center  sm:max-w-full text-neutral-100 text-sm drop-shadow-xl cursor-pointer mt-4  px-2 group  relative isolate"
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </motion.div>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default Contacto;

import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { logo, iconBurger, iconClose } from "../assets";
import { HashLink } from "react-router-hash-link";
import { navLinks, navLinksMobile } from "../constants/index";
import { contact } from "../constants/index";
import { useParams } from "react-router-dom";
import "../index.css";
import { services } from "../constants/index";
import { motion } from "framer-motion";
import { layout } from "../style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();

  return (
    <nav className="flex py-4 justify-between  sm:px-[9rem] px-4">
      <NavLink exact to={"/"} end>
        <img src={logo} alt="logo" className="h-8" />
      </NavLink>

      <div className=" justify-between sm:flex hidden flex-1">
        <ul className="list-none flex justify-center items-center flex-1 gap-x-12 mr-auto text-sm text-gray-400">
          {navLinks.map((nav, index) => (
            <>
              <li key={nav.index} className=" group relative ">
                <NavLink exact to={nav.link} end>
                  {nav.title}
                </NavLink>
                <span
                  className=" 
                       w-0 group-hover:w-full group-active:scale-x-[.9] group-hover:transition-all ease-in-out duration-300  absolute left-0 -bottom-1 h-[2px] bg-primary "
                ></span>
              </li>
            </>
          ))}
          <li className="  group relative z-40 peer">
            <NavLink exact to="/Servicios" className=" peer">
              <p className=" "> Servicios</p>
            </NavLink>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full group-hover:transition-all ease-in-out duration-300 group-active:scale-x-[.9] "></span>
            <div
              className=" absolute left-[-220px] hidden sm:visible peer-hover:flex hover:flex
         w-[540px] 
         flex-col"
            >
              <div class=" mt-8 grid grid-cols-2 p-1 bg-white drop-shadow-xl gap-1 parentB rounded-xl">
                {services.map((service, index) => (
                  <NavLink
                    to={`/Servicios/${service.id}`}
                    className={` ${layout.itemCard} flex flex-col hover:bg-[#E3E5E8]`}
                    initial={{ opacity: 0, translateY: "12px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      key={service.id}
                      className=" flex items-center gap-x-4"
                    >
                      <div className={`${service.bg} p-4 rounded`}>
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
                        <motion.p
                          className=" text-xs leading-tight"
                          initial={{ opacity: 0, translateX: "-24px" }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {service.title}
                        </motion.p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
          <li className="  group relative z-40 peer">
            <HashLink smooth to="#Contacto" className=" peer">
              <span className=" "> Contacto </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary group-hover:w-full group-hover:transition-all ease-in-out duration-300 group-active:scale-x-[.9] "></span>
            </HashLink>
            <div
              className=" absolute left-[-220px] hidden peer-hover:flex hover:flex
         w-[540px] 
         flex-col"
            ></div>
          </li>
        </ul>

        <ul className="list-none flex justify-end items-center  gap-x-5">
          {contact.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              className=" relative isolate group active:scale-95"
            >
              <div
                key={social.id}
                className={`${social.bg} grid place-content-center rounded-lg w-[32px] h-[32px] cursor-pointer `}
              >
                <img
                  src={social.icon}
                  alt="icono de redes sociales"
                  className="  h-6"
                ></img>
              </div>

              <div
                className={`${social.bg} absolute left-0 top-0 rounded-lg w-[32px] h-[32px] z-[-99] scale-90   group-hover:blur opacity-60`}
              ></div>
            </a>
          ))}
        </ul>
      </div>

      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? iconClose : iconBurger}
          alt="menu"
          className=" h-8 w-8 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-10 bg-black absolute top-20 right-0  mx-4 min-w-[140px] rounded-xl sidebar z-50 `}
        >
          <div className=" justify-between flex flex-col flex-1 gap-y-8">
            <ul className="list-none flex flex-col justify-center items-center flex-1 gap-y-4 text-white">
              {navLinksMobile.map((nav, index) => (
                <li>
                  <NavLink
                    exact
                    to={nav.link} end
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {nav.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <HashLink
                  smooth
                  to="#Contacto"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  Contacto
                </HashLink>
              </li>
            </ul>

            <ul className="list-none flex justify-center items-center  gap-x-6">
              {contact.map((social, index) => (
                <a
                  href={social.link}
                  target="_blank"
                  className=" relative isolate group active:scale-95"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  <div
                    key={social.id}
                    className={`${social.bg} grid place-content-center rounded-lg w-[32px] h-[32px] cursor-pointer `}
                  >
                    <img
                      src={social.icon}
                      alt="icono de redes sociales"
                      className="  h-6"
                    ></img>
                  </div>

                  <div
                    className={`${social.bg} absolute left-0 top-0 rounded-lg w-[32px] h-[32px] z-[-99] scale-90   group-hover:blur opacity-60`}
                  ></div>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

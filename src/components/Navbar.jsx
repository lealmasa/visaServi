import { useState } from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import {logo, iconBurger, iconClose} from "../assets";


import {navLinks} from "../constants/index";
import {contact} from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-4 justify-between items-center sm:px-[9rem] px-4">
        <img src={logo} alt="logo" className="h-8" />
        
        <div className=" justify-between sm:flex hidden flex-1">
            <ul className="list-none flex justify-center items-center flex-1 gap-x-12 mr-auto text-sm">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className=" "
                    >
                        <NavLink 
                        to={nav.link}>
                            {nav.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            <ul className="list-none flex justify-end items-center  gap-x-5">
                {contact.map((social, index) => (
                    <div
                    key={social.id}
                    className={`${social.bg} p-1 rounded-lg`}
                    >
                        <img 
                        src={social.icon}
                        className= " cursor-pointer h-6">
                        </img>

                    </div>
                ))}
            </ul>
        </div>
        
        <div  className=" sm:hidden flex flex-1 justify-end items-center">
            <img 
            src= {toggle ? iconClose : iconBurger } 
            alt="menu"
            className=" h-8 w-8 object-contain"
            onClick={() => setToggle((prev) => !prev)} />

            <div
                className= {`${toggle ? 'flex' : 'hidden'} p-10 bg-black absolute top-20 right-0 my-2 mx-4 min-w-[140px] rounded-xl sidebar `}
                >
                <div className=" justify-between flex flex-col flex-1 gap-y-8">
                    <ul className="list-none flex flex-col justify-center items-center flex-1 gap-y-4 text-white">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className=" "
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
            
                    <ul className="list-none flex justify-center items-center  gap-x-6">
                    {contact.map((social, index) => (
                    <div
                    key={social.id}
                    className={`${social.bg} p-1 rounded-lg`}
                    >
                        <img 
                        src={social.icon}
                        className= " cursor-pointer h-6">
                        </img>

                    </div>
                ))}
                    </ul>
                 </div>
                    
            </div>
        </div>

    </nav>
  )
}

export default Navbar
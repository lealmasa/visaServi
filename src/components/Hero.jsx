import React from 'react'

import Search from './Search';

import { bgImage, iconPlane} from "../assets";

const Hero = () => {

  return (
    <div>
        <div className={` bg-img h-[540px] bg-cover sm:h-[510px] bg-center  justify-between sm:justify-start rounded-xl sm:rounded-lg px-6 py-8 sm:px-16 sm:py-24 flex flex-col gap-y-6`}>
            <div className=' flex flex-col gap-y-2'> 
                <h1 className=' text-4xl font-semibold leading-tight'>
                Asesoría Profesional en  <br className=' sm:block hidden' ></br> trámites de Visa Americana.
                </h1>
                <p>
                Gracias a nuestro labor, cientos de familias han <br className=' sm:block hidden'></br>  hecho su sueño realidad de viajar legalmente.
                </p>
            </div>
            <div>

            <div className=' flex gap-x-4 sm:px-[22px] py-[14px] justify-center items-center  sm:max-w-[314px] bg-primary rounded-md text-neutral-100 text-sm drop-shadow-xl cursor-pointer transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'>
                <a className='text-center leading-[1.4rem] '>
                Cumple tu sueños y viaje Seguro
                </a>
                <img src={iconPlane} alt="" className=' h-6'/>
            </div>
            </div>
        </div>

        <Search />
        
    </div>
  )
}

export default Hero


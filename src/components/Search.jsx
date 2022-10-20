import React from 'react'

import {iconPlus, iconSearch} from "../assets";

const Search = () => {
  return (
    <div className=' z-10 bg-bgPrimary py-10 px-8 sm:px-12 sm:absolute  top-[530px] left-0 right-0 mx-auto max-w-[720px] rounded-lg sm:shadow-2xl flex flex-col sm:flex-row justify-between gap-y-8 sm:gap-y-0'>
        <h2 className=' text-lg  font-semibold leading-[120.5%] my-auto'>
        Encuenta la <br className=' sm:block hidden'></br> información que <br className=' sm:block hidden' ></br> necesitas para tu viaje
        </h2>
        <div className=' w-[250px] sm:w-[1px] h-[1px] sm:h-[72px] bg-gray-300 rounded-full mx-auto sm:my-auto'></div>
        <div className='flex flex-shrink-0 sm:items-center items-start justify-between gap-x-8 sm:gap-x-16 gap-y-6 sm:gap-y-0 flex-col sm:flex-row'>
            <div className=' flex flex-col gap-y-2'>
                <h3 className=' font-semibold'>
                    Locación
                </h3>
                <div className='flex gap-x-2 cursor-pointer'>
                    <p>
                        Elija su destino
                    </p>
                    <img src={iconPlus} alt="expandir" />
                </div>
            </div>
            <div  className=' p-6 bg-primary flex justify-center items-center rounded-2xl shadow-2xl w-[100%] sm:w-[72px] cursor-pointer'>
                <img src={iconSearch} alt="busqueda" className=' max-h-[24px] '/>
            </div>
        </div>
    </div>
  )
}

export default Search
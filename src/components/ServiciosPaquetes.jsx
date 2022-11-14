import React from 'react'

const ServiciosPaquetes = (img, desc, iconLink, title) => {
  return (
    <div className=" bg-[#FCEBDC] first:mt-24 mt-4 rounded-xl flex flex-col sm:px-12 p-8 group">
        <div
          className={` flex flex- sm:flex-row gap-x-4 group-odd:flex-row-reverse`}
        >
          <div className=" max-w-[320px] max-h-[320px]">
            <img
              className=" w-[100%] rounded-md object-fill aspect-video"
              src={img}
              alt=""
            />
          </div>
          <div className=" flex flex-col">
            <h3 className=" font-bold text-primary">{title}</h3>
            <p className=" text-sm">{desc}</p>
            <div className=" flex justify-end group-odd:justify-start align-bottom mt-auto">
              <a className="flex  group-odd:ml-0 ml-auto items-center  mt-auto cursor-pointer">
                <span className=" text-sm font-medium">Mas información</span>
                <img src={iconLink} alt="" className=" opacity-80 " />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ServiciosPaquetes
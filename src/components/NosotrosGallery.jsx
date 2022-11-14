import React from "react";
import { imgNosotrosGallery1, imgNosotrosGallery2, imgNosotrosGallery3, imgNosotrosGallery4 } from "../assets";

const NosotrosGallery = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[1fr_fit-content(50%)_1fr] gap-4">
      <img
      className=" object-cover w-full h-full rounded" 
      src={imgNosotrosGallery1} 
      alt="imagen del equipo de visaServi 1" />
      <img
      className=" sm:row-span-2 object-cover  h-full rounded" 
      src={imgNosotrosGallery2} 
      alt="imagen del equipo de visaServi 2" />
      <img
      className=" object-cover  rounded" 
      src={imgNosotrosGallery3} 
      alt="imagen del equipo de visaServi 3" />
      <img
      className=" sm:col-span-2 object-cover w-full h-full rounded" 
      src={imgNosotrosGallery4} 
      alt="imagen del equipo de visaServi 4" />
    </div>
  );
};

export default NosotrosGallery;

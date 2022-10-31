import React from "react";
import { imgNosotrosGallery1, imgNosotrosGallery2, imgNosotrosGallery3, imgNosotrosGallery4 } from "../assets";

const NosotrosGallery = () => {
  return (
    <div className=" grid grid-cols-2 grid-rows-[1fr_fit-content(50%)_1fr] gap-4 p-10">
      <img
      className=" object-fill w-full h-full rounded" 
      src={imgNosotrosGallery1} 
      alt="" />
      <img
      className=" row-span-2 object-fill w-full h-full rounded-sm" 
      src={imgNosotrosGallery2} 
      alt="" />
      <img
      className=" object-fill w-full h-full rounded" 
      src={imgNosotrosGallery3} 
      alt="" />
      <img
      className=" col-span-2 object-fill w-full h-full rounded" 
      src={imgNosotrosGallery4} 
      alt="" />
    </div>
  );
};

export default NosotrosGallery;

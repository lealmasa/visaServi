import { Button } from "../components";

import {Helmet} from "react-helmet-async"

import { useParams } from "react-router-dom"

const Hero_extra = ({ page }) => {
  const { id } = useParams();

  return (
    <>
    <Helmet>
        <title>VisaServi | {page.titlePage}</title>
        <link rel="canonical" href={id} />
        <meta name="description" content={page.descripcion}/>
      </Helmet>
      <div className=" grid  sm:grid-cols-[fit-content(50%)_1fr] sm:grid-rows-[fit-content(50%)_fit-content(50%)_1fr] sm:gap-x-8 gap-y-4">
        <div className="max-w-[410px] sm:min-h-[410px] min-h-[280px] row-span-3">
          <img
            src={page.img}
            alt="Hero"
            className="  object-cover w-full h-[280px] sm:h-full rounded-md "
          />
        </div>
        <h2 className=" text-lg leading-tight font-semibold">{page.tile}</h2>
        <p className=" text-sm whitespace-pre-line">{page.subtitle}</p>
        <div className=" sm:self-start mt-4 sm:justify-self-end">
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Hero_extra;

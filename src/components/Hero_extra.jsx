import { Button } from "../components";

const Hero_extra = ({ page }) => {
  console.log(page.tile);
  
  return (
    <>
      <div className=" grid grid-cols-[fit-content(50%)_1fr] grid-rows-[fit-content(50%)_1fr_0.5fr] gap-x-8 gap-y-4">
        <img
          src={page.img}
          alt=""
          className=" rounded-md max-w-[340px] row-span-3"
        />
        <h2 className=" text-lg leading-tight font-semibold">{page.tile}</h2>
        <p className=" text-sm">{page.subtitle}</p>
        <div className=" self-end justify-self-end">
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Hero_extra;

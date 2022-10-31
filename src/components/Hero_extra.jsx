import { Button } from "../components";

const Hero_extra = ({ page }) => {
  console.log(page.tile);
  
  return (
    <>
      <div className=" sm:grid flex flex-col sm:grid-cols-[fit-content(50%)_1fr] sm:grid-rows-[fit-content(50%)_fit-content(50%)_1fr] gap-x-8 gap-y-4">
        <img
          src={page.img}
          alt=""
          className=" rounded-md max-w-[340px] row-span-3"
        />
        <h2 className=" text-lg leading-tight font-semibold">{page.tile}</h2>
        <p className=" text-sm">{page.subtitle}</p>
        <div className=" self-start mt-4 justify-self-end">
          <Button></Button>
        </div>
      </div>
    </>
  );
};

export default Hero_extra;

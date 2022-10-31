import { nosotrosDesc } from "../constants";

const NosotrosDesc = () => (
  <div className="flex gap-x-8 mt-8">
    {nosotrosDesc.map((nosotros, index) => (
      <div className=" flex  bg-bgPrimary p-8 rounded-lg">
        <div className=" flex flex-col" key={nosotros.id}>
          <div className=" max-w-fit bg-green  grid place-items-center rounded-lg p-4">
            <img 
            src={nosotros.img} 
            alt="" 
            className=" w-[24px] h-[24px]"
            />
          </div>
          <h3 className=" font-semibold mt-2">{nosotros.title}</h3>
          <p className=" text-sm">{nosotros.desc}</p>
        </div>
      </div>
    ))}{" "}
  </div>
);

export default NosotrosDesc;

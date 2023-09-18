import React from "react";
import ProductMaker from "./product/ProductMakerScroll";
import TopProductMaker from "./product/ProductMakerCol";
import carbg from "../public/assets/carbg.jpeg";
import Image from "next/image";



const TopSails = ({ dataTop }) => {
  return (
    <div>
      <div className=" md:mb-[8rem]  mb-[4rem]">
        <div className="w-full relative flex justify-end pr-10 mb-4">
          <h1 className=" w-12 border-t-4 border-b-4 md:text-xl">پرفروش</h1>
        </div>

        <TopProductMaker dataInfo={dataTop} />
      </div>
    </div>
  );
};

export default TopSails;

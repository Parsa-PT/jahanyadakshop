import React from "react";
import "./engineoil.css";
import Image from "next/image";
import engineoilpic from "../../public/assets/bestchoice/hgfdd_prev_ui.png";
import Link from "next/link";
import JahanYadakpic from '../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg'

const Engineoil = () => {
  return (
    <div className=" flex justify-center">
      <div className="enginbg w-[23rem] shadow-bestChoice sm:w-[35rem] h-[10rem] rounded-lg  sm:h-[15rem] lg:w-[50rem] flex justify-center relative items-center mb-16">
        <div className=" w-[5rem] sm:w-[8rem]  h-[6rem] sm:h-[10rem] bg-white dark:bg-slate-900 flex justify-center absolute z-20 left-0 top-0 rounded-br-2xl">
          <Image alt={JahanYadakpic} width={0} height={0} className=" bg-cover bg-center" src={engineoilpic} />
        </div>

        <div className=" w-[20rem] h-[6rem] sm:w-[30rem] sm:h-[10rem] text-white bg-gradient-to-br flex justify-center items-center from-black relative z-0 to-gray-700 opacity-80 ">
          <div className=" flex justify-end flex-col">
            <h1 className=" text-xs sm:text-sm md:text-lg mb-2 md:mb-5">بهترین روغن موتور خودرو را چگونه انتخاب کنیم؟</h1>
            <Link href='/bestchoicepage/engineoil'>
            <button className="py-3 px-4 w-full md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                مشاهده مطلب
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineoil;

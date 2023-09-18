import React from "react";
import Image from "next/image";
import Map from "../../public/assets/map.png";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#363636] font-lalezar pt-4 text-white dark:text-black  dark:bg-[#e4e4e4] w-full flex flex-col justify-center items-center overflow-hidden ">
      <div className=" flex justify-end  w-full items-center mb-2 mr-6">
      <h1>لینک های مفید</h1>
      </div>
        <div>
        <div className="w-full lg:h-[13rem] lg:w-[70rem] mb-10 px-5 lg:text-lg relative flex flex-row-reverse justify-between md:pl-20 md:pr-20 xl:pl-0 xl:pr-0 items-center ">
          <div className="text-end">
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو ۲۰۶</h1>
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو ۲۰۶</h1>
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو دنا</h1>
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو پراید</h1>
          </div>
          <div className="text-end mx-6">
          <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">رادیاتور سمند</h1>
          <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو ۲۰۶</h1>
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو دنا</h1>
            <h1 className=" mb-2 cursor-pointer hover:text-blue-500 text-sm sm:text-lg ">چراغ جلو پراید</h1>
          </div>
          <div>
            <Image
              placeholder="blur"
           
              alt="map"
              src={Map}
              className=" lg:w-40"
            />
          </div>
        </div>
        <div className="w-full lg:h-[13rem] lg:w-[70rem]  mb-5 lg:text-lg relative flex flex-row-reverse justify-between    md:pl-20 md:pr-20 xl:pl-0 xl:pr-0 items-center ">
          
          <div className="text-end">
            <h1 className=" mb-2">فروشگاه جهان یدک</h1>
            <h1 className=" mb-2">آدرس : بلوار ملاصدرا خیابان ابوذر</h1>
            <h1>تلفن : ۰۲۶۴۴۴۴۴۴</h1>
          </div>
          <div>
            <Image
              placeholder="blur"
           
              alt="map"
              src={Map}
              className=" lg:w-40"
            />
          </div>
        </div>
        </div>

        <div className=" text-white dark:text-black  flex justify-center w-full ">
          <div className=" flex flex-row-reverse items-center   w-[10rem] md:w-[16rem] xl:w-[24rem] p-1 h-[1.5rem]  border-t-2 dark:border-black rounded-md">
            <span>
              <AiOutlineCopyright className=" text-sm" />
            </span>
            <h1 className=" text-[0.39rem] md:text-[0.70rem] xl:text-[1rem]  mr-1">
              تمامی حقوق این سایت متعلق به فروشگاه جهان یدک میباشد
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

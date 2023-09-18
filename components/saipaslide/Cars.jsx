"use client";
import Image from "next/image";
import "./slide.css";
import pegue206 from "../../public/assets/slidephoto/206.png";
import logo206 from "../../public/assets/Peugeotpng.parspng.com-3.png";
import peraid from "../../public/assets/slidephoto/pars_prev_ui.png";
import shahin from "../../public/assets/slidephoto/shahin_prev_ui.png";
import Saipalogo from "../../public/assets/saipapng.parspng.com_.png";
import L90 from "../../public/assets/slidephoto/l90_prev_ui.png";
import L90Logo from "../../public/assets/l90-logo.png";
import pegue207 from "../../public/assets/slidephoto/207Car.png";
import Dena from "../../public/assets/slidephoto/دنا_prev_ui.png";
import Tara from "../../public/assets/slidephoto/taraa_prev_ui (1).png";
import IranaKhodroLogo from "../../public/assets/slidephoto/iran-khodro-symbol-logo-40AA05E686-seeklogo.com.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cars = [
  {
    id: 1,
    carbag: pegue207,
    logo: logo206,
    name: "پژو ۲۰۶",
  },
  {
    id: 2,
    carbag: Tara,
    logo: IranaKhodroLogo,
    name: "تارا",
  },
  {
    id: 3,
    carbag: Dena,
    logo: IranaKhodroLogo,
    name: "دنا",
  },
  {
    id: 4,
    carbag: shahin,
    logo: Saipalogo,
    name: "شاهین",
  },
  {
    id: 5,
    carbag: peraid,
    logo: logo206,
    name: "پژو پارس",
  },
  {
    id: 6,
    carbag: pegue206,
    logo: logo206,
    name: "پژو ۲۰۷",
  },
  {
    id: 7,
    carbag: L90,
    logo: L90Logo,
    name: "L90",
  },
];
const Cars2 = [
  {
    id: 1,
    carbag: pegue207,
    logo: logo206,
    name: "پژو ۲۰۶",
  },
  {
    id: 2,
    carbag: Tara,
    logo: IranaKhodroLogo,
    name: "تارا",
  },
  {
    id: 3,
    carbag: Dena,
    logo: IranaKhodroLogo,
    name: "دنا",
  },
  {
    id: 4,
    carbag: peraid,
    logo: Saipalogo,
    name: "پژو ۲۰۶",
  },
  {
    id: 5,
    carbag: pegue207,
    logo: logo206,
    name: "پژو ۲۰۷",
  },
  {
    id: 6,
    carbag: L90,
    logo: L90Logo,
    name: "L90",
  },
];

const SaipaSlide = ({ dataTop }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className=" flex justify-center">
      <div className="carousel p-10 lg:p-16 flex lg:w-[90rem] rounded-md  items-center   overflow-auto  scroll-smooth  shadow-md scrollbar-hide mb-12">
        {Cars.map((item , index) => {
          return (
            <div key={index}>
              <div className="bg flex justify-center items-center relative  m-4 md:w-[18rem] md:h-[8rem] w-[14rem] h-[6rem]">
                <div className=" text-white text-sm">
                  <p className="mb-1">{item.name}</p>
                  <button className=" px-1   md:px-6  inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    مشاهده
                  </button>
                </div>
                <div className="absolute top-5 z-10">
                  <Image src={item.logo} className=" w-9  " alt="test" />
                </div>
                <div>
                  <Image
                    data-aos="fade-left"
                    src={item.carbag}
                    alt="test"
                    className="w-[140px] -right-7 md:right-0  md:w-[180px] md:h-[120px] relative z-30 h-[101px]"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* <div>
       <div className="test flex justify-center items-center relative m-4 md:w-[18rem] md:h-[8rem]  w-[14rem] h-[6rem]">
          <div className=" text-white text-sm">
            <p className="mb-1">pegue206</p>
            <button className=" px-1   md:px-6  inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              مشاهده
            </button>
          </div>
          <div className="absolute top-5 z-10">
            <Image src={logo206} className=" w-9  " />
          </div>
          <div>
            <Image
              src={pegue206}
              className="w-[150px] relative z-30 h-[101px]"
            />
          </div>
        </div>
        <div className="test flex justify-center items-center relative  m-4 md:w-[18rem] md:h-[8rem] w-[14rem] h-[6rem]">
          <div className=" text-white text-sm">
            <p className="mb-1">pegue206</p>
            <button className=" px-1   md:px-6  inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              مشاهده
            </button>
          </div>
          <div className="absolute top-5 z-10">
            <Image src={logo206} className=" w-9  " />
          </div>
          <div>
            <Image
              src={pegue206}
              className="w-[150px] relative z-30 h-[101px]"
            />
          </div>
        </div>
        </div> 
        

        <div>
        <div className="test flex justify-center items-center relative m-4 md:w-[18rem] md:h-[8rem]  w-[14rem] h-[6rem]">
          <div className=" text-white text-sm">
            <p className="mb-1">pegue206</p>
            <button className=" px-1   md:px-6  inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              مشاهده
            </button>
          </div>
          <div className="absolute top-5 z-10">
            <Image src={logo206} className=" w-9  " />
          </div>
          <div>
            <Image
              src={pegue206}
              className="w-[150px] relative z-30 h-[101px]"
            />
          </div>
        </div>
        <div className="test flex justify-center items-center relative  m-4 md:w-[18rem] md:h-[8rem] w-[14rem] h-[6rem]">
          <div className=" text-white text-sm">
            <p className="mb-1">pegue206</p>
            <button className=" px-1   md:px-6  inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              مشاهده
            </button>
          </div>
          <div className="absolute top-5 z-10">
            <Image src={logo206} className=" w-9  " />
          </div>
          <div>
            <Image
              src={pegue206}
              className="w-[150px] relative z-30 h-[101px]"
            />
          </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default SaipaSlide;

"use client";
import Image from "next/image";
import KiaLogo from "../public/assets/KIA-logo.png";
import PeugeoLogo from "../public/assets/Peugeotpng.parspng.com-3.png";
import L90Logo from "../public/assets/l90-logo.png";
import IranKhodroLogo from "../public/assets/irankhodro.png";
import SaipaLogo from "../public/assets/saipapng.parspng.com_.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "./cardBlur/Card";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "@/context/cart";


const HomeComponent = () => {

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;


  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className=" w-full flex flex-col md:flex-row-reverse  md:justify-around md:items-center mb-40">
      <div className=" flex flex-col  gap-4 justify-center items-center md:text-xl md:items-end md:pt-20 mb-16 ">
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="ggboy text-2xl  lg:text-5xl md:text-3xl "
        >
          فروشگاه جهان یدک
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          className="ggboy lg:text-2xl md:text-xl"
        >
          فروشگاه توضیع لوازم یدکی خودرو
        </p>
        <div className="group  relative w-[7rem] ml-10 md:ml-0 h-[3.5rem]">
          <Link href='/productPage'>
            <button
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
              type="button"
              className="py-3 px-4  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              aria-label="product"
            >
              محصولات
            </button>
          </Link>
        </div>
      </div>

      <div className="  flex relative justify-center items-center">
        <div>
          <span className=" w-[10rem] h-[10rem]  xl:w-[18rem] lg:w-[13rem] lg:h-[13rem]  xl:h-[18rem] absolute -top-14 ml-40  xl:ml-[16rem] lg:ml-[16rem] rounded-full bg-[#A436FA]"></span>
          <span className=" w-[4.5rem] h-[4.5rem]   xl:w-[8.5rem] lg:w-[4.5rem] lg:h-[4.5rem]  xl:h-[8.5rem] absolute rounded-full ml-60  xl:ml-[27rem] lg:ml-[22rem] -bottom-5 bg-[#E77817]"></span>
          <span className=" w-[8rem] h-[8rem]  xl:w-[14.5rem] lg:w-[10rem] lg:h-[10rem]  xl:h-[14.5rem] absolute rounded-full bg-[#584CE3]"></span>
          <span className=" w-[5rem] h-[5rem]  xl:w-[9.5rem] lg:w-[6rem] lg:h-[6rem]  xl:h-[9.5rem] absolute -top-6 rounded-full bg-[#E31E24]"></span>
        </div>

        <div>
          <Card
            style={
              "w-[304px] shadow-cardShadow rounded-[20px]  h-[187px] backdrop-blur lg:w-[27rem] lg:h-[16rem] xl:w-[35rem] xl:h-[22rem] overflow-hidden p-5 relative"
            }
          >
            <Image
              alt="kialogo"
              className="w-20 xl:w-44 lg:w-[8rem] absolute  "
              src={KiaLogo}
              data-aos="fade-right"
              placeholder="blur"
              loading="lazy"
            />
            <Image
              alt="L90Logo"
              className="w-20 xl:w-44 lg:w-[8rem] absolute  bottom-5"
              src={L90Logo}
              data-aos="fade-right"
              placeholder="blur"
              loading="lazy"
            />
            <Image
              alt="PeugeoLogo"
              className="w-16 xl:w-36 lg:w-[6rem]  absolute  right-10"
              src={PeugeoLogo}
              data-aos="fade-left"
              placeholder="blur"
              loading="lazy"
            />
            <Image
              alt="SaipaLogo"
              className="w-16 xl:w-36 lg:w-[6rem]  absolute  right-10 bottom-5"
              src={SaipaLogo}
              data-aos="fade-left"
              placeholder="blur"
              loading="lazy"
            
            />
            <Image
              alt="IranKhodroLogo"
              className="w-16 xl:w-36 lg:w-[6rem]  absolute  right-[40%] lg:right-[37%] top-[30%] "
              src={IranKhodroLogo}
              data-aos="fade"
              placeholder="blur"
              loading="lazy"
            />
          </Card>
        </div>
      </div>


      
    </div>
  );
};

export default HomeComponent;

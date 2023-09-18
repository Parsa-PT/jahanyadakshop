"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ThemeButton from "../themeButton/ThemeButton";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { Store } from "@/context/cart";
import dynamic from "next/dynamic";
import Card from "../cardBlur/Card";
import Profile from "../profile/Profile";

const Navbar = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const loginIn = window.localStorage.getItem("loggedIn");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    //  const checklogin = localStorage.getItem('loggedIn')
    // setLoginIn(!checklogin)
  }, []);


  const Path = ()=>{
    location.assign('/cart')
  }

  return (
    <div>
      <div
        data-aos="fade-down"
        className=" flex justify-center lg:flex lg:justify-center font-lalezar "
      >
        <Card
          style={`flex justify-between shadow-cardShadow backdrop-blur rounded-[20px] p-3 mb-[3rem] lg:mb-[6rem] w-[23rem]  sm:w-[40rem] md:w-[45rem] lg:w-[65rem]  xl:w-[80rem] `}
        >
          <div>
            <Link href="/">
              <h1 className=" text-xl  md:text-2xl text-black  mt-2">
                جهان یدک
              </h1>
            </Link>
          </div>

          <div className=" flex flex-row-reverse items-center">
            <button
             onClick={Path}
              type="button"
              aria-label="cart"
              className="py-3 px-2  relative inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800"
            >
              {cartItems.length > 0 && (
                <>
                  <div className="ml-1 rounded-xl  absolute -top-2 right-0  bg-gray-200 px-1  text-green-600 text-xs font-bold">
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </div>
                </>
              )}
              <span>
                <AiOutlineShoppingCart />
              </span>
              سبد خرید
            </button>

            <div className=" cursor-pointer flex items-center ">
              <ThemeButton />

              <Profile />
            </div>
          </div>
        </Card>
      </div>


      <div>

      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

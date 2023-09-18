"use client";
import React, { useState } from "react";
import Card from "@/components/cardBlur/Card";
import './shipping.css';
import Checkout from "@/components/checkout/Checkout";
import jwtDecode from "jwt-decode";
import { AddShipping } from "@/data/requests";

const Shipping = () => {
  const shippingAddress = localStorage.getItem("shipping") ? JSON.parse(localStorage.getItem("shipping")) : {};


  const [address, setAddress] = useState(shippingAddress.address);
  const [nocode, setNocode] = useState(shippingAddress.nocode);
  const [city, setCity] = useState(shippingAddress.city);
  const [capital, setCapital] = useState(shippingAddress.capital);

  const ShippingHandle = async (e) => {
    e.preventDefault();

    const datainfo = localStorage.getItem("token");
    const decode = datainfo ? jwtDecode(datainfo) : {};

    const user = decode.id;

    let data = { address, nocode, city, user, capital };

    AddShipping(data);
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full font-lalezar ">
      <Checkout Step1={true} Step2={true} Step3={true} Step4={false} />

      <div className=" text-center">ثبت آدرس</div>
      <div className="bgtest w-[20rem] lg:w-[27rem] mt-4  h-[25rem] lg:h-[26rem] mb-4 shadow-registerShadow  rounded-md p-4">
        <Card
          style={
            "w-full shadow-cardShadow rounded-[20px] h-[23rem] lg:h-[24rem]  shadow-registerShadow  backdrop-blur-[3px]    overflow-hidden p-5 relative"
          }
        >
          <form onSubmit={ShippingHandle} dir="rtl">
            <label>شهر :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              required
              value={capital ? capital : ""}
              onChange={(e) => setCapital(e.target.value)}
            />
            <label> استان :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              required
              value={city ? city : ""}
              onChange={(e) => setCity(e.target.value)}
            />
            <label>آدرس :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              value={address ? address : ""}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label> کد پستی:</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              value={nocode ? nocode : ""}
              onChange={(e) => setNocode(e.target.value)}
            />
            <div>
              <button
                type="submit"
                className=" px-8 py-1  lg:py-2 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all  text-base dark:focus:ring-offset-gray-800"
              >
                ثبت
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Shipping;

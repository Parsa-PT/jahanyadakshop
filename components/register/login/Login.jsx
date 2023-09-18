"use client";
import React, { useState } from "react";
import Card from "@/components/cardBlur/Card";
import "./login.css";
import Link from "next/link";
import Checkout from "@/components/checkout/Checkout";
import { GetToken } from "@/data/requests";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [password, setPass] = useState();
  const [username, setUsername] = useState("");
  const [type, setType] = useState("password");
  const [result, setResult] = useState();

  const HandleShowPassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const LogHandle = async (e) => {
    e.preventDefault();

    let data = { username, password };

    const ob = await GetToken(data);

    console.log(ob);

    setResult(ob);

    
  };

  return (
    <div className=" flex flex-col items-center justify-center w-full font-lalezar ">
      <Checkout Step1={true} Step2={true} Step3={false} Step4={false} />

      <div>
        <h1 className={`${result ? "text-green-500" : "text-red-500"}`}>
          {result ? "موفق" : result === undefined ? "" : "اطلاعات وارد شده اشتباه است"}
        </h1>
      </div>

      <div>ورود به حساب</div>
      <div className="bgtest w-[20rem] lg:w-[27rem] mt-4  h-[22rem] lg:h-[24rem] mb-4 shadow-registerShadow  rounded-md p-4">
        <Card
          style={
            "w-full shadow-cardShadow rounded-[20px] h-[20rem] lg:h-[22rem]  shadow-registerShadow  backdrop-blur-[3px]    overflow-hidden p-5 relative"
          }
        >
          <form onSubmit={LogHandle} dir="rtl">
            <label>نام کاربری :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label> رمز :</label>
            <div className=" relative">
              <span
                onClick={HandleShowPassword}
                className=" absolute left-2 top-[0.4rem] cursor-pointer text-lg"
              >
                {type === "password" ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
              <input
                className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
                type={type}
                required
                value={password || ''}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className=" px-8 py-2 lg:py-3 lg:px-10  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all  text-base dark:focus:ring-offset-gray-800"
              >
                ورود
              </button>
            </div>
          </form>
        </Card>
      </div>

      <div className=" flex justify-center p-3 border-4 rounded-full mb-5">
        <p>
          اگر حساب کاربری ندارید{" "}
          <Link href="/ordersection/register" className=" text-blue-300">
            ثبتنام
          </Link>{" "}
          کنید
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

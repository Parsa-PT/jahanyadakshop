"use client";
import React from "react";
import { useState } from "react";
import Card from "@/components/cardBlur/Card";
import Link from "next/link";
import Checkout from "@/components/checkout/Checkout";
import "./register.css";
import { CreateNewUser } from "@/data/requests";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [StepBtn, setStepBtn] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPass1] = useState();
  const [password2, setPass2] = useState();

  const [type, setType] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");


  const HandleShowPassword = () => {

    if(type === "password") {
      setType('text');
    }else{
      setType('password');
    }
    
  };


  const HandleShowPasswordRepeate = () => {

    if(typeRepeat === "password") {
      setTypeRepeat('text');
    }else{
      setTypeRepeat('password');
    }
    
  };
  // const HandleShowPasswordagain = () => {
  //   if (type === "password") {
  //     setIconRepeat(<AiOutlineEye />);
  //     setTypeRepeat("text");
  //   } else {
  //     setTypeRepeat(<AiOutlineEyeInvisible />);
  //     setIconRepeat("password");
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { fullname, username, email, password1, password2 };

    CreateNewUser(data);
  };

  // const { state, dispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;

  

  return (
    <div className=" flex flex-col items-center justify-center w-full font-lalezar ">
      <Checkout Step1={true} Step2={false} Step3={false} Step4={false} />

      <div>ساخت حساب</div>
      <div className="bgtest w-[20rem] lg:w-[27rem] mt-4   mb-4 shadow-registerShadow  rounded-md p-4">
        <Card
          style={
            "w-full shadow-cardShadow rounded-[20px]   shadow-registerShadow  backdrop-blur-[3px]    overflow-hidden p-5 relative"
          }
        >
          <form onSubmit={handleSubmit} dir="rtl">
            <label className=" text-white">نام و نام خانوادگی :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              value={fullname != '' ? fullname : ""}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label> نام کاربری :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              value={username != '' ? username : ""}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className=" text-white">ایمیل :</label>
            <input
              className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
              type="text"
              value={email != '' ? email : ''}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label> رمز :</label>
            <div className=" relative">
              <span
                onClick={HandleShowPassword}
                className=" absolute left-2 top-[0.4rem] cursor-pointer text-lg"
              >
                {type === 'password' ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
              </span>
              <input
                className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
                type={type}
                value={password1 || ''}
                onChange={(e) => setPass1(e.target.value)}
              />
            </div>

            <label className=" text-white"> تکرار رمز :</label>
            <div className=" relative">
              <span
               onClick={HandleShowPasswordRepeate}
                className=" absolute left-2 top-[0.4rem] cursor-pointer text-lg"
              >
                {typeRepeat === 'password' ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
              </span>
              <input
                className=" w-full p-1 rounded-md dark:text-black bg-slate-200 mb-5"
                type={typeRepeat}
                value={password2 || ''}
                onChange={(e) => setPass2(e.target.value)}
              />
            </div>

            <div>
              <button
                

                type="submit"
                className=" px-8 py-1  lg:py-2  md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
              >
                ثبتنام
              </button>
            </div>
          </form>
        </Card>
      </div>

      <div className=" flex justify-center p-3 border-4 rounded-full mb-5">
        <p>
          اگر حساب کاربری دارید{" "}
          <Link href="/ordersection/registeraccount/logintoken/" className=" text-blue-300">
            وارد
          </Link>{" "}
          شوید
        </p>
      </div>
    </div>
  );
};

export default Register;

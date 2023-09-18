"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import FakeLoading from "../Loading";
import Cookies from "js-cookie";

const PayresultCom = ({ url }) => {
  console.log(url.trackid);
  console.log(url.transid);
  const [message, setMessage] = useState("");
  const [orderid, setOrderid] = useState();
  const [trackId, setTrackid] = useState();

  useEffect(() => {
    async function tess() {
      await fetch(`https://jahanyadak.iran.liara.run/${url.id}/inquirypay`, {
        method: "POST",
        body: JSON.stringify({
          transId: url.transid,
          track_id: url.trackid,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
     
          if(data.message === 'payment is confirmed'){
            
            Cookies.remove('cart')
          }
          setMessage(data.message);
          setOrderid(data.order_id);
          setTrackid(data.track_id);
         
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    tess();
  }, []);

  const Path = ()=>{
    location.assign('/productPage')
  }

  return (
    <div className=" flex justify-center font-lalezar ">
      <FakeLoading />
      {message === "payment is confirmed" ? (
        <>
          {" "}
          <div className=" h-[70vh]  flex items-center  dark:text-black">
            <div className="bg-green-100 w-[22rem] sm:w-[27rem] relative flex justify-around rounded-lg items-center shadow-buttonShadow h-[15rem]">
              <span className=" absolute top-3 left-3">سفارش #{orderid}</span>
              <div className=" absolute top-3 right-3">
                 شماره تراکنش : {trackId}
              </div>
              <div>
                <span data-aos="zoom-in">
                  <IoMdCheckmarkCircleOutline className=" text-[6rem] sm:text-[7rem]  text-green-500" />
                </span>
              </div>

              <div className=" text-end">
                <p className=" mb-4 mt-5">پرداخت شما موفقیت آمیز بود</p>
          
                  <button onClick={Path} className="py-3 px-4 md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-black font-semibold text-black hover:text-white hover:bg-black hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    محصولات
                  </button>
                
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" h-[70vh]  flex items-center ">
            <div className="bg-red-100 w-[27rem] flex justify-around rounded-lg items-center shadow-buttonShadow h-[15rem]">
              <div>
                <span data-aos="zoom-in">
                  <AiOutlineCloseCircle className=" text-[7rem] text-red-500" />
                </span>
              </div>

              <div className=" text-end">
                <p className=" mb-4">پرداخت شما با خطا روبه رو شد</p>
                
                  <button onClick={Path} className="py-3 px-4 md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-black font-semibold text-black hover:text-white hover:bg-black hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    محصولات
                  </button>
          
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PayresultCom;

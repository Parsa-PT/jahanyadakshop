"use client";
import React, { useState } from "react";
import Image from "next/image";
import Idpaypic from "../../public/assets/idpaypic/idpayy_prev_ui.png";
import Checkout from "@/components/checkout/Checkout";
import { useContext } from "react";
import { Store } from "@/context/cart";
import dynamic from "next/dynamic";
import Link from "next/link";

const PaymentMethode = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const [ItemInfo, setIteminfo] = useState();

  if (ItemInfo) {
    setTimeout(() => {
      window.location.assign(ItemInfo.url);
    }, 2000);
  }

  
  

  // const [link, setLink] = useState();

  // useEffect(()=>{
  //   if(ItemInfo){

  //     console.log(ItemInfo._id)
  //   }

  // },[])

  // const test = JSON.stringify({ totalprice: "100", payment: "idpay" });

  const userinfo = localStorage.getItem("token");

  // console.log(userinfo);

  const shippingPrice = 40000;
  const productPrice = cartItems.reduce(
    (acc, cur) => acc + cur.qty * cur.price,
    0
  );
  const productPriceTax = productPrice * 0.082;
  const TotalPrice = shippingPrice + productPriceTax + productPrice;
  const TotalPriceComma = TotalPrice.toLocaleString();

  const PayHandle = async (e) => {
    e.preventDefault();

    // let data = { totalprice };

    // const link = await HandlePeyment();

    // setIteminfo(link.dataTop)

    // console.log(link);

    // setIteminfo(JSON.parse(localStorage.getItem("link")));

    // localStorage.removeItem("link");

    // const info = await HandlePayment();
    // console.log(info);

    // if (totalprice !== "") {
    //   await fetch("http://127.0.0.1:8000/add/order/", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       totalprice: "111100",
    //       payment: "idpay",
    //       // user : userinfo
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((res) => {
    //       if (res.ok) {
    //         // setSuc("Login successful");

    //         return res.json();
    //       }
    //     })
    //     .then(async (data) => {
    // setIteminfo(data._id)
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/users/1"
    // );
    // const dataTop = await response.json();
    // setLink(dataTop.id)
    //     });
    // }

    const response = await fetch("https://jahanyadak.iran.liara.run/1/pay/", {
      method: "GET",
    });
    const dataTop = await response.json();
    console.log(dataTop);
  };

  return (
    <div className=" flex justify-center flex-col items-center font-lalezar">
      <Checkout Step1={true} Step2={true} Step3={true} Step4={true} />

      <div className=" lg:text-lg">روش پرداخت</div>

      <div className=" w-[20rem] md:w-[27rem] mt-4   mb-12  shadow-payment rounded-md p-4">
        <div className=" text-end ">
          <Link href='/ordersection/shipping'>
            <button className=" border-2 rounded-md border-blue-200 px-2">
              صفحه قبل
            </button>
          </Link>
        </div>
        <div>
          <Image priority alt="Idpay" src={Idpaypic} />
        </div>
        <form className="mb-5 lg:text-lg">
          <input
            className="mr-2 "
            type="checkbox"
            defaultChecked
            id="payment"
            value="Id Pay"
          />
          <label>Id Pay</label>
          <div className=" flex justify-end">
            <p>
              پرداخت با درگاه امن{" "}
              <span className=" text-blue-600"> ای دی پی</span>
            </p>
          </div>
        </form>

        <div>
          <div className=" shadow-cardShadow  flex flex-row-reverse justify-around items-center  bg-slate-900 dark:bg-white text-white  p-4 rounded-md dark:text-black">
            {cartItems.length === 0 ? (
              ""
            ) : (
              <div className=" text-sm  md:text-lg">
                قیمت نهایی : {TotalPriceComma}
                <span className="mr-1">تومان</span>
              </div>
            )}

            <button
              onClick={PayHandle}
              className="py-3 px-4  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PaymentMethode), { ssr: false });

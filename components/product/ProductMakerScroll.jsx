"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import lightpic from "../../public/assets/light.jpeg";
import jahanYadakImage from "../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg";
import Link from "next/link";

const ProductMaker = ({ dataInfo, dataLight }) => {
  const [showModal, setShowModal] = useState(false);
  const [GetTitle, setTitle] = useState("");
  const [GetPrice, setPrice] = useState("");
  const [GetCar, setCar] = useState("");
  const [Getexiting, setexiting] = useState("");
  // const [GetImg, setImg] = useState()

  const close = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className=" sm:w-[68rem] md:w-[80rem] lg:w-[100rem] absolute top-10 lg:top-24 flex  gap-6 ">
        {dataInfo &&
          dataInfo.map((item, index) => (
            <div
              key={index}
              width={80}
              className="w-[8.2rem] sm:w-[9rem] shadow-imageShadow  md:w-[13rem] lg:w-[15rem]  rounded-lg pt-4 pb-4 bg-[#6B6B6B]"
            >
              <div className=" w-full  flex justify-center flex-col items-center mb-2">
                <Image
                  className="rounded-tl-[20px]  shadow-imageShadow w-[6rem] md:w-[8rem] lg:w-[11rem] mb-2 rounded-bl-[5px] rounded-tr-[5px] rounded-br-[20px] "
                  src={lightpic}
                  alt={jahanYadakImage}
                  width={0}
                  height={0}
                  unoptimized
                  priority
                />
                <h1 className=" font-bold lg:text-3xl md:text-xl text-white">
                  {item.title}
                </h1>
              </div>
              <div className=" text-white  text-xs sm:text-sm md:text-lg flex flex-col items-end mr-3 mb-2">
                <p>خودرو : {item.car}</p>
                <p>
                  در انبار :{" "}
                  <span
                    className={` ${
                      item.exiting ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.exiting ? "موجود" : "ناموجود"}
                  </span>
                </p>
                <p>قیمت : {item.price} تومان</p>
              </div>

              <div className=" flex justify-center">
                <Link href={`/order/${item.car}`}>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setTitle(item.title);
                      setPrice(item.price);
                      setCar(item.car);
                      setexiting(item.exiting);
                    }}
                    className=" shadow-buttonShadow bg-green-500  rounded-tl-[20px] md:text-lg lg:text-xl text-xs sm:text-sm text-white rounded-bl-[5px] rounded-tr-[5px] px-3 lg:px-6 rounded-br-[20px]"
                  >
                    مشاهده
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductMaker;

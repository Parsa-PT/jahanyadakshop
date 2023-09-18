"use client";
import { useState } from "react";
import Image from "next/image";
import Notification from "@/components/notification/Notif";
import Card from "@/components/cardBlur/Card";
import Pagination from "./Pagination";
import SaipaLogo from "../../public/assets/l90-logo.png";
import jahanYadakImage from "../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg";
import Link from "next/link";

const productPageMaker = ({ datainfo }) => {
  const [selectCategory, setSelectCategory] = useState("");
  const [selectCategory2, setSelectCategory2] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [GetTitle, setTitle] = useState("");
  const [GetPrice, setPrice] = useState("");
  const [GetCar, setCar] = useState("");
  const [Getexiting, setexiting] = useState("");
  const [postPerPage, setpostPerPage] = useState(3);
  const [currentPage, setcurrentPage] = useState(1);
  const [filter, setFilter] = useState([]);

  // select input

  const brandHandler = (e) => {
    setSelectCategory(e.target.value);
  };
  const partHandler = (e) => {
    setSelectCategory2(e.target.value);
  };

  const close = () => {
    setShowModal(false);
  };

  const dataFilter = () => {
    // window.location.reload()

    const result = datainfo.filter((item) => {
      if (selectCategory === "" && selectCategory2 === "") {
        return item;
      } else if (
        item.car.toLowerCase().includes(selectCategory) &&
        item.title.toLowerCase().includes(selectCategory2)
      ) {
        return item;
      }
    });

    setFilter(result);
  };

  // const changePage = ()=>{
  //   setcurrentPage(2)
  // }

  const lastPostIndex = currentPage * postPerPage;
  const fristPostIndex = lastPostIndex - postPerPage;
  const currentPosts =
    filter.length === 0
      ? datainfo.slice(fristPostIndex, lastPostIndex)
      : filter.slice(fristPostIndex, lastPostIndex);

  return (
    <div>
      <div className={` flex justify-around  `}>
        <div>
          <form className=" flex items-center  justify-center  dark:text-black flex-col mb-7 md:mb-12">
            <select
              onChange={brandHandler}
              value={selectCategory}
              className=" w-[8rem] md:w-[14rem] shadow-selectedShoadow mb-2 p-1 bg-[#E6E6E6] rounded-sm"
              name="cars"
              id="car"
            >
              <option value="">همه</option>
              <option value="پراید">پراید</option>
              <option value="سمند">سمند</option>
              <option value="l90">l90</option>
              <option value="206">206</option>
            </select>
            <select
              className=" w-[8rem] md:w-[14rem] shadow-selectedShoadow mb-2 p-1 bg-[#E6E6E6] rounded-sm"
              name="parts"
              id="parts"
            >
              <option value="body">بدنه</option>
              <option value="inner">داخل خودرو</option>
              <option value="engine">موتور</option>
            </select>
            <select
              onChange={partHandler}
              value={selectCategory2}
              className=" w-[8rem] md:w-[14rem] shadow-selectedShoadow mb-2 p-1 bg-[#E6E6E6] rounded-sm"
              name="parts"
              id="parts"
            >
              <option value="">همه</option>
              <option value="سپر">سپر</option>
              <option value="چراغ">چراغ</option>
              <option value="موتور">موتور</option>
            </select>

            <button
              className="text-white w-[8rem] md:w-[14rem] shadow-selectedShoadow  p-1 bg-[#3d8735] rounded-sm"
              type="button"
              onClick={dataFilter}
            >
              اعمال
            </button>
          </form>
        </div>

        <div className=" relative flex justify-center ">
          <div>
            <span className=" w-[3.2rem] h-[3.2rem] md:w-[7.5rem] md:h-[7.5rem] absolute bottom-20 md:-left-10 md:bottom-5 rounded-full  bg-[#021BA0]"></span>
            <span className=" w-[3.2rem] h-[3.2rem]  md:w-[5.5rem] md:h-[5.5rem] absolute -top-3 -right-7 rounded-full bg-[#0AAFF5]"></span>
          </div>

          <Card
            style={
              " w-[8rem] md:w-[20rem] shadow-cardShadow backdrop-blur rounded-[20px] flex items-center justify-center  h-[5rem] lg:w-[18rem] md:h-[8rem] p-5 relative"
            }
          >
            <p className=" text-end text-sm md:text-lg">
              با اعمال فیلتر به محصول خود زود تر برسید
            </p>
          </Card>
        </div>
      </div>
      <div className=" flex justify-center items-center mb-12">
        <div className=" sm:w-[48rem] md:w-[80rem] md:pl-16 sm:pl-12  grid grid-cols-2 sm:grid-cols-3  gap-y-8  gap-x-14 sm:gap-x-2 ">
          {currentPosts &&
            currentPosts.map((item, index) => (
              <div
                key={index}
                className="w-[8.8rem] sm:w-[9rem] shadow-imageShadow  md:w-[14rem] lg:w-[16rem]  rounded-tl-[20px] rounded-bl-[5px] rounded-tr-[5px]    rounded-br-[20px] pt-4 pb-4 bg-[#6B6B6B]"
              >
                <div className=" w-full  flex justify-center flex-col items-center mb-2">
                  <Image
                    className="rounded-tl-[20px]  shadow-imageShadow w-[6rem] md:w-[10rem] lg:w-[13rem] mb-2 rounded-bl-[5px] rounded-tr-[5px] rounded-br-[20px] "
                    src={item.image}
                    alt={jahanYadakImage}
                    width={0}
                    height={0}
                    unoptimized
                    priority
                  />
                  <div className=" mb-2">
                    <h1 className=" font-bold lg:text-2xl md:text-xl text-center  text-white">
                      {item.title}
                    </h1>
                  </div>
                </div>
                <div className=" text-white relative w-full  text-xs sm:text-sm md:text-lg flex flex-col justify-center items-end pr-2 mb-2 ">
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

                  <div className=" absolute -top-4 md:-top-2 left-1">
                    <Image
                      alt="test"
                      width={0}
                      height={0}
                      unoptimized
                      className=" w-10 md:w-14 md:h-14 h-10"
                      src={item.image}
                      priority
                    />
                  </div>
                </div>

                <div className=" flex justify-center">
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setTitle(item.title);
                      setPrice(item.price);
                      setCar(item.car);
                      setexiting(item.exiting);
                      location.assign(`/order/${item.productid}`);
                    }}
                    className="  shadow-buttonShadow bg-green-500 rounded-tl-[20px] md:text-lg lg:text-xl text-xs sm:text-sm text-white rounded-bl-[5px] rounded-tr-[5px]   pr-3 pl-3 rounded-br-[20px]"
                  >
                    مشاهده
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div>
        <Pagination
          totalPosts={filter.length === 0 ? datainfo.length : filter.length}
          currentPage={currentPage}
          postPerPage={postPerPage}
          setcurrentPage={setcurrentPage}
        />
      </div>

      <div>
        <Notification
          detail={
            "  در صورت نبودن محصول مورد نظر خود به این شماره(09304706561) در واتساپ پیام دهید"
          }
        />
      </div>
    </div>
  );
};

export default productPageMaker;

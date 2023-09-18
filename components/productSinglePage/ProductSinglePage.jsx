"use client";
import { useState, useContext, useEffect } from "react";
import lightpic from "../../public/assets/light.jpeg";
import iranKhodro from "../../public/assets/irankhodro.png";
import Image from "next/image";
import { Store } from "@/context/cart";
import jahanYadakImage from "../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg";
import { productData } from "@/data/productData";
import Notification from "@/components/notification/Notif";
import { RealLoading } from "@/components/Loading";

const ProductSinglePage = ({productId}) => {
  const [cartItems, setCart] = useState();
  const { state, dispatch } = useContext(Store);
  const [notif, setNotif] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function myp() {
      const data = await productData();
      setData(data);
    }

    myp();
  }, []);

  // console.log(data);

  const product = data.find((pItem) => pItem.productid === productId);

  console.log(product);

  let [counter, setCounter] = useState(1);

  const plus = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const negetive = () => {
    if (counter > 1) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  const addToCartHandler = () => {
    const existingItem = state.cart.cartItems.find(
      (item) => item.title === product.title
    );

    const qty = existingItem
      ? existingItem.qty + Number(counter)
      : Number(counter);

    dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });

    setNotif(true);
  };

  return (
    <div className=" flex justify-center flex-col items-center font-lalezar">
      {notif ? (
        <div data-aos="fade-down">
          <Notification detail={"محصول به سبد شما اضافه شد"} />
        </div>
      ) : null}

      {product === undefined ? (
        <>
          <RealLoading />
        </>
      ) : (
        <div
          id="defaultModal"
          className="  relative  w-full p-4  mb-48  flex justify-center items-center"
        >
          <div className="relative w-full  max-w-xl h-[32rem]">
            <div className="relative bg-slate-300 rounded-lg shadow dark:bg-gray-700">
              <div className="flex  justify-center p-4 border-b rounded-t dark:border-gray-600">
                <Image
                  className="rounded-tl-[20px] shadow-imageShadow w-[10rem] md:w-[10rem] lg:w-[13rem] mb-2 rounded-bl-[5px] rounded-tr-[5px] rounded-br-[20px] "
                  src={product.image}
                  alt='test'
                  width={0}
                  height={0}
                  unoptimized
                  priority
                />
              </div>

              <div className=" text-center text-2xl mt-2">{product.title}</div>

              <div className="p-6 space-y-6 flex flex-row-reverse justify-between items-center text-lg">
                <div className=" flex flex-col items-end">
                  <p>خودرو : {product.car}</p>
                  <p>
                    در انبار :{" "}
                    <span
                      className={` ${
                        product.ex ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {product.ex ? "موجود" : "ناموجود"}
                    </span>
                  </p>
                  <p>قیمت : {product.price} تومان</p>
                </div>

                <div className=" pb-4">
                  <Image className=" w-[6rem]" alt="test" unoptimized
                  priority src={iranKhodro} />
                </div>
              </div>

              <div className=" flex justify-center items-center md:text-lg mb-2">
                <span
                  onClick={plus}
                  className="dark:bg-white px-3 text-2xl bg-slate-200 dark:text-black  cursor-pointer rounded-md"
                >
                  +
                </span>
                <span className=" px-5 py-1 md:px-8  shadow-imageShadow bg-slate-300 dark:text-black  rounded-md m-2">
                  {counter}
                </span>
                <span
                  onClick={negetive}
                  className="dark:bg-white px-3 text-2xl dark:text-black bg-slate-200  cursor-pointer rounded-md"
                >
                  -
                </span>
              </div>

              <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={addToCartHandler}
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSinglePage;

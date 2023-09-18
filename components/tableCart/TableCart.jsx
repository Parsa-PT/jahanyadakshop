"use client";
import { useContext } from "react";
import { Store } from "@/context/cart";
import dynamic from "next/dynamic";
import Link from "next/link";

const TableCart = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  console.log(cartItems);
  const data = localStorage.getItem("loggedIn");

  const shippingPrice = Number("40000");
  const productPrice = cartItems.reduce(
    (acc, cur) => acc + cur.qty * cur.price,
    0
  );
  const productPriceTax = productPrice * 0.082;
  const TotalPrice = shippingPrice + productPriceTax + productPrice;
  const TotalPriceComma = TotalPrice.toLocaleString();
  const productTaxPriceComma = productPriceTax.toLocaleString();
  const shippingPriceComma = shippingPrice.toLocaleString();

  function removeHandler(item) {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  }

  return (
    <div>
      <div className="flex justify-center  items-center flex-col mb-12">
        {cartItems.length === 0 ? (
          <>
            <div>سبد شما خالی است</div>
          </>
        ) : (
          <div className="mt-16 ">
            <table
              id="test"
              className=" w-full mb-16 shadow-2xl border-2 text-black   border-white w-12/12 lg:w-6/12"
            >
              <thead>
                <tr>
                  <th className=" py-2 bg-blue-100 ">عمل</th>
                  <th className=" py-2 bg-blue-100 ">قیمت تومان</th>
                  <th className=" py-2 bg-blue-100 ">تعداد</th>
                  <th className=" py-2 bg-blue-100 ">خودرو</th>
                  <th className=" py-2 bg-blue-100 ">محصول</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.title}
                    className="bg-[#a4c7ff] hover:bg-cyan-100 hover:scale-105 duration-100"
                  >
                    <td
                      onClick={() => removeHandler(item)}
                      className="py-3 px-4 sm:px-8 md:px-12  cursor-pointer  "
                    >
                      حذف
                    </td>
                    <td className="py-3 px-4 sm:px-8 md:px-12 ">
                      {Number(item.price * item.qty).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 sm:px-8 md:px-12 ">
                      {item.qty}
                    </td>
                    <td className="py-3 px-4 sm:px-8 md:px-12 ">
                      {item.car}
                    </td>
                    <td className="py-3 px-4 sm:px-8 md:px-12 ">
                      {item.title}
                    </td>
                 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className=" text-end  p-5 shadow-payment rounded-md dark:text-white">
          {cartItems.length === 0 ? (
            ""
          ) : (
            <>
              <p className=" mb-2">
                هزینه ارسال : {shippingPriceComma}{" "}
                <span className=" mr-1">تومان</span>
              </p>
              <hr className=" mb-2" />
              <p className=" mb-2">
                مالیات : {productTaxPriceComma}{" "}
                <span className=" mr-1">تومان</span>
              </p>
              <hr className=" mb-2" />
              <p className=" mb-4">
                قیمت نهایی : {TotalPriceComma}
                <span className=" mr-1">تومان</span>
              </p>
            </>
          )}

          {cartItems.length === 0 ? (
            <div >
              <div className="   flex justify-center ">
                <Link href="/productPage">
                  <button
                    type="button"
                    className="py-3 px-4  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    محصولات
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center   ">
              <Link
                href={
                  data ? "/ordersection/shipping" : "/ordersection/registeraccount/createnewacc"
                }
              >
                <button className="py-3 px-4  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                  ثبت سفارش
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TableCart), { ssr: false });

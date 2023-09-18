import React from 'react'
import Link from 'next/link'

const Checkout = ({Step1 , Step2 , Step3 , Step4}) => {

  const login = localStorage.getItem("loggedIn");

  return (
    <div>
       <div className="w-full flex justify-center mb-8">
        <div className="w-[22rem] lg:w-[35rem] h-[4rem] flex justify-center items-center bg-[#4F75FB] rounded-[20px]">
          <div
            className="w-[20rem] shadow-selectedShoadow lg:w-[33rem] flex items-center justify-between text-black p-3 h-[3rem] bg-white rounded-[10px] "
          >
            
            <span
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
              className={` w-[1.5rem] text-center h-[1.5rem] rounded-full ${
                Step4 === false ? "bg-slate-200" : "bg-blue-200 "
              } `}
            >
              4
            </span>
            
            
            <span
              className={` w-[4rem] md:w-[6rem] mx-2 h-1 flex ${
                Step3 === false ? "bg-slate-200" : "bg-blue-500"
              }  rounded-md`}
            ></span>
            <Link href={login ? '/ordersection/shipping' :'/ordersection/register/login'}
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
              className={` w-[1.5rem] text-center h-[1.5rem] rounded-full ${
                Step3 === false ? "bg-slate-200" : "bg-blue-200 "
              } `}
            >
              3
            </Link>
            <span
              className={` w-[4rem] md:w-[6rem] mx-2 h-1 flex ${
                Step2 === false ? "bg-slate-200" : "bg-blue-500"
              }  rounded-md`}
            ></span>
            <span
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
              className={` w-[1.5rem] text-center h-[1.5rem] rounded-full ${
                Step2 === false ? "bg-slate-200" : "bg-blue-200 "
              } `}
            >
              2
            </span>
            <span
              className={` w-[4rem] md:w-[6rem] mx-2 h-1 flex ${
                Step1 === false ? "bg-slate-200" : "bg-blue-500"
              }  rounded-md`}
            ></span>
            <span
              style={{
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
              className={` w-[1.5rem] text-center h-[1.5rem] rounded-full ${
                Step1 === false ? "bg-slate-200" : "bg-blue-200 "
              } `}
            >
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

'use client'
import {useState , useEffect} from "react";
import { FiSettings } from "react-icons/fi";

const FakeLoading = () => {
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
            setTimeout(()=>{
                    setLoading(false)
            },200)
    },[loading])


  return (
    <div>
        {loading === true ? <div className=" w-full h-screen  fixed inset-0 z-50  bg-white dark:bg-[#353535]">
        <div className=" h-screen flex justify-center items-center">
          <FiSettings  className=" text-4xl md:text-5xl animate-spin text-blue-400"/>
          <span className=" font-lalezar text-xl md:text-2xl dark:text-white ml-1">
                جهان یدک
          </span>
        </div>
      </div> : null}
      
    </div>
  );
};

export default FakeLoading;


export const RealLoading = () => {
   

 


  return (
    <div>
      <div className=" w-full h-screen  fixed inset-0 z-50  bg-white dark:bg-[#353535]">
        <div className=" h-screen flex justify-center items-center">
          <FiSettings  className=" text-4xl md:text-5xl animate-spin text-blue-400"/>
          <span className=" font-lalezar text-xl md:text-2xl dark:text-white ml-1">
                جهان یدک
          </span>
        </div>
      </div> 
      
    </div>
  );
};


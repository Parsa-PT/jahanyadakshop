import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {LuPackageCheck} from 'react-icons/lu'
import {MdOutlineDiscount} from 'react-icons/md'

const Points = () => {
  return (
    <div>
      <div className=' flex justify-around mb-24 p-2'>
          <span className='flex flex-col   items-center p-1 w-[7rem] sm:w-[10rem] md:w-[14rem] h-[6rem] border border-yellow-400 hover:bg-[#353535] dark:hover:bg-white hover:border-none hover:rounded-xl hover:text-white dark:hover:text-black transition-all ease-in'>
            <TbTruckDelivery className=' text-4xl sm:text-5xl mb-3 text-yellow-400'/>
            <span className=' text-center'>
                <p className=' text-sm  md:text-md'>ارسال کالا به سراسر کشور</p>
            </span>
          </span>
          <span className='flex flex-col   items-center p-1 w-[7rem] sm:w-[10rem] md:w-[14rem]  h-[6rem] border border-yellow-400 hover:bg-[#353535] dark:hover:bg-white hover:border-none hover:rounded-xl hover:text-white dark:hover:text-black transition-all ease-in'>
            <MdOutlineDiscount className=' text-4xl sm:text-5xl  mb-5 md:mb-3 text-yellow-400'/>
            <span className=' text-center'>
                <p className=' text-sm md:text-lg'> بهترین قیمت</p>
            </span>
          </span>
          <span className='flex flex-col   items-center p-1 w-[7rem] sm:w-[10rem] md:w-[14rem] h-[6rem] border border-yellow-400 hover:bg-[#353535] dark:hover:bg-white hover:border-none hover:rounded-xl hover:text-white dark:hover:text-black transition-all ease-in'>
            <LuPackageCheck className=' text-4xl sm:text-5xl mb-5  md:mb-3 text-yellow-400'/>
            <span className=' text-center'>
                <p className=' text-sm md:text-lg'>ضمانت اصالت کالا</p>
            </span>
          </span>
      </div>
    </div>
  )
}

export default Points

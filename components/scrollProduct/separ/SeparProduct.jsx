import React from 'react'
import './separ.css'
import ProductMaker from '@/components/product/ProductMakerScroll'
import Link from 'next/link'

const SeparProduct = ({Separdata}) => {
  return (
    <div>
      <div className=" flex relative  justify-center mb-16">
      <div className=' absolute z-10 w-20 lg:w-40  md:w-24 lg:h-16 text-center rounded-b-md h-8 text-lg lg:text-4xl md:text-2xl bg-white dark:bg-slate-900 '>
            <h1>
                سپر
            </h1>
        </div>
      <div className="bgSepar md:pl-0 w-full lg:w-[90rem] md:h-[28rem] lg:h-[38rem] flex flex-col-reverse  relative h-[22rem] p-7 overflow-auto">
        <div>
          <ProductMaker dataInfo={Separdata} />
        </div>
      </div>

      <div className="absolute  bottom-2">
      <Link href='/productPage'>
        <button className=" px-1 py-3 lg:py-5 md:px-6 lg:text-xl inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          مشاهده همه محصولات
        </button>
        </Link>  
      </div>
    </div>
    </div>
  )
}

export default SeparProduct

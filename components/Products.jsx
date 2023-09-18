"use client";
import React from "react";
import ProductMaker from "./product/ProductMakerCol";
import { useState } from "react";
import Card from "./cardBlur/Card";

const Products = ({ dataInfo }) => {
  const [query, setQuery] = useState();

  const [selectCategory, setSelectCategory] = useState("");
  const [selectCategory2, setSelectCategory2] = useState("");

  // select input

  const brandHandler = (e) => {
    setSelectCategory(e.target.value);
  };
  const partHandler = (e) => {
    setSelectCategory2(e.target.value);
  };

  return (
    <div className=" mb-16">
      <div className="w-full relative flex justify-end pr-10 mb-10">
        <h1 className=" w-12 border-t-4 border-b-4 md:text-xl ">محصول</h1>
      </div>

      <div className=" mb-10">
        <ProductMaker
          dataInfo={dataInfo}
          selectCategory={selectCategory}
          selectCategory2={selectCategory2}
        />
      </div>
    </div>
  );
};

export default Products;

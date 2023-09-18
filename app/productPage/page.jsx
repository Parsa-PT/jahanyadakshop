import React from "react";
import ProductPageMaker from "../../components/allproductpage/ProductPageMaker";
import { productData } from "@/data/productData";

const ProductPage = async () => {
  const data = await productData();

  return (
    <div className=" font-lalezar">
      <ProductPageMaker datainfo={data} />
    </div>
  );
};

export default ProductPage;

import SaipaSlide from "@/components/saipaslide/Cars";
import HomeComponent from "../components/Home";
import Products from "../components/Products";
import TopSails from "../components/TopSails";
import Slide from "../components/slideImage/Slide";
import {
  productData,
  productDataTopSell,
  productDataLights,
  productDataLents,
  productDataSepar
} from "@/data/productData";
import LightProduct from "@/components/scrollProduct/lights/LightProduct";
import LentsProduct from "@/components/scrollProduct/lents/LentsProduct";
import SeparProduct from "@/components/scrollProduct/separ/SeparProduct";
import Points from "@/components/Points";
import FakeLoading from "@/components/Loading";
import Engineoil from "@/components/bestchoice/Engineoil";
import Radiator from "@/components/bestchoice/Lent";

export default async function Home() {
  const data = await productData();
  const dataTop = await productDataTopSell();
  const lightData = await productDataLights();
  const lentData = await productDataLents();
  const separData = await productDataSepar();

 

  return (
    <div className=" font-lalezar">
      <FakeLoading/>
      <HomeComponent />
      <Points/>
      <TopSails dataTop={data} />
      <SaipaSlide />
      <Products dataInfo={data} />
      <LightProduct dataLight={lightData} />
      <Engineoil/>
      <LentsProduct Lentdata={lentData}/>
      <Radiator/>
      <SeparProduct Separdata={separData}/>
      <Slide />
    </div>
  );
}

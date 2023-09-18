import ProductSinglePage from "@/components/productSinglePage/ProductSinglePage";

const ProductPageDetail = ({params}) => {


  const id = params.id;


  return (
    <div>
      <ProductSinglePage productId={id}/>
    </div>
  )
}

export default ProductPageDetail

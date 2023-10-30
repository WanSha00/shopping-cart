import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import { useContext } from "react";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((product) => product.id === productId);
  return (
    <>
      <div>
        <Breadcrumbs product={product} />
        <ProductDisplay product={product} />
        <RelatedProducts product={product} />
      </div>
    </>
  );
}

export default Product;

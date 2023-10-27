import "./RelatedProducts.css";
import data_product from "../../assets/data";
import Item from "../item/Item";

function RelatedProducts() {
  return (
    <>
      <div className="relatedProducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedProducts-item">
          {data_product.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;

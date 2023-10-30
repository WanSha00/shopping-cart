import "./RelatedProducts.css";
import data_product from "../../assets/all_products";
import Item from "../item/Item";
import no_prod from "../../assets/no_related_prod.webp";
import { useState } from "react";

function RelatedProducts({ product }) {
  let found = false;
  data_product.map((item) => {
    if (item.tag === product.tag && item.id != product.id) {
      found = true;
      return;
    }
  });
  return (
    <>
      <div className="relatedProducts">
        <h1>Related Products</h1>
        <hr />

        <div className="relatedProducts-item">
          {data_product.map((item) => {
            if (item.tag === product.tag && item.id != product.id) {
              return <Item key={item.id} item={item} />;
            }
          })}

          {!found && <img className="no-prod-img" src={no_prod} alt="" />}
        </div>
      </div>
    </>
  );
}

export default RelatedProducts;

import { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/chevron-down.svg";
import Item from "../components/item/Item";

function ShopCategory({ banner, category }) {
  const { all_products } = useContext(ShopContext);
  return (
    <>
      <div className="shop-category">
        <img className="shopcategory-banner" src={banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_products.map((item) => {
            if (category === item.category) {
              return <Item key={item.id} item={item} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">More</div>
      </div>
    </>
  );
}

export default ShopCategory;

import "./Popular.css";
import data_product from "../../assets/all_products";
import Item from "../item/Item";
import popIcon from "../../assets/pop_icon.webp";

function Popular() {
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN CHIBIS & CARDS</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item) => {
            if (item.popular === 1) {
              return (
                <>
                  <div className="pop">
                    <img className="img-pop" src={popIcon} alt="" />
                    <Item key={item.id} item={item} />
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;

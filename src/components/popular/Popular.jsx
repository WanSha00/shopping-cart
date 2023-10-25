import "./Popular.css";
import data_product from "../../assets/data.js";
import Item from "../item/Item";

function Popular() {
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN CHIBIS & CARDS</h1>
        <hr />
        <div className="popular-item">
          {data_product.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Popular;

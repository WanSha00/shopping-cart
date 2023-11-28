import "./Item.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  const { id, image, name, new_price, old_price, popular, newItem } = item;
  return (
    <>
      <div className="item-container">
        <div className="item">
          <Link to={`/product/${id}`}>
            <img src={image} alt="" onClick={window.scrollTo(0, 0)} />
          </Link>
          <div className="item-name">
            <p>{name}</p>
          </div>

          <div className="item-prices">
            <div className="item-price-new">${new_price}</div>
            <div className="item-price-old">${old_price}</div>
          </div>
        </div>
        <div className="status">
          {popular === 1 && <div className="status">POPULAR</div>}
          {newItem === 1 && <div className="status">NEW</div>}
        </div>
      </div>
    </>
  );
}

export default Item;

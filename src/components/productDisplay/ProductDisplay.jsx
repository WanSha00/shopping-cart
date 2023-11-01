import { useContext, useState } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay({ product }) {
  const { id, category, image, name, old_price, new_price, info1, info2 } =
    product;
  const { cartItems, addToCart } = useContext(ShopContext);
  const [type, setType] = useState(null);
  return (
    <>
      <div className="display">
        <div className="productDisplay">
          <div className="productDisplay-left">
            <div className="productDisplay-img">
              <img className="productDisplay-img-main" src={image} alt=""></img>
            </div>
          </div>
          <div className="productDisplay-right">
            <h1 className="product-name">{name}</h1>
            {category === "card" && (
              <>
                <div className="productDisplay-right-info">
                  <div className="productDisplay-right-info1">
                    Campaign : {info1}
                  </div>
                  <div className="productDisplay-right-info2">
                    <i>{info2}</i>
                  </div>
                </div>
              </>
            )}
            <div className="productDisplay-right-prices">
              <div className="productDisplay-right-prices-old">
                ${old_price}
              </div>
              <div className="productDisplay-right-prices-new">
                ${new_price}
              </div>
            </div>

            <div className="productDisplay-right-type">
              <h1>Select type:</h1>
              <div className="productDisplay-right-types">
                {category === "chibi" && (
                  <>
                    <div
                      className={type === "Sticker" ? "select" : ""}
                      onClick={() => setType("Sticker")}
                    >
                      Sticker
                    </div>
                    <div
                      className={type === "Keychain" ? "select" : ""}
                      onClick={() => setType("Keychain")}
                    >
                      Keychain
                    </div>
                  </>
                )}

                {category === "card" && (
                  <>
                    <div
                      className={type === "Poster" ? "select" : ""}
                      onClick={() => setType("Poster")}
                    >
                      Poster
                    </div>
                    <div
                      className={type === "Card" ? "select" : ""}
                      onClick={() => setType("Card")}
                    >
                      Card
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cart-qty">In cart: {cartItems[id]}</div>
        <button
          onClick={() => {
            addToCart(id);
          }}
          className="addcart-btn"
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}

export default ProductDisplay;

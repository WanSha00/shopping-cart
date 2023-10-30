import { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay({ product }) {
  const { id, category, image, name, old_price, new_price, info1, info2 } =
    product;
  const { addToCart } = useContext(ShopContext);

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
                    <div>Sticker</div>
                    <div>Keychain</div>
                  </>
                )}

                {category === "card" && (
                  <>
                    <div>Poster</div>
                    <div>Card</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
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

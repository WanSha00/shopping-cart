import { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../../assets/removeIcon.svg";
import emptyIcon from "../../assets/empty_cart.webp";

function CartItems() {
  const {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    removeItem,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const [promo, setPromo] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [promoDisabled, setPromoDisabled] = useState(false);

  const handlePromo = (e) => {
    setPromo(e.target.value);
  };

  const applyPromo = () => {
    if (promo != null) {
      setDiscount(5);
      setPromoDisabled(true);
    }
  };

  let totalItems = getTotalCartAmount();
  let totalPayment = totalItems + 3 - discount;

  return (
    <>
      <div className="cartItems">
        {totalItems > 0 && (
          <>
            <div className="cartItems-main">
              <div className="center">
                <p>Products</p>
              </div>
              <div className="center">
                <p>Title</p>
              </div>
              <div className="center">
                <p>Price</p>
              </div>
              <div className="center">
                <p>Quantity</p>
              </div>
              <div className="center">
                <p>Total</p>
              </div>
              <div className="center">
                <p>Remove</p>
              </div>
            </div>
            <hr />
          </>
        )}

        {totalItems < 1 && (
          <div className="cartItems-emptyMsg">
            <p>Your cart is empty.</p>
            <img src={emptyIcon} alt="" />
          </div>
        )}

        {all_products.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <>
                <div key={item.id}>
                  <div className="cartItems-format cartItems-main">
                    <div className="center">
                      {" "}
                      <img
                        className="cartItems-productIcon"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="center">
                      <p>{item.name}</p>
                    </div>
                    <div className="center">
                      <p>${item.new_price}</p>
                    </div>
                    <div className="center">
                      <div className=" cartItems-quantity">
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                          }}
                          className="cartItems-quantity-btn"
                        >
                          -
                        </button>
                        <button className="cartItems-quantity-no">
                          {cartItems[item.id]}
                        </button>
                        <button
                          onClick={() => {
                            addToCart(item.id);
                          }}
                          className="cartItems-quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="center">
                      <p>${item.new_price * cartItems[item.id]}</p>
                    </div>

                    <div className="center">
                      <img
                        className="cartItems-removeIcon"
                        src={removeIcon}
                        alt=""
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            );
          }
        })}

        {totalItems > 0 && (
          <div className="cartItems-down">
            <div className="cartItems-total">
              <h1>Payment Details</h1>
              <div>
                <div className="cartItems-totalItems">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartItems-totalItems">
                  <p>Shipping Fee</p>
                  <p>$3</p>
                </div>
                <hr />
                <div className="cartItems-totalItems">
                  <p>Promo</p>
                  <p>- ${discount}</p>
                </div>
                <hr />
                <div className="cartItems-totalItems">
                  <h3>Total Payment</h3>
                  <h3 className="total">${totalPayment}</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItems-promoCode">
              {!promoDisabled && <p>Enter promo code</p>}
              {promoDisabled && <p>Promo code applied.</p>}

              <div className="cartItems-promobox">
                <input
                  type="text"
                  placeholder="CODE"
                  onChange={(e) => handlePromo(e)}
                  disabled={promoDisabled}
                />
                <button onClick={() => applyPromo()}>Apply</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartItems;

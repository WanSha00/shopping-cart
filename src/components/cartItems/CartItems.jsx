import { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../../assets/removeIcon.svg";
import emptyIcon from "../../assets/empty_cart.webp";
import purchase_img from "../../assets/purchase.webp";

function CartItems() {
  const {
    all_products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    removeItem,
    getTotalCartAmount,
    getDefaultCart,
  } = useContext(ShopContext);

  const [promo, setPromo] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [promoDisabled, setPromoDisabled] = useState(false);
  const [purchase, setPurchase] = useState(false);

  const handlePromo = (e) => {
    setPromo(e.target.value);
  };

  const applyPromo = () => {
    if (promo != null) {
      setDiscount(5);
      setPromoDisabled(true);
    }
  };

  const handlePurchase = () => {
    setPurchase(true);
  };

  let totalItems = getTotalCartAmount();
  let totalPayment = totalItems + 3 - discount;

  return (
    <>
      <div className="cartItems">
        {(!purchase && totalItems) > 0 && (
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

        {purchase && totalItems > 0 && (
          <div className="cartItems-purchaseMsg">
            <p className="purchase-title">Thank you for your purchase!</p>

            {all_products.map((item) => {
              if (cartItems[item.id] > 0) {
                return (
                  <>
                    <div className="purchase-details" key={item.id}>
                      <p>
                        {item.name}.....${item.new_price}x{cartItems[item.id]}
                      </p>
                      <div>${item.new_price * cartItems[item.id]}</div>
                    </div>
                  </>
                );
              }
            })}
            <div className="purchase-totals">
              <div>
                <p>Subtotal</p>
                <p>Shipping Fee</p>
                <p>Promo</p>
                <p className="total">Total payment</p>
              </div>

              <div className="fees">
                <div>${getTotalCartAmount()}</div>
                <div>$3</div>
                <div>-${discount}</div>
                <div className="total">${totalPayment}</div>
              </div>
            </div>
            <img src={purchase_img} alt="" />
            <button
              onClick={() => {
                setCartItems(getDefaultCart());
              }}
            >
              CONFIRM
            </button>
          </div>
        )}

        {!purchase &&
          all_products.map((item) => {
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

        {(!purchase && totalItems) > 0 && (
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
              <button onClick={() => handlePurchase()}>
                PROCEED TO CHECKOUT
              </button>
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

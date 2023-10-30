import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart-outline.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function Navbar({ menu, setMenu }) {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>MYSHOP</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("chibis");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/chibis">
              Chibis
            </Link>
            {menu === "chibis" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("cards");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/cards">
              Cards
            </Link>
            {menu === "cards" ? <hr /> : <></>}
          </li>
        </ul>
        <div
          className="nav-cart"
          onClick={() => {
            setMenu("");
          }}
        >
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

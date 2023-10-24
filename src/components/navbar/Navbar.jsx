import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart-outline.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const { name } = useParams();

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
              setMenu("cat1");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/cat1">
              Chibis
            </Link>
            {menu === "cat1" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("cat2");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/cat2">
              Cards
            </Link>
            {menu === "cat2" ? <hr /> : <></>}
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

          <div className="nav-cart-count">45</div>
        </div>
      </div>
      {/* {name === "cat1" ? (
        <h1>CAT1</h1>
      ) : name === "cat2" ? (
        <h1>CAT2</h1>
      ) : (
        <h1>HOME</h1>
      )} */}
    </>
  );
}

export default Navbar;

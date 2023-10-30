import "./Offers.css";
import exclusive_image from "../../assets/exclusive.webp";
import { Link } from "react-router-dom";

function Offers({ menu, setMenu }) {
  return (
    <>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <Link to="/chibis">
            <button
              onClick={() => {
                setMenu("chibis");
              }}
            >
              Chibis
            </button>
          </Link>
          <Link to="/cards">
            <button
              onClick={() => {
                setMenu("cards");
              }}
            >
              Cards
            </button>
          </Link>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Offers;

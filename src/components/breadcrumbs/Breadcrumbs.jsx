import "./Breadcrumbs.css";
import arrow_icon from "../../assets/chevron-right.svg";

function Breadcrumbs({ product }) {
  return (
    <>
      <div className="breadcrumbs">
        Home <img src={arrow_icon} alt="" />
        {product.category === "chibi" ? "Chibis" : "Cards"}
        <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    </>
  );
}

export default Breadcrumbs;

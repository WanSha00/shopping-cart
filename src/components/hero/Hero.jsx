import "./Hero.css";
import new_icon from "../../assets/hero_new.webp";
import arrow_icon from "../../assets/arrow_icon.svg";
import hero_image from "../../assets/hero.webp";

function Hero({ scroll }) {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={new_icon} alt="" />
            </div>
            <p>collections</p>
            <p>10% OFF!</p>
          </div>

          <div className="hero-latest-btn">
            <div onClick={scroll}>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;

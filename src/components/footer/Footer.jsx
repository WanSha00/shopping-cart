import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import insta_icon from "../../assets/instagram.svg";
import twitter_icon from "../../assets/twitter.svg";
import { Link } from "react-router-dom";

function Footer({ setMenu }) {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p
            onClick={() => {
              setMenu("home");
              window.scrollTo(0, 0);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              MYSHOP
            </Link>
          </p>
        </div>
        <ul className="footer-links">
          <li
            onClick={() => {
              setMenu("cards");
              window.scrollTo(0, 0);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/cards">
              Cards
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("chibis");
              window.scrollTo(0, 0);
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/chibis">
              Chibis
            </Link>
          </li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2023 - All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

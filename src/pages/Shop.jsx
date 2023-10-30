import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";
import { useRef } from "react";

function Shop({ menu, setMenu }) {
  const newCollections = useRef(null);

  function scrollToSection() {
    window.scrollTo({
      top: newCollections.current.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div>
        <Hero scroll={scrollToSection} />
        <Popular />
        <Offers menu={menu} setMenu={setMenu} />
        <NewCollections ref={newCollections} />
        <Newsletter />
      </div>
    </>
  );
}

export default Shop;

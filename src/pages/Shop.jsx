import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

function Shop() {
  return (
    <>
      <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <Newsletter />
      </div>
    </>
  );
}

export default Shop;

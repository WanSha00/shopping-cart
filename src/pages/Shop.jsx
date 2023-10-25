import Hero from "../components/hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
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
      </div>
    </>
  );
}

export default Shop;

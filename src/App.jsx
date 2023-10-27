import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import chibis_banner from "./assets/chibis_banner.webp";
import cards_banner from "./assets/cards_banner.webp";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/chibis"
              element={<ShopCategory banner={chibis_banner} category="chibi" />}
            />
            <Route
              path="/cards"
              element={<ShopCategory banner={cards_banner} category="card" />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

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

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cat1" element={<ShopCategory category="cat1" />} />
            <Route path="/cat2" element={<ShopCategory category="cat2" />} />
            <Route path="/product" element={<Product />} />
            <Route path=":productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import ShopCategory from "../../pages/ShopCategory";
import Navbar from "../navbar/Navbar";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "shop/:name",
      element: <Navbar />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

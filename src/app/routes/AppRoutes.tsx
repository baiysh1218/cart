import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../../shared/constants";
import { Cart, Products } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.products} element={<Products />} />
      <Route path={APP_ROUTES.cart} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;

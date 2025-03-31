import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../../shared/constants";
import { Cart, Products } from "./pages";
import MainLayout from "../../widgets/layout/mainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path={APP_ROUTES.products} element={<Products />} />
        <Route path={APP_ROUTES.cart} element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

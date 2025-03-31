import { lazy } from "react";

const Products = lazy(() =>
  import("../../pages/products/Products").then((module) => ({
    default: module.Products,
  }))
);

const Cart = lazy(() =>
  import("../../pages/cart").then((module) => ({
    default: module.CartPage,
  }))
);

export { Products, Cart };

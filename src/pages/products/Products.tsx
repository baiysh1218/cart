import { ProductsList } from "../../entities/product/ui/productsList";
import { CartIcon } from "../../widgets/cartIcon";
import styles from "./styles.module.scss";

export const Products = () => {
  return (
    <div className={styles.wrapper}>
      <ProductsList />
      <CartIcon />
    </div>
  );
};

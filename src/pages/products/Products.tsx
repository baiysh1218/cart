import { ProductsList } from "../../entities/product/ui/productsList";
import { Hero } from "../../widgets/ui/hero";
import styles from "./styles.module.scss";

export const Products = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <ProductsList />
    </div>
  );
};

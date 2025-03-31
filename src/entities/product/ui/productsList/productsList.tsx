import { useGetProductsQuery } from "../../api/api";
import { ProductCard } from "../productCard";
import { Product } from "../../model";
import { Loader } from "../../../../shared/ui/loader";
import styles from "./styles.module.scss";

export const ProductsList = () => {
  const { data: products } = useGetProductsQuery();

  if (!products) return <Loader />;

  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Наши продукты</h2>
      <div className={styles.grid}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

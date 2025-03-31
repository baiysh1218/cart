import { useGetProductsQuery } from "../../api/api";
import { ProductCard } from "../productCard";
import { Product } from "../../model";
import styles from "./styles.module.scss";

export const ProductsList = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;
  if (!products) return null;

  return (
    <>
      <h2 className={styles.title}>Продукты</h2>
      <div className={styles.wrapper}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

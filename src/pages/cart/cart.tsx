import { FC } from "react";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "../../entities/service/cartSlice";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../shared/hooks/hooks";
import { ProductCard } from "../../entities/product/ui/productCard";

export const CartPage: FC = () => {
  const items = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice: number = useAppSelector(selectTotalPrice);

  return (
    <div className={styles.cartPage}>
      <h2 className={styles.title}>Ваша корзина</h2>

      {items.length === 0 ? (
        <div className={styles.emptyCart}>Корзина пуста</div>
      ) : (
        <>
          <div className={styles.itemsList}>
            {items.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Товаров:</span>
              <span>{totalItems} шт.</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Общая сумма:</span>
              <span className={styles.totalPrice}>{totalPrice} ₽</span>
            </div>
            <button className={styles.checkoutButton}>Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
};

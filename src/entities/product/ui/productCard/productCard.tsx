import { FC } from "react";
import { Product } from "../../model";
import { StarRating } from "../../../../shared/ui/storRating/starRating";
import CartIcon from "../../../../assets/CartIcon.svg";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/hooks";
import { addToCart, removeFromCart } from "../../../service/cartSlice";

import styles from "./styles.module.scss";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.content}>
        <h3>{product.title}</h3>
        <div className={styles.rating}>
          <StarRating rating={+product.rating.rate} maxRating={5} />
        </div>
        <div className={styles.bottom}>
          <h4>{product.price} $</h4>
          <button
            onClick={handleCartClick}
            className={styles.cartButton}
            aria-label={isInCart ? "Remove from cart" : "Add to cart"}
          >
            {isInCart ? (
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO3WrwrCQBzA8W+waFVQo/gIJpPB4hCsgqBPYDHrA4gvIZh8g3UNaza7OLOCYeDfiXBBLN7N305Bv3Dtx3243WCDX20OhGqtgOYn4BA4AUUsN1H4wDbcULBnG04BAXABsrZxV526YxvuPr1sUmv2Ci7EBG90Tr2MAR7rwKMY4JYOXBFGr0BOB04AO0F4gUFTQXhoArcF4aoJnAHOAmgAJDHME4BdItQXgHtR4DywfwPdAmkiVlaP/GgAHtQPRikq+rvV1dfFBxyBOe38h/tbC8x9P+yoTe+b1QTm/mGlGw7LH6npIjrWAAAAAElFTkSuQmCC"
                alt=""
                className={styles.cartIcon}
              />
            ) : (
              <img src={CartIcon} alt="" className={styles.cartIcon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

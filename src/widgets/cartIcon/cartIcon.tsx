import { useNavigate } from "react-router-dom";
import Icon from "../../assets/CartIcon.svg";
import { selectTotalItems } from "../../entities/service/cartSlice";
import { useAppSelector } from "../../shared/hooks/hooks";
import styles from "./styles.module.scss";
import { APP_ROUTES } from "../../shared/constants";

export const CartIcon = () => {
  const totalItems = useAppSelector(selectTotalItems);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(APP_ROUTES.cart);
  };

  return (
    <div onClick={handleRedirect} className={styles.cartIcon}>
      <span>{totalItems}</span>
      <img src={Icon} alt="" />
    </div>
  );
};

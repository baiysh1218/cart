import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../../../assets/CartIcon.svg";
import { useAppSelector } from "../../../shared/hooks/hooks";
import { selectTotalItems } from "../../../entities/service/cartSlice";
import styles from "./styles.module.scss";

export const Navbar = () => {
  const totalItems = useAppSelector(selectTotalItems);
  const navigate = useNavigate();
  const currentPath = useLocation();

  return (
    <header className={styles.navbar}>
      <nav>
        {currentPath.pathname !== "/" && (
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
        )}

        <Link to="/cart" className={styles.cartLink}>
          <img src={Icon} alt="" />
          <span>{totalItems}</span>
          Корзина
        </Link>
      </nav>
    </header>
  );
};

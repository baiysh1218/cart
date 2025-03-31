import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Магазин продуктов. Все права защищены.</p>
      <div className={styles.links}>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Условия использования</a>
      </div>
    </footer>
  );
};

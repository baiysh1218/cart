import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.navbarSkeleton}>
        <div className={styles.logoPlaceholder}></div>
        <div className={styles.navLinks}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.navLink}></div>
          ))}
        </div>
        <div className={styles.cartIcon}></div>
      </div>

      <div className={styles.heroSkeleton}>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}></div>
          <div className={styles.heroSubtitle}></div>
          <div className={styles.heroButton}></div>
        </div>
      </div>

      <div className={styles.productSkeleton}>
        <h2 className={styles.sectionTitle}></h2>
        <div className={styles.productsGrid}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.cardSkeleton}>
              <div className={styles.imagePlaceholder}></div>
              <div className={styles.content}>
                <div className={styles.titleLine}></div>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.star}></span>
                  ))}
                </div>
                <div className={styles.priceLine}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.waveAnimation}></div>
    </div>
  );
};

import styles from "./styles.module.scss";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.starsWrapper}>
        <div className={styles.starsBackground}>
          {[...Array(maxRating)].map((_, i) => (
            <span key={`bg-${i}`} className={styles.starEmpty}>
              ★
            </span>
          ))}
        </div>
        <div
          className={styles.starsFilled}
          style={{ width: `${(rating / maxRating) * 100}%` }}
        >
          {[...Array(maxRating)].map((_, i) => (
            <span key={`fg-${i}`} className={styles.starFilled}>
              ★
            </span>
          ))}
        </div>
      </div>
      <span className={styles.ratingText}>
        {rating}/{maxRating}
      </span>
    </div>
  );
};

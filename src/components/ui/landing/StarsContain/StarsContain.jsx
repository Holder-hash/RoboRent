import styles from "./StarsContain.module.scss";
import star from "../../../../assets/svg/star.svg";

function StarsContain({ title, ...props }) {
  return (
    <div className={styles.starsContain} {...props}>
      <div className={styles.titleBlock}>{title}</div>
      <div className={styles.starsContainer}>
        <img src={star} />
        <img src={star} style={{ opacity: ".4" }} />
        <img src={star} style={{ opacity: ".3" }} />
        <img src={star} style={{ opacity: ".2" }} />
        <img src={star} style={{ opacity: ".1" }} />
      </div>
    </div>
  );
}

export default StarsContain;

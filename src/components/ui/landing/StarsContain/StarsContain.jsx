import styles from "./StarsContain.module.scss";

function StarsContain({ title }) {
  return (
    <div className={styles.starsContain}>
      <div className={styles.titleBlock}>{title}</div>
      <div></div>
    </div>
  );
}

export default StarsContain;

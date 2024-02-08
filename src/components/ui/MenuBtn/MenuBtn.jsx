import styles from "./MenuBtn.module.scss";

function MenuBtn({ menuActive, ...props }) {
  return (
    <div
      className={`${styles.menuBtn} ${menuActive ? styles.menuActive : ""}`}
      {...props}
    >
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
    </div>
  );
}

export default MenuBtn;

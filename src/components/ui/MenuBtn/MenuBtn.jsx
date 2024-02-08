import styles from "./MenuBtn.module.scss";

function MenuBtn() {
  return (
    <div className={styles.menuBtn}>
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
    </div>
  );
}

export default MenuBtn;

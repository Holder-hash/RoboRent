import styles from "./MenuBtn.module.scss";

function MenuBtn({ ...props }) {
  return (
    <div className={styles.menuBtn} {...props}>
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
      <span className={styles.menuBtnItem}></span>
    </div>
  );
}

export default MenuBtn;

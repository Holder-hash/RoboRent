import styles from "./BotsListBtn.module.scss";

function BotsListBtn({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export default BotsListBtn;

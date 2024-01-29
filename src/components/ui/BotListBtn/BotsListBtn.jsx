import styles from "./BotsListBtn.module.scss";

function BotsListBtn({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default BotsListBtn;

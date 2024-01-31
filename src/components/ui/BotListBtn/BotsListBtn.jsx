import styles from "./BotsListBtn.module.scss";

function BotsListBtn({ children, className, ...props }) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default BotsListBtn;

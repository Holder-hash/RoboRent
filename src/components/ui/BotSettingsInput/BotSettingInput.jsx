import styles from "./BotSettingInput.module.scss";

function BotSettingInput({ children, ...props }) {
  return <input {...props} className={styles.input} />;
}

export default BotSettingInput;

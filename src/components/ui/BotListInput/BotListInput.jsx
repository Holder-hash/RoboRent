import styles from "./BotListInput.module.scss";
import { useRef } from "react";

function BotListInput({ children, value, ...props }) {
  const inputRef = useRef(null);

  return (
    <input className={styles.input} ref={inputRef} value={value} {...props} />
  );
}

export default BotListInput;

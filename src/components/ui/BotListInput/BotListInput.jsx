import styles from "./BotListInput.module.scss";
import { useRef } from "react";

function BotListInput({ children, ...props }) {
  const inputRef = useRef(null);

  return <input className={styles.input} ref={inputRef} {...props} />;
}

export default BotListInput;

import styles from "./BackgroundElements.module.scss";
import Cloud from "../../../assets/images/cloud.png";

function BackgroundElements() {
  return (
    <div className={styles.backgroundElements}>
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "5%",
          left: "13%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "7%",
          left: "55%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "55%",
          left: "-1.7%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "60%",
          left: "47%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "40%",
          left: "81%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "65%",
          left: "88%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "87%",
          left: "80%",
        }}
      />
      <img
        src={Cloud}
        className={styles.cloud}
        style={{
          top: "90%",
          left: "5%",
        }}
      />
    </div>
  );
}

export default BackgroundElements;

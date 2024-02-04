import styles from "./Rate.module.scss";

function Rate({ title, price }) {
  return (
    <div className={styles.contain}>
      <p className={styles.title}>
        Тариф
        <br />
        {title}
      </p>
      <p className={styles.price}>{price}Р</p>
    </div>
  );
}

export default Rate;

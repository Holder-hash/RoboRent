import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    navigate("/RoboRent/bots-list");
  }

  return (
    <>
      <div className={styles.formContain}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <p className={styles.title}>Вход/регистрация</p>
          <p className={styles.description}>
            Войдите, если уже есть аккаунт или введите новый логин и пароль
          </p>
          <input
            type="text"
            placeholder="Введите логин"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Введите пароль"
            className={styles.input}
          />
          <p className={styles.description}>
            При входе/регистрации - вы принимаете пользовательское соглашение
          </p>
          <div className={styles.buttonsContain}>
            <button
              className={styles.button}
              onClick={() => navigate("/RoboRent")}
            >
              Вернуться назад
            </button>
            <input
              type="submit"
              value={"Продолжить"}
              className={styles.button}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;

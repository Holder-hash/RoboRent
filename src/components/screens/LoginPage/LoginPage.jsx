import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function onSubmitHandler(data) {
    console.log(data);
    navigate("/RoboRent/bots-list/");
  }

  const loginErrorMessage = () => {
    return <p className={styles.errorMessage}>{errors.login.message}</p>;
  };
  const passwordErrorMessage = () => {
    return <p className={styles.errorMessage}>{errors.password.message}</p>;
  };

  return (
    <>
      <div className={styles.formContain}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
          <p className={styles.title}>Вход/регистрация</p>
          <p className={styles.description}>
            Войдите, если уже есть аккаунт или введите новый логин и пароль
          </p>

          <div className={styles.inputContain}>
            <input
              type="text"
              placeholder="Введите логин"
              className={styles.input}
              {...register("login", {
                required:
                  "Логин должен быть больше 5 символов и не включать в себя спец. символы!",
                pattern: {
                  value: /[^@!#$%^&*()"№;%:?]{5,}/,
                  message:
                    "Логин должен быть больше 5 символов и не включать в себя спец. символы!",
                },
              })}
            />

            {errors?.login && loginErrorMessage()}
          </div>

          <div className={styles.inputContain}>
            <input
              type="text"
              placeholder="Введите пароль"
              className={styles.input}
              {...register("password", {
                required:
                  "Пароль должен быть больше 5 символов и не включать в себя спец. символы!",
                pattern: {
                  value: /[^@!#$%^&*()"№;%:?]{5,}/,
                  message:
                    "Пароль должен быть больше 5 символов и не включать в себя спец. символы!",
                },
              })}
            />

            {errors?.password && passwordErrorMessage()}
          </div>

          <p className={styles.description}>
            При входе/регистрации - вы принимаете пользовательское соглашение
          </p>
          <div className={styles.buttonsContain}>
            <button className={styles.button} onClick={() => navigate(-1)}>
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

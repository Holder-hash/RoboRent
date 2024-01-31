import "./Aside.scss";
import { useEffect } from "react";

function Aside() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-post", "wbpointlearning/955");
    script.setAttribute("data-width", "100%");
    document.getElementById("tg-message__body").appendChild(script); // добавляем скрипт в нужный контейнер
  }, []);

  return (
    <div className="aside">
      <div className="menu">
        <p>Прочее:</p>
        <nav>
          <ul>
            <li className="nav__item">
              <a href="">Настройки профиля</a>
            </li>
            <li className="nav__item">
              <a href="">Настроить подписку</a>
            </li>
            <li className="nav__item">
              <a href="">Telegram канал</a>
            </li>
            <li className="nav__item">
              <a href="">Тех. Поддержка</a>
            </li>
            <li className="nav__item">
              <a href="">Все документы и контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="tg-message">
        <p>Сообщение с телеграмм канала</p>
        <div id="tg-message__body" />
      </div>
    </div>
  );
}

export default Aside;

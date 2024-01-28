import "./Aside.scss";

function Aside() {
  return (
    <div className="aside">
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
  );
}

export default Aside;

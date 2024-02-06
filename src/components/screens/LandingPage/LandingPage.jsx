import "./LandingPage.scss";
import LandingBgElements from "./LandingBgElements";
import StarsContain from "../../ui/landing/StarsContain/StarsContain";
import Rate from "../../ui/landing/rate/rate";
import starsStyles from "../../ui/landing/StarsContain/StarsContain.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to(".advantages", {
      opacity: 1,
      y: 0,
      duration: 0.7,

      scrollTrigger: {
        trigger: ".advantages",
      },
    });
    gsap.to(".other", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".other",
        start: "top 95%",
      },
    });
    gsap.to(".rates", {
      opacity: 1,
      y: 0,
      duration: 0.7,

      scrollTrigger: {
        trigger: ".rates",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div className="landing-wrapper">
      <section className="overview">
        <LandingBgElements />
        <div className="overview__inner">
          <div className="overview__left">
            <p className="overview__left-title">
              Быстро
              <br />
              Качественно
              <br />
              Демократично
            </p>
            <p className="overview__left-description">
              Услуги аренды ботов, создания ботов.
            </p>
          </div>
          <div className="overview__right">
            <button
              className="overview__right-btn"
              onClick={() => navigate("/RoboRent/auth/")}
            >
              Перейти
            </button>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="advantages">
          <StarsContain title={"Преимущества"} />

          <div className="advantages__cards">
            <div className="advantages__cards-item_white">
              <p className="advantages__cards-item-title">
                Скорость 💨
                <br />
                создания
              </p>
              <p className="advantages__cards-item-descraption">
                Наш проект полностью
                <br />
                автоматизирован и прост
              </p>
            </div>

            <div className="advantages__cards-item_blue">
              <p className="advantages__cards-item-title">
                Есть 💭
                <br />
                отзывы
              </p>
              <p className="advantages__cards-item-descraption">
                Есть отзывы на разных
                <br />
                площадках.
              </p>
            </div>

            <div className="advantages__cards-item_white">
              <p className="advantages__cards-item-title">
                Очень
                <br />
                бюджетно
              </p>
              <p className="advantages__cards-item-descraption">
                Наши цены ниже чем у остальных,
                <br />а ассортимент больше
              </p>
            </div>
          </div>

          <div className="advantages__about">
            <p>
              <span>Наш проект</span> продвинет{" "}
              <span>
                ваши услуги
                <br />
              </span>
              и принесет <span>дополнительную</span> прибыль
            </p>
          </div>
        </section>

        <StarsContain
          title={"Прочее"}
          className={starsStyles.starsContainReverse}
        />
        <section className="other">
          <div className="other__cards">
            <div className="other__cards-item">
              <p className="other__cards-item-title">Наш Канал Telegram</p>
              <p className="other__cards-item-descraption">
                Все новости нашего проекта, обновления и нововведения
              </p>
            </div>

            <div className="other__cards-item">
              <p className="other__cards-item-title">Отзывы Lolzteam</p>
              <p className="other__cards-item-descraption">
                Все отзывы оставленные на платформе Lolzteam
              </p>
            </div>

            <div className="other__cards-item">
              <p className="other__cards-item-title">Документы проекта</p>
              <p className="other__cards-item-descraption">
                Тут вы можете найти все документы, которые относятся к проекту
              </p>
            </div>

            <div className="other__cards-item">
              <p className="other__cards-item-title">Связь с нами</p>
              <p className="other__cards-item-descraption">
                Все контакты для связи с нами Почта, тех.поддержка и прочее
              </p>
            </div>
          </div>
        </section>

        <StarsContain title={"Тарифы"} />

        <section className="rates">
          <div className="rate__left">
            <Rate title={"Неделя"} price={888} />
            <Rate title={"Неделя"} price={888} />
          </div>
          <div className="rate__right">
            <Rate title={"Неделя"} price={888} />
            <Rate title={"Неделя"} price={888} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;

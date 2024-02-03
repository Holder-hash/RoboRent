import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <section className="overview">
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
          <button className="overview__right-btn">Перейти</button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;

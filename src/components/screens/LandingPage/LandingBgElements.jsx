import "./LandingPage.scss";
import cloud from "../../../assets/images/cloud.png";

function LandingBgElements() {
  return (
    <div className="bg-cloud-contain">
      <img
        src={cloud}
        className="bg-cloud"
        style={{
          width: "120px",
          top: "2%",
          left: "5%",
          transform: "rotate(-15deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud"
        style={{
          width: "120px",
          bottom: "2%",
          left: "2%",
          transform: "rotate(2deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud"
        style={{
          width: "120px",
          top: "4%",
          left: "32%",
          transform: "rotate(-15deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud bg-cloud-rm"
        style={{
          width: "150px",
          bottom: "15%",
          left: "60%",
          transform: "rotate(2deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud"
        style={{
          width: "200px",
          top: "5%",
          left: "65%",
          transform: "rotate(2deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud bg-cloud-pos"
        style={{
          width: "170px",
          bottom: "5%",
          right: "1%",
          transform: "rotate(2deg)",
        }}
      />
      <img
        src={cloud}
        className="bg-cloud"
        style={{
          width: "130px",
          top: "5%",
          right: "1%",
          transform: "rotate(2deg)",
        }}
      />
    </div>
  );
}

export default LandingBgElements;

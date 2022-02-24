import "./services.css";
import json from "../../Data/data.json"


function Services() {
  return (
    <div className="TextImgTwo GlobalSection">
      <div>
        <h1 className="titreone">{json.services.title}</h1>
        <p className="titretwo">
        {json.services.subtitle}
        </p>
      </div>
      <div className="All">
        <div className="first">
          <img className="seo" src={require("../../images/seo.svg")} alt={"icons"}/>
          <h3 className="txt">{json.firstbox.title}</h3>
          <p>{json.firstbox.subtitle}</p>
        </div>
        <div className="first">
          <img className="technology" src={require("../../images/technology.svg")} alt={"icons"}/>
          <h3 className="txt">{json.secondbox.title}</h3>
          <p>{json.secondbox.subtitle}</p>
        </div>
        <div className="first">
          <img className="cloud" src={require("../../images/cloud.svg")} alt={"icons"}/>
          <h3 className="txt">{json.thirdbox.title}</h3>
          <p>{json.thirdbox.subtitle}</p>
        </div>
        <div className="first">
          <img className="support" src={require("../../images/support.svg")} alt={"icons"}/>
          <h3 className="txt">{json.fourthbox.title}</h3>
          <p>{json.fourthbox.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
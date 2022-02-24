import "./info.css";
import json from "../../Data/data.json"

function Info() {
  return (
      <div className="AllInfos GlobalSection">
    <div className="AllInfo">
      <div>
        <div>
          <h1 className="titrethree">{json.info.title}</h1>
          <p className="titretwo">
          {json.info.description}
          </p>
        </div>
        <div className="ff">
          <div className="cc">
            <img className="check" src={require("../../images/check.png")} alt={"check"} />
            <p>{json.info.textone}</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../../images/check.png")} alt={"check"}/>
            <p>{json.info.texttwo}</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../../images/check.png")} alt={"check"}/>
            <p>{json.info.textthree}</p>
          </div>
        </div>
      </div>
    </div>
    <div >
    <img className="MarkImg" src={require("../../images/marketing-img.svg")} alt={"marketing"}/>
  </div>
  </div>
  );
}

export default Info;
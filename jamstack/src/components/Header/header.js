import "./header.css";
import json from "../../Data/data.json"

function Header() {
  return (
    <div>
      <div className="header-g">
        <div className="logo">
          <img src={require("../../images/logo.png")} alt={"logo" } />
        </div>
      </div>
      <div className="TextImg">
        <div className="FullText">
          <h1 className="title-header">{json.header.title}</h1>
          <p className="desc-header">
          {json.header.description}
          </p>
          <button className="Button">{json.header.button}</button>
        </div>
        <div>
            <img  className="banner" src={require("../../images/banner.png")} alt={ "banner"}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
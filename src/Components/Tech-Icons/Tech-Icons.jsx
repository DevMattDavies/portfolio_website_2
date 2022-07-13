import "./Tech-Icons.css";
import HTMLIcon from "../../assets/tech_icons/html.png";
import CSSIcon from "../../assets/tech_icons/css.png";
import JSIcon from "../../assets/tech_icons/js.png";
import ReactIcon from "../../assets/tech_icons/react.png";
import NextIcon from "../../assets/tech_icons/next.png";
import TSIcon from "../../assets/tech_icons/typescript.png";
import APIIcon from "../../assets/tech_icons/api.png";
import NodeIcon from "../../assets/tech_icons/node.png";
import SQLIcon from "../../assets/tech_icons/sql.png";
import ExpressIcon from "../../assets/tech_icons/expressjs2.png";
import VSCodeIcon from "../../assets/tech_icons/vscode.png";
import GithubIcon from "../../assets/tech_icons/github.png";

function TechIcons() {
  return (
    <div className="tech-icon-group">
      <div className="icon-row">
        <img className="tech-icon" src={HTMLIcon} alt="html icon" />
        <img className="tech-icon" src={CSSIcon} alt="css icon" />
        <img className="tech-icon" src={JSIcon} alt="javascript icon" />
        <img className="tech-icon" src={TSIcon} alt="typescript icon" />
      </div>
      <div className="icon-row">
        <img className="tech-icon" src={ReactIcon} alt="react icon" />
        <img className="tech-icon" src={NextIcon} alt="next js icon" />
        <img className="tech-icon" src={APIIcon} alt="API icon" />
      </div>
      <div className="icon-row">
        <img className="tech-icon" src={NodeIcon} alt="node js icon" />
        <img className="tech-icon" src={SQLIcon} alt="SQL icon" />
        <div className="icon-container">
          <img id="express" className="tech-icon" src={ExpressIcon} alt="express icon" />
        </div>
      </div>
      <div className="icon-row">
        <img className="tech-icon" src={VSCodeIcon} alt="vs code icon" />
        <img className="tech-icon" src={GithubIcon} alt="github icon"/>
      </div>
    </div>
  );
}

export default TechIcons;

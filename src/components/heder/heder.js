import "./heder.styles.css";

import DataHeder from "../../data/heder.data.js";
import MainLogo from "../../assets/img/back/MainLogo.png";

export default function PageNotFound() {
  return (
    <header>
      <a href="/" className="mainLogo">
        <img src={MainLogo} alt="NotFound" />
      </a>
      {DataHeder.map((item) => (
        <a href={item.link} style={item.style} key={item.id}>
          {item.linkText}
        </a>
      ))}
    </header>
  );
}

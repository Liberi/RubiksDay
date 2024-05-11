import { observer } from "mobx-react-lite";

import MenuController from "../../../store/hederMenuController.js";
import DataHeder from "../../../data/heder.data.js";
import "../heder.styles.css";

export default observer(function BlockLink() {
  return (
    <div
      className={`flex ${
        MenuController.isOpenMenu ? "blockLinkOpenMenu" : "blockLink"
      }`}
    >
      {DataHeder.map((item) => (
        <a href={item.link} style={item.style} key={item.id}>
          {item.linkText}
        </a>
      ))}
    </div>
  );
});

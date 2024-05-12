import { observer } from "mobx-react-lite";

import MenuController from "../../../store/hederMenuController.js";
import PageController from "../../../store/pagesRouterController.js";
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
        <button 
          style={item.style} 
          key={item.id}
          onClick={()=>{
            // console.log(`На старницу ${item.openPageName}`);
            PageController.toPage(item.openPageName);
          }}
        >
          {item.linkText}
        </button>
      ))}
    </div>
  );
});

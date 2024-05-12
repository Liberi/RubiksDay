import { observer } from "mobx-react-lite";

import MenuController from "../../store/hederMenuController.js";
import PageController from "../../store/pagesRouterController.js";

import MainLogo from "../../assets/img/back/MainLogo.png";
import BlockLink from "./blockLink/block.link.js";
import "./heder.styles.css";

export default observer(function PageNotFound() {
  return (
    <header
      className={`flex ${MenuController.isOpenMenu ? "hederOpenMenu" : ""}`}
    >
      <button
        className="mainLogo"
        onClick={()=>{
          // console.log(`На старницу MainPage`);
          PageController.toPage('MainPage');
        }}
      >
        <img src={MainLogo} alt="NotFound" />
      </button>
      <button
        className="menuHeder"
        onClick={() => {
          MenuController.updateStatusOpenedMenu(!MenuController.isOpenMenu);
        }}
      />
      <BlockLink />
    </header>
  );
});

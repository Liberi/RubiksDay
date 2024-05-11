import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import "./heder.styles.css";
import MenuController from "../../store/hederMenuController.js";

import MainLogo from "../../assets/img/back/MainLogo.png";
import BlockLink from "./blockLink/block.link.js";

export default observer(function PageNotFound() {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      if (getWindowSize().innerWidth >= 1000) {
        MenuController.updateStatusOpenedMenu(false);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header
      className={`flex ${MenuController.isOpenMenu ? "hederOpenMenu" : ""}`}
    >
      <a href="/" className="mainLogo">
        <img src={MainLogo} alt="NotFound" />
      </a>
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

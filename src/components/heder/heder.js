import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";

import "./heder.styles.css";
import DataHeder from "../../data/heder.data.js";
import MenuController from "../../store/hederMenuController.js";

import MainLogo from "../../assets/img/back/MainLogo.png";

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
      // style={ }
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
    </header>
  );
});

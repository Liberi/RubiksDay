import React from "react";

import "./footerStyle.css";
import AutorLogo from "../../assets/img/icon/autorLogo.jpg";
import GitHubLogo from "../../assets/img/icon/github-mark.png";
import ImageNotFound from "../../assets/img/back/ImageNotFound.png";

export default function Footer() {
  return (
    <footer className="flex">
      <div className="contactContainer flex">
        <div className="autorInfo flex">
          <a href="https://t.me/Lib_int" target="_blank" rel="noreferrer">
            <img src={AutorLogo} alt={ImageNotFound} />
          </a>
          <div className="containerInfo">
            <p>Made by Liberi</p>
            <a href="https://t.me/Lib_int" target="_blank" rel="noreferrer">
              my telegram
            </a>
          </div>
        </div>
        <div className="gitHubInfo flex">
          <div className="containerInfo">
            <a
              href="https://github.com/Liberi/rubiksDay"
              target="_blank"
              rel="noreferrer"
            >
              On GitHub
            </a>
          </div>
          <a
            href="https://github.com/Liberi/rubiksDay"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubLogo} alt={ImageNotFound} />
          </a>
        </div>
      </div>
    </footer>
  );
}

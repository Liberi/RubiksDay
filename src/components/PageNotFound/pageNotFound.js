import HederMenuController from "../../store/hederMenuController";

import logo from "../../assets/img/back/KubMain.png";
import ImageNotFoung from "../../assets/img/back/ImageNotFound.png"
import "./pageNotFound.css";
import { observer } from "mobx-react-lite";

export default observer( function PageNotFound() {
  return (
    <section
      style={HederMenuController.isOpenMenu ? { paddingTop: 70 } : null}
      className="App"
    >
      <div className="App-header">
        <img src={logo} className="App-logo" alt={ImageNotFoung} />
        <h2 style={{ color: "#FF4145" }}>404 Page not found</h2>
        <p>
          <b>Страница не найдена или еще находится в разработке</b>
        </p>
        <a
          className="App-link"
          href="https://github.com/Liberi/rubiksDay"
          target="_blank"
          rel="noopener noreferrer"
        >
          На GitHub
        </a>
      </div>
    </section>
  );
});

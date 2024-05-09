import logo from "../../assets/img/back/KubMain.png";
import "./pageNotFound.css";

export default function PageNotFound() {
  return (
    <section className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2
        style={{color: '#FF4145'}}
        >404 Page not found</h2>
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
}
 
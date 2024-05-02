import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Будущая страница разработки сайта
           для Дня Кубика-рубика</b>
        </p>
        <a
          className="App-link"
          href="https://github.com/Liberi/rubiksDay"
          target="_blank"
          rel="noopener noreferrer"
        >
          На GinHub
        </a>
      </header>
    </div>
  );
}

export default App;

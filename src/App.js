// import logo from './logo.svg';
import "./App.css";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import Heder from "./components/heder/heder";

function App() {
  return (
    <section className="mainSection">
      <Heder />
      <PageNotFound />
    </section>
  );
}

export default App;

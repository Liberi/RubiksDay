// import logo from './logo.svg';
import "./App.css";
// import PageNotFound from "./components/PageNotFound/pageNotFound";
import Heder from "./components/heder/heder";
import Slider from "./components/slider/slider";

function App() {
  return (
    <section className="mainSection">
      <Heder />
      <main>
        <Slider />
        {/* <PageNotFound /> */}
      </main>
    </section>
  );
}

export default App;

// import logo from './logo.svg';
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import "./App.css";

import Heder from "./components/heder/index.js";
import Footer from "./components/footer";

import PageRouterController from "./store/pagesRouterController";
import WindowSizeController from "./store/windowSizeController.js";

export default observer(function App() {
  useEffect(() => {
    WindowSizeController.startListening();

    return () => {
      WindowSizeController.stopListening();
    };
  }, []);

  return (
    <section className="mainSection">
      <Heder />
      <main>{PageRouterController.getPage}</main>
      <Footer />
    </section>
  );
});

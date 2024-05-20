import { makeAutoObservable } from "mobx";

import NotFoundScreen from "../screens/NotFoundScreen";
import MainScreen from "../screens/MainScreen";
import HistoriPage from "../screens/HistoriScreen";
import FiftyYearsScreen from "../screens/FiftyYearsSceen";
import FactsScreen from "../screens/FactsScreen";

class PageRouter {
  pages = new Map([
    ["PageNotFound", <NotFoundScreen />],
    ["MainPage", <MainScreen />],
    ["HistoriPage", <HistoriPage />],
    ["FiftyYearsPage", <FiftyYearsScreen />],
    ["FactsPage", <FactsScreen />],
  ]);
  currentPages = "MainPage";

  constructor() {
    makeAutoObservable(this);
  }
  toPage(pageName) {
    this.currentPages = pageName;
  }

  get getPage() {
    try {
      if (!this.pages.has(this.currentPages)) {
        console.log(`Страницы с именем ${this.currentPages} не сущетвовало!`);
        return this.pages.get("PageNotFound");
      }
      return this.pages.get(this.currentPages);
    } catch (error) {
      console.log(`Ошибка при получении страницы ${this.currentPages}`);
      return this.pages.get("PageNotFound");
    }
  }
}

let pageRouter = new PageRouter();

export default pageRouter;

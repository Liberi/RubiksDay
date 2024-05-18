import { makeAutoObservable } from "mobx";

import NotFoundScreen from "../screens/NotFoundScreen";
import MainScreen from "../screens/MainScreen";

class PageRouter {
  pages = new Map([
    ["PageNotFound", <NotFoundScreen />],
    ["MainPage", <MainScreen />],
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

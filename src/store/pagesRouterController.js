import { makeAutoObservable } from "mobx";

import PageNotFound from "../components/PageNotFound/pageNotFound";
import Slider from "../components/slider/slider";

class PageRouter {
  pages = new Map([
    ["PageNotFound", <PageNotFound />],
    ["MainPage", <Slider />],
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

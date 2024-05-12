import { makeAutoObservable } from "mobx";

import HederMenuController from "./hederMenuController";

class WindowSizeController {
  constructor() {
    makeAutoObservable(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    // Привязываем контекст для обработчика события
  }

  handleWindowResize() {
    // Получаем ширину из окна напрямую
    if (window.innerWidth >= 1000) {
      HederMenuController.updateStatusOpenedMenu(false);
    }
  }

  startListening() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  stopListening() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
}

const windowSizeController = new WindowSizeController();

export default windowSizeController;

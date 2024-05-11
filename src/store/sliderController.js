import { makeAutoObservable } from "mobx";

import DataSlider from "../data/sliders.data";

class SliderController {
  currentSlider = 0;

  constructor() {
    makeAutoObservable(this);
  }

  updateIndexSlider(sliderIndex) {
    // console.log(`ms ${DataSlider.length}`);
    // console.log(`Тек слайдер ${this.currentSlider}`);
    if (this.currentSlider + sliderIndex > DataSlider.length - 1) {
      this.currentSlider = 0;
      return;
    }
    if (this.currentSlider + sliderIndex < 0) {
      this.currentSlider = DataSlider.length - 1;
      return;
    }
    this.currentSlider += sliderIndex;
  }
}

let sliderController = new SliderController();

export default sliderController;

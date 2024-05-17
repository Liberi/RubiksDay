import { makeAutoObservable } from "mobx";

import DataSlider from "../data/sliders.data";

class SliderController {
  currentSliderIndex = 0;
  currentSliderAnim = 'slide-appearance';
  isFirstClick = true;

  constructor() {
    makeAutoObservable(this);
  }

  updateIndexSlider(sliderIndex) {
    // console.log(`ms ${DataSlider.length}`);
    // console.log(`Тек слайдер ${this.currentSlider}`);
    if (this.currentSliderIndex + sliderIndex > DataSlider.length - 1) {
      this.currentSliderIndex = 0;
      return;
    }
    if (this.currentSliderIndex + sliderIndex < 0) {
      this.currentSliderIndex = DataSlider.length - 1;
      return;
    }
    this.currentSliderIndex += sliderIndex;
  }

  updateAnimSlider(isAppearanse){
    this.currentSliderAnim = isAppearanse ? 'slide-appearance' : 'slide-disappearance';
  }

  get getCurrentElement(){
    return DataSlider[this.currentSliderIndex]
  }

  firstClick(){
    this.isFirstClick = false;
  }
}

let sliderController = new SliderController();

export default sliderController;

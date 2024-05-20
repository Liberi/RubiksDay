import { action, makeAutoObservable, observable } from "mobx";

class SliderController {
  DataSlider = null;
  currentSliderIndex = 0;
  currentSliderAnim = "slide-appearance";
  isFirstClick = true;

  constructor() {
    makeAutoObservable(this, {
      DataSlider: observable,
      updateDataSlider: action,
    });
  }

  updateIndexSlider(sliderIndex) {
    if (this.currentSliderIndex + sliderIndex > this.DataSlider.length - 1) {
      this.currentSliderIndex = 0;
      return;
    }
    if (this.currentSliderIndex + sliderIndex < 0) {
      this.currentSliderIndex = this.DataSlider.length - 1;
      return;
    }
    this.currentSliderIndex += sliderIndex;
  }

  updateAnimSlider(isAppearanse) {
    this.currentSliderAnim = isAppearanse
      ? "slide-appearance"
      : "slide-disappearance";
  }

  updateDataSlider(newData) {
    this.currentSliderIndex = 0;
    this.DataSlider = newData;
  }

  get getCurrentElement() {
    return this.DataSlider[this.currentSliderIndex];
  }

  firstClick() {
    this.isFirstClick = false;
  }
}

let sliderController = new SliderController();

export default sliderController;

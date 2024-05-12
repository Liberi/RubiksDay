import { observer } from "mobx-react-lite";

import SliderController from "../../store/sliderController";
import HederMenuController from "../../store/hederMenuController.js";
import SliderItem from "./sliderItem/slider.item";
import "./stiles.slyder.css";
import "./slider.anim.css";

export default observer(function Slider() {
  return (
    <section className="flex sectionSlider"
      style={HederMenuController.isOpenMenu ? {paddingTop: 70} : null}
    >
      <div className="buttonContainer">
        <button
          className=""
          onClick={() => {
            SliderController.updateAnimSlider(true);
            SliderController.updateIndexSlider(-1);
            /* setTimeout(() =>{
              // SliderController.updateAnimSlider(false);
              SliderController.updateIndexSlider(-1);
            }, 500); */
          }}
        />
      </div>
      <div className="comtainerSlider">
        <SliderItem />
      </div>
      <div className="buttonContainer">
        <button
          className=""
          onClick={() => {
            SliderController.updateAnimSlider(true);
            SliderController.updateIndexSlider(1);
            /* setTimeout(() =>{
              // SliderController.updateAnimSlider(true);
              SliderController.updateIndexSlider(1);
            }, 500); */
          }}
        />
      </div>
    </section>
  );
});

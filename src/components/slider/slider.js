import { observer } from "mobx-react-lite";

import SliderController from "../../store/sliderController";
import HederMenuController from "../../store/hederMenuController.js";
import SliderItem from "./sliderItem/slider.item";
import "./stiles.slyder.css";

export default observer(function Slider() {
  return (
    <section className="flex sectionSlider"
      style={HederMenuController.isOpenMenu ? {paddingTop: 70} : null}
    >
      <div className="buttonContainer">
        <button
          className=""
          onClick={() => {
            SliderController.updateIndexSlider(-1);
          }}
        />
      </div>
      <div className="comtainerSlider">
        <SliderItem /* sliderIndex={SliderController.currentSlider} */ />
      </div>
      <div className="buttonContainer">
        <button
          className=""
          onClick={() => {
            SliderController.updateIndexSlider(1);
          }}
        />
      </div>
    </section>
  );
});
/*className="" sliderIndex={SliderController.currentSlider} */

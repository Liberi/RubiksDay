import { observer } from "mobx-react-lite";

import SliderItem from "./sliderItem/slider.item";
import SliderController from "../../store/sliderController";
import "./stiles.slyder.css";

export default observer(function Slider() {
  return (
    <section className="flex sectionSlider">
      <button
        className=""
        onClick={() => {
          SliderController.updateIndexSlider(-1);
        }}
      />
      <div className="comtainerSlider">
        <SliderItem sliderIndex={SliderController.currentSlider}/>
      </div>
      <button
        className=""
        onClick={() => {
          SliderController.updateIndexSlider(1);
        }}
      />
    </section>
  );
});
/*className="" sliderIndex={SliderController.currentSlider} */

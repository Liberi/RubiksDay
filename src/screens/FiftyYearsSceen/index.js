import React from "react";

import Slider from "../../components/slider";
import FormApplication from "../../components/form";

import DataSliderFiftyYears from "../../data/slider.data.fiftyYears";

export default function FiftyYearsScreen() {
  
  return (
    <>
      <Slider dataSlider={DataSliderFiftyYears} />
      <FormApplication />
    </>
  );
}

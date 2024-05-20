import React from "react";

import Slider from "../../components/slider";
import FormApplication from "../../components/form";

import DataSlider from "../../data/sliders.data.main";

export default function MainScreen() {
  
  return (
    <>
      <Slider dataSlider={DataSlider} />
      <FormApplication />
    </>
  );
}

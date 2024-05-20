import React from "react";

import Slider from "../../components/slider";
import FormApplication from "../../components/form";

import DataSliderFacts from "../../data/slider.data.facts";

export default function FactsScreen() {
  
  return (
    <>
      <Slider dataSlider={DataSliderFacts} />
      <FormApplication />
    </>
  );
}

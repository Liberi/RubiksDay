import React from "react";

import Slider from "../../components/slider";
import FormApplication from "../../components/form";

import DataSliderHistori from "../../data/sliders.data.histori";

export default function HistoriScreen() {
  
  return (
    <>
      <Slider dataSlider={DataSliderHistori} />
      <FormApplication />
    </>
  );
}

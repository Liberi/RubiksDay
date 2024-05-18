import { observer } from "mobx-react-lite";
// import React, { useState, useEffect } from "react";

import SliderController from "../../../store/sliderController";
import ImageNotFound from "../../../assets/img/back/ImageNotFound.png";
import "./styles.slider.item.css";
import "../slider.anim.css";

export default observer(function SliderItem() {
  let sliderData = SliderController.getCurrentElement;

  return (
    <div
      key={sliderData.id}
      className={`flex sliderItemComtainer ${SliderController.currentSliderAnim}`}
    >
      
      <img
        src={require(`../../../assets/img/back/${sliderData.fileNameLogo}`)}
        alt={ImageNotFound}
      />
      <div className="loadAnim blockLoad"/>
      <h1>{sliderData.hedText}</h1>
      <p>«{sliderData.mainText}»</p>
      <h3>{sliderData.botText}</h3>
      <button
        className="flex"
        onClick={() => {
          const link = sliderData.link;
          if (link[0] === "#") {
            window.location = link;
          } else {
            window.open(link);
          }
        }}
      >
        УЗНАТЬ БОЛЬШЕ
      </button>
    </div>
  );
});

import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";

import SliderController from "../../../store/sliderController";
import ImageNotFound from "../../../assets/img/back/ImageNotFound.png";
import "./styles.slider.item.css";
import "../slider.anim.css";

export default observer(function SliderItem() {
  let sliderData = SliderController.getCurrentElement;

  /* const [isImgLoading, setIsImgLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    setIsImgLoading(true);
    // Здесь делайте запрос на получение изображения
    fetch(require(`../../../assets/img/back/${sliderData.fileNameLogo}`))
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
        setIsImgLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке изображения:", error);
        setIsImgLoading(false);
      });
  }, [sliderData.fileNameLogo]); */

  return (
    <div
      key={sliderData.id}
      className={`flex sliderItemComtainer ${SliderController.currentSliderAnim}`}
    >
      {/* {isImgLoading ? (
        <img src={ImageNotFound} alt="ImageNotFound" />
      ) : (
        <img src={imageSrc} alt="Main Image" />
      )} */}
      <img
        src={require(`../../../assets/img/back/${sliderData.fileNameLogo}`)}
        alt={ImageNotFound}
      />
      <h1>{sliderData.hedText}</h1>
      <p>«{sliderData.mainText}»</p>
      <h3>{sliderData.botText}</h3>
      <a href={sliderData.link} className="flex">
        УЗНАТЬ БОЛЬШЕ
      </a>
    </div>
  );
});

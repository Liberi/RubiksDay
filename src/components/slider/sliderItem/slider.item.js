import "./styles.slider.item.css";
import DataSlider from "../../../data/sliders.data";

export default function SliderItem({ sliderIndex = 0 }) {
  let sliderData = DataSlider[sliderIndex];

  return (
    <div key={sliderData.id} className="flex sliderItemComtainer">
      <img src={require(`../../../assets/img/back/${sliderData.fileNameLogo}`)} alt="NotFound" />
      <h1>{sliderData.hedText}</h1>
      <p>«{sliderData.mainText}»</p>
      <h3>{sliderData.botText}</h3>
      <a href={sliderData.link}></a>
    </div>
  );
}

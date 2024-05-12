import "./styles.slider.item.css";
import SliderController from "../../../store/sliderController";
import { observer } from "mobx-react-lite";

export default observer( function SliderItem() {
  let sliderData = SliderController.getCurrentElement;

  return (
    <div key={sliderData.id} className="flex sliderItemComtainer">
      <img src={require(`../../../assets/img/back/${sliderData.fileNameLogo}`)} alt="NotFound" />
      <h1>{sliderData.hedText}</h1>
      <p>«{sliderData.mainText}»</p>
      <h3>{sliderData.botText}</h3>
      <a href={sliderData.link}></a>
    </div>
  );
});

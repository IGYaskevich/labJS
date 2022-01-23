import coverImage from "../../../../static/images/aboutUs.png";
import { Button } from "../../../../components/ButtonForLayout";

import style from "./aboutUs.module.css";

export const About = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.image}>
          <img className={style.image} src={coverImage} alt={"some image"} />
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.forWhat}>{"For Veterinarians"}</div>
          <h2 className={style.titleH2}>
            We're here to support you and your practice
          </h2>
          <div className={style.text}>
            {"Mixlab offers a simple, fast, reliable (and fun) home delivery pharmacy service " +
              "for your clients. No more delays, no more miscommunications, no more grumpy pets. It’s time " +
              "to partner with a pharmacy that cares about customer experience as much as you do."}
          </div>
          <Button title={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

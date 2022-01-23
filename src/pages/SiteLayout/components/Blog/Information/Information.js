import { FC } from "react";
import style from "./information.module.css";

type InformationType = {
  smallImage: string;
  avatar: string;
  text?: string;
  name: string;
};
export const Information: FC<InformationType> = ({
  smallImage,
  avatar,
  name,
  text,
}) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={avatar} alt={"some image"} className={style.avatar} />
      </div>

      <div className={style.information}>
        <div>
          “Tootsie just received her Mixlab order and she’s so excited for it!
          Within two hours of ordering it got delivered to the house and its
          like she knew it was at the door. She absolutely hates taking her
          medicine but she truly loves her Mixlab box because it’s so
          informative, quick, easy to order but especially because includes a
          new toy each time! Thank you Mixlab for always taking care of her! She
          can’t wait to place her next order now!”
        </div>

        <div className={style.authorBlock}>
          <div className={style.smallImage}>
            <img src={smallImage} alt={"some image"} />
          </div>
          <div className={style.nameAuthor}>{name}</div>
        </div>
      </div>
    </div>
  );
};

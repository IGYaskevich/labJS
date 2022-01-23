import { FC } from "react";
import style from "./explanation.module.css";

type ExplanationType = {
  title: string;
  description: string;
  image: string;
};
export const Explanation: FC<ExplanationType> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={style.container}>
      <div className={style.imageBlog}>
        <img src={image} alt={"some image"} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

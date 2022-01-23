import style from "./explanation.module.css";


export const Explanation= ({
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

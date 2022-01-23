import style from "./itemsDescription.module.css";


export const ItemsDescription = ({
  title,
  description,
  isLine,
  descriptionSignature,
}) => {
  return (
    <div className={style.containerDescription}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.text}>{description}</div>
      {isLine && <hr className={style.hr} />}
      {/*{{descriptionSignature && <div style={{margin: '5px 0 0 0'}}>{descriptionSignature}</div>}*/}
    </div>
  );
};

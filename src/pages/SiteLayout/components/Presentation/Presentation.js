import { Button } from "../../../../components/ButtonForLayout";
import style from "./presentation.module.css";

export const PresentationPage = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.itemBlock}>
          <h1 className={style.heading}>
            The pet pharmacy humans are jealous of.
          </h1>
        </div>

        <div className={style.itemBlock}>
          <div className={style.description}>
            <div>
              5 stars on{" "}
              <a href={"/"} className={style.href}>
                Yeap
              </a>
              ,{" "}
              <a href={"/"} className={style.href}>
                Google
              </a>{" "}
              and{" "}
              <a href={"/"} className={style.href}>
                Facebook
              </a>
              , because your
            </div>
            <div> best deserves only the best in pet care</div>
          </div>

          <div>
            <Button title={"Try Mixlab"} />
          </div>
        </div>
      </div>
    </div>
  );
};

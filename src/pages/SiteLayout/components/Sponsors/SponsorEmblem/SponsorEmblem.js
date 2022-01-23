import {FC} from "react";
import style from "./sponsorsEmblem.module.css"

type SponsorEmblemType = {
    image: string
}
export const SponsorEmblem: FC<SponsorEmblemType> = ({image}) => {
    return (
        <div className={style.container}>
            <img src={image} alt={'some sponsor'}/>
        </div>
    );
};


import style from "./sponsorsEmblem.module.css"

export const SponsorEmblem = ({image}) => {
    return (
        <div className={style.container}>
            <img src={image} alt={'some sponsor'}/>
        </div>
    );
};


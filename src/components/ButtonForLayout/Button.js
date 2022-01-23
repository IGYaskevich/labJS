import style from './index.module.css'

export const Button = ({title}) => {
    return <button className={style.button}>
        {title}
    </button>
};


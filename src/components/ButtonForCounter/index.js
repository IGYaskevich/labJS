import style from "./button.module.css";
import {memo} from "react";


export const Button = memo(({ title, method, disabled }) => {
    return (
        <button
            className={style.buttonElement}
            onClick={method}
            disabled={disabled}
        >
            {title}
        </button>
    );
});
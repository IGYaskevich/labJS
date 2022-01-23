import {Header} from "../Header";

import style from "./index.module.css";


export const MainLayout= ({ children }) => {
    return (
        <div className={style.container}>
            <Header />
            <div style={{ width: "100%" }}>{children}</div>
        </div>
    );
};

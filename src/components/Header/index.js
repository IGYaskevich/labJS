import { memo } from "react";

import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

import style from "./index.module.css";

export const Header = memo(() => {
    return (
        <div className={style.container}>
            <NavLink className={style.navBar} to={ROUTE_NAMES.COUNTER_MANAGER_REDUX}>
                Manager counters redux
            </NavLink>
            <NavLink className={style.navBar} to={ROUTE_NAMES.COUNTER_MANAGER}>
                Manager counters
            </NavLink>
            <NavLink className={style.navBar} to={ROUTE_NAMES.COUNTER}>
                Counter
            </NavLink>
            <NavLink className={style.navBar} to={ROUTE_NAMES.LAYOUT}>
                Layout
            </NavLink>
            <NavLink className={style.navBar} to={ROUTE_NAMES.TODO}>
                todo
            </NavLink>
            <NavLink className={style.navBar} to={ROUTE_NAMES.POKEMON}>
                pokemon
            </NavLink>
        </div>
    );
});
import React from "react";
import style from "./navBar.module.css";


export const NavBar = ({ item }) => {
  return (
    <a className={style.href} href={item.href}>
      {item.title}
    </a>
  );
};

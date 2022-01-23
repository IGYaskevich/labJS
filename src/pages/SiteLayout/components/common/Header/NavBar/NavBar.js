import React, { FC } from "react";
import style from "./navBar.module.css";

type NavBarType = {
  item: {
    href: string;
    title: string;
  };
};
export const NavBar: FC<NavBarType> = ({ item }) => {
  return (
    <a className={style.href} href={item.href}>
      {item.title}
    </a>
  );
};

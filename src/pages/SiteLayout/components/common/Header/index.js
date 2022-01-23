import {NavBar} from "./NavBar/NavBar";

import style from "./index.module.css";

import logo from "../../../../../static/images/logo.png";
import {Button} from "../../../../../components/ButtonForLayout/Button";

export const Header = () => {
  const navLinkList = [
    { href: "", title: "Veterinarians" },
    { href: "", title: "How it works" },
    { href: "", title: "About us" },
    { href: "", title: "Blog" },
    { href: "", title: "Shop" },
  ];

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.navContainer}>
          {navLinkList.map((item) => (
            <NavBar key={item.title} item={item} />
          ))}
        </div>

        <a className={style.logoLink}>
          <img src={logo} className={style.logo} alt="logo" />
        </a>

        <div className={style.authorizationBlock}>
          <a className={style.authorizationLink}>Veterinarian login</a>
          <Button title={"Try Mixlab"} />
        </div>
      </div>
    </div>
  );
};

import style from "./footer.module.css";

import google from "../../../../static/images/social/google.svg";
import fes from "../../../../static/images/social/fecebook.svg";
import inst from "../../../../static/images/social/inst.svg";
import twiter from "../../../../static/images/social/twiter.svg";

export const Footer = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.containerInformation}>
          <h4 className={style.title}>Quick Links</h4>
          <div>Veterinarians</div>
          <div>Products</div>
          <div>About us</div>
          <div>Shop</div>
        </div>
        <div className={style.containerInformation}>
          <h4 className={style.title}>CALL OR TEXT</h4>
          <div>375(29)790-50-88</div>
          <h4 className={style.title}>EMAIL</h4>
          <div>example@gmail.com</div>
          <h4 className={style.title}>FAX</h4>
          <div>375(29)790-50-88</div>
        </div>
        <div className={style.containerInformation}>
          <h4 className={style.title}>NEW YORK CITY</h4>
          <div style={{ width: "150px" }}>
            <p>336 West 37th St Suite 850 New York, NY 10018</p>
            <p>Mon-Sat 10am - 8pm ET</p>
          </div>
        </div>
        <div className={style.containerInformation}>
          <h4 className={style.title}>LOS ANGELES</h4>
          <div style={{ width: "150px" }}>
            <p>2223 Federal Ave Los Angeles, CA 90064</p>
            <p>Mon-Sat 9am - 7pm PT Sun 9am - 1pm PT</p>
          </div>
        </div>
        <div className={style.containerInformation}>
          <h4 className={style.title}>SOCIAL</h4>
          <div className={style.social}>
            <img src={google} alt={""} />
            <img src={twiter} alt={""} />
            <img src={fes} alt={""} />
            <img src={inst} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className="container">
        <ul className={classes.Label}>
          <li>
            <a>Hakkımızda</a>
          </li>
          <li>
            <a>EvlumbaTV</a>
          </li>
          <li>
            <a>Mobil</a>
          </li>
          <li>
            <a>Müşteri</a>
          </li>
          <li>
            <a>Bize Ulaşın</a>
          </li>
          <li>
            <a>(c)Evlumba 2020</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

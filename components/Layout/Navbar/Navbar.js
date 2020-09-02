import React from "react";
import styles from "./Navbar.module.css";
import StyleSubMenu from "./SubMenu/StillerSubMenu";
import ProductMegaSubMenu from "./SubMenu/UrunlerMegaSubMenu";
// import Logo from '../../../public/evlumbaalogo.png';

const Navbar = () => {
  return (
    <div id={styles.navbar}>
      <ul id={styles.navbar_ul}>
        <li id={styles.navbar_li}>
          <a id={styles.navbar_a} href="#">
            STİLLER
          </a>
          <StyleSubMenu />
        </li>
        <li id={styles.navbar_li}>
          <a id={styles.navbar_a} href="#">
            ÜRÜNLER
          </a>
          <ProductMegaSubMenu />
        </li>
        <li id={styles.navbar_li}>
          <a id={styles.navbar_a} href="#">
            EVLUMBATV
          </a>
        </li>
        <li id={styles.navbar_li}>
          <a id={styles.navbar_a} href="#">
            PROFESYONELLER
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import classes from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
//import evlumbaalogo from "../../../public/image/evlumbaalogo.png";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className="container">
        <div className={classes.Logo}>
          <img src="" />
        </div>
        <SearchBar />
        <ButtonGroup />
      </div>
    </div>
  );
};

export default Header;

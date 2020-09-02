import React from "react";
import classes from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={classes.SearchBar}>
      <input type="text" placeholder="Products, Styles, Concepts..." />
    </div>
  );
}
export default SearchBar;

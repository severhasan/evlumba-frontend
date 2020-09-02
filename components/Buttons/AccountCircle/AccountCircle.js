import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import classes from "./AccountCircle.module.css";

function AccountCircle() {
  return (
    <div className={classes.AccountCircle}>
      <AccountCircleOutlinedIcon style={{ color: "green", fontSize: "30px" }} />
    </div>
  );
}
export default AccountCircle;

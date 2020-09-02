import React from "react";
import CollectionsBookmark from "../../../Buttons/Collection/CollectionBookmark";
import AccountCircle from "../../../Buttons/AccountCircle/AccountCircle";
import Notifications from "../../../Buttons/Notifications/Notifications";
import classes from "./ButtonGroup.module.css";

function ButtonGroup() {
  return (
    <div>
      <AccountCircle />

      <Notifications />
      <CollectionsBookmark />
    </div>
  );
}
export default ButtonGroup;

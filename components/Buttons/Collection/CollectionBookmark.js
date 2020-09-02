import React from "react";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import classes from "./CollectionsBookmark.module.css";

function CollectionBookmark() {
  return (
    <div className={classes.CollectionBookmark}>
      <CollectionsBookmarkOutlinedIcon
        style={{ color: "green", fontSize: "30px" }}
      />
    </div>
  );
}
export default CollectionBookmark;

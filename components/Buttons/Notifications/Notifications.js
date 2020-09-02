import React from "react";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import styles from "./Notifications.module.css";

function Notifications() {
  return (
    <div className={styles.Notifications}>
      <NotificationsNoneOutlinedIcon
        style={{ color: "green", fontSize: "30px" }}
      />
    </div>
  );
}
export default Notifications;

import React from "react";
import styles from "./Friends.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        src={avatar}
        alt={name + "avatar"}
        width="48"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

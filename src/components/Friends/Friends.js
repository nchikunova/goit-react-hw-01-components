import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";
import styles from "./Friends.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((friend) => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;

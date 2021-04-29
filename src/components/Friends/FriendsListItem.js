import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendlistItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        src={avatar}
        alt={name + 'avatar'}
        width="48"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;

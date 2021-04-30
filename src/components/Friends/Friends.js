import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import styles from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

// Если нужен один из типов или прийдет id в виде строки, используем oneOfType.
// id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// В данном случае это не нужно.

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;

import React from "react";
import PropTypes from 'prop-types';
import { FriendListContainer, FriendListItem } from './FriendList.styled';

export function FriendList({ friends}) {
  return (
    <FriendListContainer>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <span className="status">{friend.isOnline}</span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={friend.avatar}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </FriendListItem>
        );
      })}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
}
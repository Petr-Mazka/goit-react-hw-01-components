import React from "react";
import PropTypes from 'prop-types';

function FriendList({friends}) {
  return (
    <ul className="friend-list">
        {friends.map(friend => (
            <li className="item" key={friend.id}>
            <span className="status">{friend.isOnline ? "Online" : "Offline"}</span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
            </li>
        ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired          
        }).isRequired
    ).isRequired
};

export default FriendList;
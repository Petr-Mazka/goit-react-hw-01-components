import React from "react";
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({friends}) {
    
    return (
    <ul className={css.friendlist}>
        {friends.map(friend => (
            <li className={css.item} key={friend.id}>
            <span style={{backgroundColor: friend.isOnline ? "green" : "red"}} className={css.status}></span>
            <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
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
import FriendListItem from '../FriendListItem';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={style.item}>
                    <FriendListItem
                        name={friend.name}
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;

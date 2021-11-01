import FriendListItem from '../FriendListItem';
import style from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map(({ id, name, isOnline, avatar }) => (
                <li key={id} className={style.item}>
                    <FriendListItem
                        name={name}
                        isOnline={isOnline}
                        avatar={avatar}
                    />
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
            avatar: PropTypes.string.isRequired,
        }),
    ),
};

export default FriendList;

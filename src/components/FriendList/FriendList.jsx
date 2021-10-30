import FriendListItem from '../FriendListItem';
import style from './FriendList.module.css';

const Friendlist = ({ friends }) => {
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

export default Friendlist;

import style from './FriendListItem.module.css';

const FriendListItem = ({ name, isOnline, avatar }) => (
    <>
        <span
            className={isOnline ? style.statusOnline : style.statusOffline}
        ></span>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.name}>{name}</p>
    </>
);

export default FriendListItem;

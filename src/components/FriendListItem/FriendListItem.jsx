import style from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ name, isOnline, avatar }) => (
    <>
        <span
            className={isOnline ? style.statusOnline : style.statusOffline}
        ></span>
        <img className={style.avatar} src={avatar} alt={name} width="48" />
        <p className={style.name}>{name}</p>
    </>
);

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default FriendListItem;

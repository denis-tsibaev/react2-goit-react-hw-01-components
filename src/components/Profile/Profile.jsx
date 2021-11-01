import PropTypes from 'prop-types';
import style from './Profile.module.css';

// Компонент должен принимать несколько пропсов с информацией о пользователе:
// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности

const Profile = ({ name, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
        <div className={style.profile}>
            <div className="description">
                <img
                    className={style.avatar}
                    src={avatar}
                    alt="Аватар пользователя"
                />
                <p className={style.name}>{name}</p>
                <p className={style.tag}>{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li>
                    <span className={style.label}>Followers: </span>
                    <span className={style.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={style.label}>Views: </span>
                    <span className={style.quantity}>{views}</span>
                </li>
                <li>
                    <span className={style.label}>Likes: </span>
                    <span className={style.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;

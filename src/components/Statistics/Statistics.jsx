// import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    const randomColor = () => '#' + Math.random().toString(16).substr(-6);

    return (
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>

            <ul className={style.statList}>
                {stats.map(stat => (
                    <li
                        className={style.item}
                        style={{ backgroundColor: randomColor() }}
                        key={stat.id}
                    >
                        <span className={style.label}>{stat.label} </span>
                        <span className={style.percentage}>
                            {stat.percentage}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;

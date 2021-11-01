import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import randomColor from './RandomColor';

const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        className={style.item}
                        style={{ backgroundColor: randomColor() }}
                        key={id}
                    >
                        <span className={style.label}>{label} </span>
                        <span className={style.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;

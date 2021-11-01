import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
    return (
        <div>
            <table className={style.transactionHistory}>
                <thead className={style.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({ id, type, amount, currency }) => (
                        <tr key={id} className={style.tr}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;

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
                    {transactions.map(transaction => (
                        <tr key={transaction.id} className={style.tr}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;

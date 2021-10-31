import Container from './components/Container';
import Profile from './components/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory';
import items from './components/TransactionHistory/transactions.json';

function App() {
    return (
        <div className="App">
            <Container>
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
                <Statistics title="Upload stats:" stats={statisticalData} />
                <Statistics stats={statisticalData} />
                <FriendList friends={friends} />
                <TransactionHistory transactions={items} />
            </Container>
        </div>
    );
}

export default App;

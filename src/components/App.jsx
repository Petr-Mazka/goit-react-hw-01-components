import SocialProfile from "./SocialProfile/SocialProfile";
import user from "../data/user";
import Statistics from "./Statistics/Statistics";
import statistics from "../data/statistics";
import FriendList from "./FriendList/FriendList";
import friends from "../data/friends";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SocialProfile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

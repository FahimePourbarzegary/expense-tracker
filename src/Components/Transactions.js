import TransactionList from "./TransactionList";

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions-container">
      <h3>Transactions</h3>
      <input
        type="text"
        name="search"
        placeholder="Search.."
        onChange={() => {}}
      />
      <div className="transactions">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default Transactions;

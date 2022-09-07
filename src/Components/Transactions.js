import TransactionList from "./TransactionList";

const Transactions = ({ transactions, filterTransactions, filteredTnx }) => {
  return (
    <div className="transactions-container">
      <h3>Transactions</h3>
      <div className="transactions">
        <TransactionList
          transactions={transactions}
          filterTransactions={filterTransactions}
          filteredTnx={filteredTnx}
        />
      </div>
    </div>
  );
};

export default Transactions;

const Transactions = ({ transactins }) => {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      <input
        type="text"
        name="search"
        defaultValue=""
        placeholder="Search.."
        onChange={() => {}}
      />
    </div>
  );
};

export default Transactions;

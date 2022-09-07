const TransactionList = ({ filterTransactions, filteredTnx, transactions }) => {
  const onChangeHandler = (e) => {
    filterTransactions(e.target.value);
  };
  if (!transactions.length) return <p>add some Transaction</p>;
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search.."
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
      <section>
        {filteredTnx.length
          ? filteredTnx.map((t) => (
              <div
                className="transaction"
                key={t.id}
                style={{ borderRightColor: t.type === "income" && "green" }}
              >
                <p>{t.description}</p>
                <p>{t.amount}$</p>
              </div>
            ))
          : "no result"}
      </section>
    </>
  );
};

export default TransactionList;

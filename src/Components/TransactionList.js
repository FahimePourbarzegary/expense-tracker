const TransactionList = ({ transactions }) => {
  return (
    <section>
      {transactions.map((t) => (
        <div className="transaction" key={t.id}>
          <p>{t.description}</p>
        </div>
      ))}
    </section>
  );
};

export default TransactionList;

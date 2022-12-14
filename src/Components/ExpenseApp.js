import { useEffect, useState } from "react";
import OverView from "./OverView.js";
import Transactions from "./Transactions.js";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filteredTnx, setFilteredTnx] = useState(transactions);
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) =>
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount))
    );
    setExpense(exp);
    setIncome(inc);
    setFilteredTnx(transactions);
  }, [transactions]);
  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };
  const addTransaction = (valueForm) => {
    setTransactions([...transactions, { ...valueForm, id: Date.now() }]);
  };
  return (
    <div>
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <Transactions
        transactions={transactions}
        filterTransactions={filterTransactions}
        filteredTnx={filteredTnx}
      />
    </div>
  );
};

export default ExpenseApp;

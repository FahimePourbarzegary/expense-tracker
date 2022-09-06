import { useState } from "react";
import OverView from "./OverView.js";
import Transactions from "./Transactions.js";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (valueForm) => {
   setTransactions([ ...transactions, {...valueForm,id:Date.now()}]);
   
  };
  return (
    <div>
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default ExpenseApp;

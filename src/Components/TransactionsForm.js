import { useState } from "react";

const TransactionsForm = () => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [Expense, setExpense] = useState(0);
  return (
    <form>
      <input
        type="number"
        name="amount"
        placeholder="Amount.."
        defaultValue="0"
      />
      <input
        type="text"
        name="description"
        defaultValue="Initial value"
        placeholder="Description"
      />
      <div className="radio-btn">
        <input type="radio" name="type" value="" />
        <label>Expense</label>
        <input type="radio" name="type" value="" />
        <label>Income</label>
      </div>
      <button type="submit" className="btn">
        Add Transactions
      </button>
    </form>
  );
};

export default TransactionsForm;

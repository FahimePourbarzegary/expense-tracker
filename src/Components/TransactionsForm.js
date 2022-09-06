import { useState } from "react";

const TransactionsForm = ({ addTransaction }) => {
  const [valueForm, setValueForm] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });
  const onChangeHandler = (e) => {
    setValueForm({ ...valueForm, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTransaction(valueForm);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="number"
        name="amount"
        placeholder="Amount.."
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={onChangeHandler}
      />
      <div className="radio-btn">
        <input
          type="radio"
          name="type"
          value="expense"
          id="expense"
          onChange={onChangeHandler}
          checked={valueForm.type === "expense"}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          id="income"
          onChange={onChangeHandler}
          checked={valueForm.type === "income"}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="btn">
        Add Transactions
      </button>
    </form>
  );
};

export default TransactionsForm;

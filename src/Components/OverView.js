import { useState } from "react";
import TransactionsForm from "./TransactionsForm";

const OverView = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="balance">
        <p>Balance:</p>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionsForm addTransaction={addTransaction} />}
      <div className="expenseSection">
        <div className="expenseSection__box">Expense</div>
        <div className="expenseSection__box">Income</div>
      </div>
    </>
  );
};

export default OverView;

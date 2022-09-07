import { useState } from "react";
import TransactionsForm from "./TransactionsForm";

const OverView = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="balance">
        <p>Balance:{income - expense}</p>
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
      {isShow && <TransactionsForm addTransaction={addTransaction} 
      isShow={setIsShow}/>}
      <div className="expenseSection">
        <div className="expenseSection__box">
          <p>Expense</p>
          <p style={{ color: "red" }}>{expense}$</p>
        </div>
        <div className="expenseSection__box">
          <p>Income</p>
          <p style={{ color: "green" }}>{income}$</p>
        </div>
      </div>
    </>
  );
};

export default OverView;

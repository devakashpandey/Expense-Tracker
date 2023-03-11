import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import CustomExpense from "./Components/CustomExpenses/CustomExpense";
import { useState } from "react";

let dummyExpense = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2022, 12, 27),
  },
];

function App() {
  let [expenses, setExpenses] = useState(dummyExpense);

  let expenseData1 = (expense) => {
    // HERE WE STORE THE CHILD DATA IN FUNC (expenseData1) (expense)
    setExpenses([expense, ...expenses]);
  };

  return (
    <>
      <br />
      <center>
        <h1 className="title">Expense Tracker</h1>
      </center>
      <CustomExpense addExpenseData2={expenseData1} />{" "}
      {/* HERE WE PASS THE FUNC IN COMPO WHERE THE DATA STORE */}
      <Expenses expenses={expenses} />
      {/* this is upper shape designing */}
      <div class="custom-shape-divider-top-1678560075">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default App;

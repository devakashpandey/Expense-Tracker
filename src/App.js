import './App.css';
import Expenses from './Components/Expenses/Expenses';
import CustomExpense from './Components/CustomExpenses/CustomExpense';
import { useState } from 'react';


let dummyExpense = [
  {
    id: "e1",
    title: "School Fee",
    amount : 250,
    date : new Date(2022, 12, 27)
  },
]

function App() {

  let [expenses, setExpenses] = useState(dummyExpense)  

  let expenseData1 = (expense) =>{    // HERE WE STORE THE CHILD DATA IN FUNC (expenseData1) (expense)
    setExpenses([ expense , ...expenses ])
  }

  return (
   <><br/>
   <center><h1>Expense Tracker Project</h1></center>

   <CustomExpense addExpenseData2={expenseData1}/>  {/* HERE WE PASS THE FUNC IN COMPO WHERE THE DATA STORE */}
   <Expenses expenses={expenses}/>
  
   </>

  )
}

export default App;

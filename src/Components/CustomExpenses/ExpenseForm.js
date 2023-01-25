import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {  // HERE WE PASS THE PROPS TO CALL THE PARENT FUNC

  let [inputTitle , setinputTitle] = useState("")
  let [inputAmount , setinputAmount] = useState("")
  let [inputDate , setinputDate] = useState("")

  const formSubmit = (e) =>{
     e.preventDefault()

     let expenseData = {   // MAKE AN OBJECT AND STORE THE ALL DATA
          title: inputTitle,
          amount: inputAmount,
          date: new Date(inputDate)
     }
     props.addExpenseData(expenseData);   // HERE WE CALL THE PARENT FUNCTION (addExpenseData) HERE PASS THE DATA

     setinputTitle("")
     setinputAmount("")
     setinputDate("")

  }

  return (
     <>
  <form onSubmit={formSubmit}>
     <div className='expense-form'>

       <div className='expense-form-control'>
            <label>Title</label>
             <input type="text" placeholder='Enter expense name' 
             onChange={(e) => setinputTitle(e.target.value) } value={inputTitle}/>
       </div>

       <div className='expense-form-control'>
            <label>Amount</label>
            <input type="number" min="0.1" step="0.1" placeholder='Enter amount' 
             onChange={(e) => setinputAmount(e.target.value)} value={inputAmount} />
       </div>

       <div className='expense-form-control'>
            <label>Date</label>
            <input type="date" onChange={(e) => setinputDate(e.target.value)}
             value={inputDate}/>
       </div>

     </div>

     <div className='expense-btn'>
          <button >Add Expense</button>
     </div>
  </form>
     
     </>
  )
}

export default ExpenseForm;

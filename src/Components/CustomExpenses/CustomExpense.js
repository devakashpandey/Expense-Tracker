import React from 'react';
import "./CustomExpense.css";
import ExpenseForm from './ExpenseForm';

const CustomExpense = (props) => {

  let expenseData2 = (customExpenses) =>{   // HERE WE RECIEVE THE CHILD DATA IN FUNCTION (expenseData2) (customExpense)
     let newExpenses = {
         ...customExpenses,
         id : Math.random().toString()  // WE ADD ID IN THE OLD DATA
     }
     props.addExpenseData2(newExpenses);  // HERE WE CALL THE PARENT (APP) FUNC (addExpenseData2) AND PASS THE NEW DATA IN IT
   }

   
  return (
     <>
     <div className='custom-expense'>

        <ExpenseForm addExpenseData={expenseData2}/> {/* WE PASS THE FUNCTION IN COMPO TO IMPORT IN CHILD COMPO */}

     </div>
     
     </>
  )
}

export default CustomExpense

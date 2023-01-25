import React from 'react'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem'

const Expenses = ({expenses}) => {

  return (
       <>
       <div className='expenses'>

   { 
     expenses.map((currExpense)=>{
         return(
            <ExpenseItem
              date={currExpense.date}
              title={currExpense.title}
              amount={currExpense.amount}
             />
         )
     })
   }

    </div>
       </>
  )
}

export default Expenses;

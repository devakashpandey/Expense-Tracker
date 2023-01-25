import React from 'react'
import "./ExpenseDate.css"

const ExpenseDate = ({date}) => {
 
 let day = date.toLocaleString("en-US" , {day: "2-digit"});
 let month = date.toLocaleString("en-US" , {month: "long"});
 let year = date.getFullYear();

  return (
     <>
      <div className='expense-date'>
            <div className='expense-day'>{day}</div>
            <div className='expense-month'>{month}</div>
            <div className='expense-year'>{year}</div>
      </div>
     
     </>
  )
}

export default ExpenseDate;

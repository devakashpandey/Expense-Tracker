import React, { useState } from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({date, title , amount}) => {

  return (
     <>
        <div className='expense-item'>

              <ExpenseDate date={date}/>  

              <div className='expense-item-descrip'>
                   <h2>{title}</h2>
                   <div className='expense-item-price'>${amount}</div>
              </div>

        </div>
        
     </>
  )
}

export default ExpenseItem;

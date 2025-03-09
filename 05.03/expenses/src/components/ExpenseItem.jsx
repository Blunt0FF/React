import React from 'react'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../redux/slices/expensesSlice'

export default function ExpenseItem({item}) {
    const dispatch = useDispatch()
  return (
    <li>
        <p>{item.name} - {item.amount}</p>
        <button onClick={() => dispatch(removeExpense(item.id))}>Delete</button>
    </li>
  )
}

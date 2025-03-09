import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addExpense } from '../redux/slices/expensesSlice'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const expenses = useSelector((state) => state.expenses.expenses)
    console.log(expenses)
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        e.preventDefault()
        if (text.trim() && amount.trim()) {
            dispatch(addExpense({text, amount}))
            setText('')
            setAmount(0)
        }
    }

  return (
    <div>
        <h1>Expense List</h1>
        <form onSubmit={handleAdd}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button>Add Expense</button>
        </form>
        <ul>
            {expenses.map(item => (
                <ExpenseItem key={item.id} item={item} />
            ))}
        </ul>
    </div>
  )
}

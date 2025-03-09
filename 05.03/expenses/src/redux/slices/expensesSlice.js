import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [
        {
            id: Date.now(),
            name: "Saft",
            amount: "$5"
        },
        {
            id: Date.now()+1,
            name: "Wurst",
            amount: "$8"
        }
    ]
}

const expensesSlice = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push({id: Date.now(), name: action.payload.text, amount: '$' + action.payload.amount})
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter(item => item.id !== action.payload)
        }
    }
})

export const {addExpense, removeExpense} = expensesSlice.actions
export default expensesSlice.reducer
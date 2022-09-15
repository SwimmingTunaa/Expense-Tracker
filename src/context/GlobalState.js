import React, { createContext, useReducer } from "react";
import {AppReducer} from './AppReducer'

//initial state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) =>
{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions

    function deleteTransaction(id)
    {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

      function addTransaction(transactions)
    {
        dispatch({
            type: 'ADD',
            payload: transactions
        })
    }

    return (
        <GlobalContext.Provider value={{transactions : state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}
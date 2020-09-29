import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer"
const initialState={
    transactions: [
        {id:1 , description:"Project 1 income", transactionAmount:10000},
        {id:2 , description:"Project 2 income", transactionAmount:20000},
        {id:3 , description:"Project 3 income", transactionAmount:30000}
    ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider =({childern})=>{
    const[ state , dispatch]= useReducer(AppReducer,initialState);
    return(
        <GlobalContext.Provider value= {{transactions: state.transactions}}>
        {childern}
        
        </GlobalContext.Provider>

    )
}
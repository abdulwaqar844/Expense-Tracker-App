import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";
export const  TransactionHistory = ()=> {
const {transactions} =useContext(GlobalContext);
    return (
        <div>
            <h3>
                Transation History
            </h3>
            <ul className="list">
                {transactions.map(transaction=>
                    <Transaction key={transaction.id}  transaction={transaction}/>
                    )}
                    <span>$1000.00</span>
                </ul>
              
        </div>
);
}

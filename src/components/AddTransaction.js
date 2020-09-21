import React, { useState } from 'react';
export const AddTransaction = () => {
    const[description, setDescription]=useState("");
    const[transactionamount, setTransactionAmount]=useState(0);
    return (
        <div >
            <h3>Add new Transation</h3>
            <form>
                <div className="from-control" >
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    value={description} 
                    placeholder="Detail of Transaction" 
                    onChange={(e) =>setDescription(e.target.value)}                    />
                </div>

                <div className="from-control" >
                    <label htmlFor="description">Transaction Amount</label>
                    <input type="number" 
                    value={transactionamount} 
                    placeholder="Dollar Value of Transaction"
                    onChange={(e) =>setTransactionAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>

            </form>

        </div>
    );
}

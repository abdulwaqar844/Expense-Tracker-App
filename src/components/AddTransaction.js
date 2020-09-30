import React, { useContext, useState } from 'react';
import { GlobalContext } from "../context/GlobalState"
export const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    return (
        <div >
            <h3>Add new Transation</h3>
            <form onSubmit={onSubmit}>
                <div className="from-control" >
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        value={description}
                        placeholder="Detail of Transaction"
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="from-control" >
                    <label htmlFor="description">Transaction Amount</label>
                    <input type="number"
                        value={transactionAmount}
                        placeholder="Dollar Value of Transaction"
                        onChange={(e) => setTransactionAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>

            </form>

        </div>
    );
}

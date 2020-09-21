import React from 'react';
export const  TransactionHistory = ()=> {
    return (
        <div>
            <h3>
                Transation History
            </h3>
            <ul className="list">
                <li className="plus">
                    Project Deliverible 1
                    <span>$1000.00</span>
                    <button className="delete-btn">X</button>
                </li>

                <li className="plus">
                    Project Deliverible 2
                    <span>$500.00</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
);
}

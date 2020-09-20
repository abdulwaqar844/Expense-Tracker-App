import React from 'react';
import './index.css';

function Child() {
    return (
        <div className="container">
            <h1 className="header">
                Expense Tracker App
            </h1>
            <div className="top-container">
            <h2>Income</h2>
            <h2>$500</h2>
            <h2>Expense</h2>
            <h2>$500</h2>
            </div>
        </div>
    );
}

export default Child;

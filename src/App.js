import React from 'react';
import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/Balance";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

export function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <AccountSummary/>
      <TransactionHistory />
      <AddTransaction />
      </div > 
    </div>


  );
}
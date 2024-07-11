
import React, { useState, useEffect } from 'react';
import styles from './ExpenseTracker.module.css';
import Wallet from '../wallet/Wallet';
import Expense from '../Expense/Expense';
import PieChartComponent from '../chart/pieChart/Chart';
import ExpenseList from '../expensesList/ExpenseList';

const ExpenseTracker = () => {
  const [walletBalance, setWalletBalance] = useState(() => {
    const savedBalance = localStorage.getItem('balance');
    return savedBalance !== null ? Number(savedBalance) : 5000;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses !== null ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('balance', walletBalance);
  }, [walletBalance]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    window.dispatchEvent(new Event('storage')); 
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setWalletBalance((prevBalance) => prevBalance - newExpense.price);
  };

  const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  const editExpense = (index, newTitle) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense, i) =>
        i === index ? { ...expense, title: newTitle } : expense
      )
    );
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Expense Tracker</h1>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Wallet balance={walletBalance} setWalletBalance={setWalletBalance} />
        </div>
        <div className={styles.midSection}>
          <Expense walletBalance={walletBalance} addExpense={addExpense} expenses={expenses} />
          {/* <ExpenseList deleteExpense={deleteExpense} editExpense={editExpense} /> */}
        </div>
        <div className={styles.rightSection}>
          <PieChartComponent />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;

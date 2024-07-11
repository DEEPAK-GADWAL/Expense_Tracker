
import React, { createContext, useContext, useState, useEffect } from 'react';

const ExpenseContext = createContext();

export const useExpenseContext = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [walletBalance, setWalletBalance] = useState(() => {
    const savedBalance = localStorage.getItem('balance');
    return savedBalance ? Number(savedBalance) : 5000;
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('balance', walletBalance);
  }, [walletBalance]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  const editExpense = (index, newTitle) => {
    setExpenses((prev) =>
      prev.map((expense, i) =>
        i === index ? { ...expense, title: newTitle } : expense
      )
    );
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, editExpense, walletBalance, setWalletBalance }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};


import React from "react";
import RecentTransSactions from "../RecentTransaction/RecentTransaction";
import { useExpenseContext } from "../database/database";
import styles from "./ExpensesList.module.css";

const ExpenseList = () => {
  const { expenses, deleteExpense, editExpense } = useExpenseContext();

  return (
    <div className={styles.expenseListContainer}>
      {expenses.length === 0 ? (
        <p className={styles.noExpenses}>No expenses added yet.</p>
      ) : (
        expenses.map((expense, index) => (
          <RecentTransSactions
            key={index}
            title={expense.title}
            date={expense.date}
            price={expense.price}
            onDelete={() => deleteExpense(index)}
            onEdit={(newTitle) => editExpense(index, newTitle)}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;

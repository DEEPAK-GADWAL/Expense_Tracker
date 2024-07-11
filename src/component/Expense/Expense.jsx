
import React, { useState } from "react";
import styles from "./Expense.module.css";
import { useExpenseContext } from "../database/database";
import { useSnackbar } from "notistack";

const Expense = ({ walletBalance, addExpense, expenses }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const { addExpense: addDatabaseExpense } = useExpenseContext();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddExpenseClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(price) > walletBalance) {
      enqueueSnackbar("Expense amount exceeds wallet balance.", { 
        variant: 'error' 
      }); 
      return;
    }

    const newExpense = { title, price: Number(price), category, date };
    addDatabaseExpense(newExpense);
    addExpense(newExpense);
    setShowForm(false);
    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
    setError("");
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.txt}>
        Expenses: <span style={{ color: "orange" }}>₹{expenses.reduce((sum, expense) => sum + expense.price, 0)}</span>
      </h2>
      <button className={styles.btn} onClick={handleAddExpenseClick}>
        + Add Expenses
      </button>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.formBox}>
            <h1 className={styles.formTitle}>Add Expenses</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                  className={styles.input}
                />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.inputRow}>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={styles.input}
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Travel">Travel</option>
                </select>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitBtn}>
                  Add Expense
                </button>
                <button type="button" onClick={handleCancel} className={styles.cancelBtn}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expense;

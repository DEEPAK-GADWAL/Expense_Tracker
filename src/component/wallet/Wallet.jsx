
import React, { useState } from 'react';
import styles from './Wallet.module.css';
import { Snackbar } from '@mui/material';
const Wallet = ({ balance, setWalletBalance }) => {
  const [showForm, setShowForm] = useState(false);
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleAddIncomeClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setIncomeAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incomeAmount.trim() === "" || isNaN(incomeAmount)) {
      enqueueSnackbar("Please enter a valid income amount.", { variant: 'error' });
      return;
    }
    setWalletBalance((prevBalance) => {
      const newBalance = prevBalance + Number(incomeAmount);
      return newBalance;
    });
    setShowForm(false);
    setIncomeAmount("");
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.txt}>
        Wallet Balance: <span style={{ color: '#9dff5b ' }}>₹{balance}</span>
      </h2>
      <button className={styles.btn} onClick={handleAddIncomeClick}>+ Add Income</button>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.formBox}>
            <h3 className={styles.formTitle}>Add Income</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="number"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
                placeholder="Income Amount"
                required
                className={styles.input}
              />
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitBtn}>Add Balance</button>
                <button type="button" onClick={handleCancel} className={styles.cancelBtn}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;

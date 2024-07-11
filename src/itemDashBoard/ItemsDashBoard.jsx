import React from "react";
import styles from "./ItemsDashBoard.module.css";
import RecentTransSactions from "../component/RecentTransaction/RecentTransaction";
import TopExpense from "../component/topExpenses/TopExpenses";
import { Grid } from "@mui/material";
import { useExpenseContext } from "../component/database/database";
import ExpenseList  from "../component/expensesList/ExpenseList"
const ItemsDashBoard = () => {
  return (
    <Grid container spacing={3} className={styles.container}>
      <Grid item xs={12} md={8}>
        <h2 className={styles.sectionTitle}>Recent Transactions</h2>
        <div className={styles.card}>
          <ExpenseList />
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <h2 className={styles.sectionTitle}>Top Expenses</h2>
        <div className={styles.card}>
          <TopExpense />
        </div>
      </Grid>
    </Grid>
  );
};

export default ItemsDashBoard;
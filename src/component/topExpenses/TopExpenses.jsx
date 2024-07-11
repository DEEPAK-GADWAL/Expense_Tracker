import React from "react";
import styles from "./TopExpenses.module.css"
import BarChartComponent from "../chart/barChart/barChart";
import { useExpenseContext } from "../database/database";
 const TopExpenses=()=>{
  const{expenses}= useExpenseContext();
  return(
<div className={styles.mainContainer}>
<BarChartComponent expenses={expenses}/>
</div>
  )
 }

 export default TopExpenses;
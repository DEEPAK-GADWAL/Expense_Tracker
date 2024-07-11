import React from 'react'
import ReactDOM from 'react-dom/client'
import Expensetracker from './component/ExpenseTracker/ExpenseTracker'
import ItemsDashBoard from "./itemDashBoard/ItemsDashBoard"
import './global.css' 
// import ExpenseList from './component/expensesList/ExpenseList'
import { ExpenseProvider } from './component//database/database';
import { SnackbarProvider } from 'notistack'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Expensetracker />
        <ItemsDashBoard />
        {/* <ExpenseList /> */}
      </SnackbarProvider>
    </ExpenseProvider>
  </React.StrictMode>,
)
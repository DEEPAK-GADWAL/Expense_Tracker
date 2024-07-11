
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useExpenseContext } from '../../database/database';

const PieChartComponent = () => {
  const { expenses } = useExpenseContext();
  
  const data = [
    {
      name: 'Food',
      value: expenses.filter((expense) => expense.category === 'Food').reduce((sum, expense) => sum + expense.price, 0),
    },
    {
      name: 'Entertainment',
      value: expenses.filter((expense) => expense.category === 'Entertainment').reduce((sum, expense) => sum + expense.price, 0),
    },
    {
      name: 'Travel',
      value: expenses.filter((expense) => expense.category === 'Travel').reduce((sum, expense) => sum + expense.price, 0),
    },
  ];

  const COLORS = ['#B39DDB', '#FFCC80', '#FFF59D'];

  return (
    <PieChart width={400} height={320}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;

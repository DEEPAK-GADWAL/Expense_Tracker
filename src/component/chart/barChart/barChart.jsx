
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';

const CustomLabel = ({ x, y, value, category }) => {
  return (
    <text x={x - 20} y={y + 10} fill="#000" textAnchor="end">
      {category}
    </text>
  );
};

const BarChartComponent = ({ expenses }) => {
  const data = [
    {
      name: 'Food',
      value: expenses.filter(expense => expense.category === 'Food').reduce((sum, expense) => sum + expense.price, 0),
    },
    {
      name: 'Entertainment',
      value: expenses.filter(expense => expense.category === 'Entertainment').reduce((sum, expense) => sum + expense.price, 0),
    },
    {
      name: 'Travel',
      value: expenses.filter(expense => expense.category === 'Travel').reduce((sum, expense) => sum + expense.price, 0),
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 130,
          bottom: 20,
        }}
        barSize={20}
      >
        <XAxis type="number" axisLine={false} tickLine={false} tick={false} />
        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={false} />
        <Bar dataKey="value" fill="#8884d8" radius={[0, 10, 10, 0]}>
          <LabelList dataKey="value" content={({ x, y, value, index }) => (
            <CustomLabel x={x} y={y} value={value} category={data[index].name} />
          )} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

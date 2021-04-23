import React from 'react';

interface IExpenseItem {
  title: string;
  date: string;
  amount: string;
}

export const ExpenseItem: React.FC<IExpenseItem> = ({
  title,
  date,
  amount,
}) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{date}</div>
      <div>{amount}</div>
    </div>
  );
};

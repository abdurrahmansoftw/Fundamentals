import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      description: 'Toilet Paper',
      amount: 94.12,
      category: 'Groceries',
    },
    {
      id: 'e2',
      description: 'New TV',
      amount: 799.49,
      category: 'Entertainment',
    },
    {
      id: 'e3',
      description: 'Car Insurance',
      amount: 294.67,
      category: 'Car',
    },
    {
      id: 'e4',
      description: 'New Desk (Wooden)',
      amount: 450,
      category: 'Furniture',
    },
  ]);

  return <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />;
};

export default App;

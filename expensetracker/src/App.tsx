import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 'e1', description: 'Toilet Paper', amount: 94.12, category: 'Groceries' },
    { id: 'e2', description: 'New TV', amount: 799.49, category: 'Entertainment' },
    { id: 'e3', description: 'Car Insurance', amount: 294.67, category: 'Utilities' },
    { id: 'e4', description: 'New Desk (Wooden)', amount: 450, category: 'Furniture' },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <div className='container'>
      <h1 className='text-center text-primary my-3 fw-bold'>Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </div>
  );
};

export default App;

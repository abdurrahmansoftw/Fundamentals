import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Buy a book', amount: 10, category: 'Education' },
    { id: 2, description: 'Buy a car', amount: 10000, category: 'Automotive' },
    { id: 3, description: 'Buy a house', amount: 100000, category: 'Housing' },
    { id: 4, description: 'Buy a laptop', amount: 1000, category: 'Electronics' },
    { id: 9, description: 'Buy a motorcycle', amount: 5000, category: 'Groceries' },
    { id: 10, description: 'Buy a bicycle', amount: 500, category: 'Groceries' },
    { id: 11, description: 'Buy a motorcycle', amount: 5000, category: 'Furniture' },
    { id: 12, description: 'Buy a bicycle', amount: 500, category: 'Furniture' },
    { id: 13, description: 'Buy a motorcycle', amount: 5000, category: 'Furniture' },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <div className='container'>
      <h1 className='text-center text-primary my-3 fw-bold'>Expense Tracker</h1>
      <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </div>
  );
};

export default App;

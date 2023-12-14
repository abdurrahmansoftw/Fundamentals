import { categories } from '../App';

const ExpenseForm = () => {
  return (
    <div className='card p-3 m-3'>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input id='description' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input id='amount' type='number' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select id='category' className='form-select'>
          <option value=''>All Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='d-grid'>
        <button className='btn btn-outline-primary'>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseForm;

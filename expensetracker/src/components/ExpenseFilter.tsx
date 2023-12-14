import categories from '../categories';

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <div className='card m-3 p-3'>
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;

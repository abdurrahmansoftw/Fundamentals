interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <div className='card m-3 p-3'>
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>All Category</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;

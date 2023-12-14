import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import categories from '../categories';

const schema = z.object({
  description: z.string().min(3, { message: 'minimum 3 character' }).max(50, { message: 'maximum 50 character' }),
  amount: z
    .number({ invalid_type_error: 'amount is Required' })
    .min(0, { message: 'minimum amount $1' })
    .max(100_000, { message: 'maximum amount $100,000' }),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'category is Required' }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <div className='card p-3 m-3'>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input {...register('description')} id='description' type='text' className='form-control' />
          {errors.description && <div className='text-danger'>{errors.description.message}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input {...register('amount', { valueAsNumber: true })} id='amount' type='number' className='form-control' />
          {errors.amount && <div className='text-danger'>{errors.amount.message}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select {...register('category')} id='category' className='form-select'>
            <option value=''>All Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <div className='text-danger'>{errors.category.message}</div>}
        </div>
        <div className='d-grid'>
          <button className='btn btn-outline-primary'>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

import { AiTwotoneDelete } from 'react-icons/ai'

interface Expense {
	id: number
	description: string
	amount: number
	category: string
}

interface ExpenseListProps {
	expenses: Expense[]
	onDelete: (id: number) => void
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
	if (expenses.length === 0)
		return <div className='card m-3 p-3'>No expenses</div>
	return (
		<div className='card m-3 p-3'>
			<table className='table table-hover table-border'>
				<thead>
					<tr>
						<th>#</th>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense, index) => (
						<tr key={expense.id}>
							<td>{index + 1}</td>
							<td>{expense.description}</td>
							<td>${expense.amount}</td>
							<td>{expense.category}</td>
							<td>
								<button
									className='btn btn-sm btn-outline-danger'
									onClick={() => onDelete(expense.id)}
								>
									<AiTwotoneDelete size='30' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td>Total</td>
						<td>
							$
							{expenses
								.reduce((acc, expense) => expense.amount + acc, 0)
								.toFixed(2)}
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default ExpenseList

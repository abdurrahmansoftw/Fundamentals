import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	Name: z
		.string({ invalid_type_error: 'Name field is Required' })
		.min(3, { message: 'Name at least 3 character' })
		.max(10, { message: 'Name max 10 character' }),
	age: z
		.number({ invalid_type_error: 'Age field is Required' })
		.min(10, { message: 'age at least 10 ' })
		.max(60, { message: 'age highest 60 ' }),
})

type formData = z.infer<typeof schema>

const FormZod = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<formData>({ resolver: zodResolver(schema) })

	const onSubmit = (data: FieldValues) => console.log(data)

	return (
		<div className='card m-5 p-4' onSubmit={handleSubmit(onSubmit)}>
			<form>
				<div className='mb-3'>
					<label htmlFor='Name' className='form-label'>
						Name
					</label>
					<input
						{...register('Name')}
						id='Name'
						type='text'
						className='form-control'
						placeholder='Enter Name'
					/>
					{errors.Name && <p className='text-danger'>{errors.Name.message}</p>}
				</div>
				<div className='mb-3'>
					<label htmlFor='age' className='form-label'>
						age
					</label>
					<input
						{...register('age', { valueAsNumber: true })}
						id='age'
						type='number'
						className='form-control'
						placeholder='Enter Age'
					/>
					{errors.age && <p className='text-danger'>{errors.age.message}</p>}
				</div>
				<button
					disabled={!isValid}
					className='btn btn-outline-primary'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default FormZod

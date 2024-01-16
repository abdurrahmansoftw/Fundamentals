import { FieldValues, useForm } from 'react-hook-form'

interface formData {
	name: string
	age: number
}

const Form = () => {
	// use Ref
	//   const nameRef = useRef<HTMLInputElement>(null);
	//   const ageRef = useRef<HTMLInputElement>(null);

	//   const person = { name: 'John', age: 30 };

	//   const handleSubmit = (event: FormEvent) => {
	//     event.preventDefault();
	//     if (nameRef.current !== null) person.name = nameRef.current.value;
	//     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
	//     console.log(person);
	//   };

	// use State
	// const [person, setPerson] = useState({
	//   name: '',
	//   age: '',
	// });

	// React Hook Form
	// const handleSubmit = (event: FormEvent) => {
	//   event.preventDefault();
	//   console.log(person);
	// };

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<formData>()
	const onSubmit = (data: FieldValues) => console.log(data)

	return (
		<div className='card m-5 p-4' onSubmit={handleSubmit(onSubmit)}>
			<form>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						{...register('name', {
							required: true,
							minLength: 3,
							maxLength: 10,
						})}
						id='name'
						type='text'
						className='form-control'
						placeholder='Enter Name'
					/>
					{errors.name?.type === 'required' && (
						<p className='text-danger'>The Name Field is Required</p>
					)}
					{errors.name?.type === 'minLength' && (
						<p className='text-danger'>The Name Field is Too Short</p>
					)}
					{errors.name?.type === 'maxLength' && (
						<p className='text-danger'>The Name Field is Too Long</p>
					)}
				</div>
				<div className='mb-3'>
					<label htmlFor='age' className='form-label'>
						age
					</label>
					<input
						{...register('age', { required: true, min: 10, max: 30 })}
						id='age'
						type='number'
						className='form-control'
						placeholder='Enter Age'
					/>

					{errors.age?.type === 'required' && (
						<p className='text-danger'>The Age Field is Required</p>
					)}
					{errors.age?.type === 'min' && (
						<p className='text-danger'>The Age Field is Too Young</p>
					)}
					{errors.age?.type === 'max' && (
						<p className='text-danger'>The Age Field is Too Old</p>
					)}
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

export default Form

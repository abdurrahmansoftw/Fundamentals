import { FormEvent, useState } from 'react';

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  //   const person = { name: 'John', age: 30 };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) person.name = nameRef.current.value;
  //     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };

  const [person, setPerson] = useState({
    name: 'John',
    age: 30,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <div className='card m-5 p-4' onSubmit={handleSubmit}>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            onChange={(event) => setPerson({ ...person, name: event.target.value })}
            id='name'
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='number' className='form-label'>
            Age
          </label>
          <input
            onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })}
            id='number'
            type='number'
            className='form-control'
          />
        </div>
        <button className='btn btn-outline-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errer, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios.delete('https://jsonplaceholder.typicode.com/user/' + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: Math.random(), name: 'akaid' };
    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  
  return (
    <div className='container'>
      <h1>UserList</h1>
      {errer && <p className='text-danger'>{errer}</p>}
      {isLoading && <p className='text-primary'>Loading...</p>}

      <button type='button' className='btn btn-sm btn-primary' onClick={addUser}>
        Create User
      </button>

      <ol className='list-group'>
        {users.map((user) => (
          <li key={user.id} className='list-group-item d-flex justify-content-between'>
            {user.name}

            <div>
              <button className='btn btn-sm btn-outline-secondary mx-1' onClick={() => updateUser(user)}>
                Update
              </button>
              <button className='btn btn-sm btn-outline-danger' onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;

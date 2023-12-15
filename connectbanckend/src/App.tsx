import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errer, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/user')
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      {errer && <p className='text-danger'>{errer}</p>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

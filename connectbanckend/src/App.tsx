import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>UserList</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

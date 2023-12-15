import { useEffect, useState } from 'react';
import { CanceledError } from '../services/api-client';
import userService, { User } from '../services/user-service';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errer, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    const { request, cancle } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancle();
  }, []);

  return { users, isLoading, errer, setError, setUsers };
};

export default useUsers;

import { useQuery } from '@tanstack/react-query';
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () =>
  useQuery<Post[], Error>({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json();
    },
    staleTime: 10 * 1000,
  });
export default usePosts;

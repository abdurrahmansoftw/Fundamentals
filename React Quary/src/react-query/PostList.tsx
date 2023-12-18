import { useState } from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { isPending: loading, error, data } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ul className='list-group'>
        {data.map((post) => (
          <li key={post.id} className='list-group-item'>
            {post.title}
          </li>
        ))}
      </ul>
      <div>
        <button className='btn btn-sm btn-outline-primary my-3' disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previus
        </button>
        <button className='btn btn-sm btn-outline-primary my-3 ms-1' onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;

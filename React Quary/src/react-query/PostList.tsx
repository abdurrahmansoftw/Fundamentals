import usePosts from '../hooks/usePosts';

const PostList = () => {
  const { isPending: loading, error, data } = usePosts();

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <ul className='list-group'>
      {data?.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;

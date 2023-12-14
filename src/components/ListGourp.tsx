import { Fragment } from 'react';

function ListGourp() {
  let items = ['An active item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

  items = [];

  if (items.length === 0) return <h1>List is empty</h1>;

  return (
    <Fragment>
      <h1>List</h1>
      <ul className='list-group'>
        {items.map((item, index) => (
          <li className='list-group-item' key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGourp;

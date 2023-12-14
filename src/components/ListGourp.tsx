import { Fragment } from 'react';

function ListGourp() {
  const items = ['An active item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

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

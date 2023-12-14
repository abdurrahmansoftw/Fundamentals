import { Fragment } from 'react';

function ListGourp() {
  let items = ['An active item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

  items = [];

  // const message = items.length === 0 ? 'Please create a new item' : 'There are ' + items.length + ' items';
  // const getMessage = () => {
  //   return items.length === 0 ? 'Please create a new item' : 'There are ' + items.length + ' items';
  // };

  return (
    <Fragment>
      <h1>items List</h1>
      {items.length === 0 && <p>Please create a new item</p>}
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

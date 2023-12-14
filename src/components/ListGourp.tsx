import { Fragment, useState } from 'react';

interface ListGourpProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGourp({ items, heading, onSelectItem }: ListGourpProps) {
  const [seletedIndex, setSeletedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Please create a new item</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={seletedIndex === index ? 'list-group-item active' : 'list-group-item '}
            key={item}
            onClick={() => {
              setSeletedIndex(index);
              onSelectItem(item);
            }}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGourp;

import styled from 'styled-components';
import styles from './ListGroup.module.css';

const List = styled.ul`
  .listGrpup {
    list-style: none;
    padding: 0;
  }
`;

const ListItem = styled.li`
  padding: 1rem;
`;

const ListGourp = () => {
  return (
    <>
      <h1>list group</h1>
      <List className={[styles.listGrpup, styles.container].join(' ')}>
        <ListItem>dhaka</ListItem>
        <ListItem>dhaka</ListItem>
        <ListItem>dhaka</ListItem>
        <ListItem>dhaka</ListItem>
      </List>
    </>
  );
};

export default ListGourp;

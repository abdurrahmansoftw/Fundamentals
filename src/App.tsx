import ListGourp from './components/ListGourp';

function App() {
  const items = ['An active item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGourp items={items} heading={'Group items'} onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;

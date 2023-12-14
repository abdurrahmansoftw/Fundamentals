import Button from './components/Button';

function App() {
  return (
    <div>
      <Button color='secondary' onClick={() => console.log('Clicked!')}>
        My Button
      </Button>
    </div>
  );
}

export default App;

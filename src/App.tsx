import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  const [person, setPerson] = useState({ firstname: '', lastname: '' });

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  return (
    <div>
      <button> Show </button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);

    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}> Show </button>
    </div>
  );
}

export default App;

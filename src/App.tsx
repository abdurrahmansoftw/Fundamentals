import { useState } from 'react';
import './App.css';

function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: 'Player 1',
  //     score: 0,
  //   },
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game, player: { ...game.player, name: 'akaid' } } });
  // };

  const [pizza, setPizza] = useState({
    name: 'Pepperoni',
    toppings: ['Pepperoni'],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Bacon'] });
  };

  return (
    <div>
      <button> Show </button>
    </div>
  );
}

export default App;

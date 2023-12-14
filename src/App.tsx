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

  // const [pizza, setPizza] = useState({
  //   name: 'Pepperoni',
  //   toppings: ['Pepperoni'],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, 'Bacon'] });
  // };

  // const [cart, setCart] = useState({
  //   discount: 0.2,
  //   items: [
  //     { id: 1, name: 'Pizza', price: 10, quantity: 1 },
  //     { id: 2, name: 'Burger', price: 5, quantity: 2 },
  //   ],
  // });

  // const handleCart = () => {
  //   setCart({ ...cart, items: cart.items.map((item) => ({ ...item, price: item.price * (1 - cart.discount) })) });
  // };

  // const [bugs, setBugs] = useState([
  //   { id: 1, name: 'Ant', fixed: true },
  //   { id: 2, name: 'Grasshopper', fixed: false },
  //   { id: 3, name: 'Ladybug', fixed: false },
  // ]);

  // const handleClick = () => {
  //   // set bugs arnary  operator to check if id = 2 then fixed = true else fixed = false and return bugs array with updated values using map
  //   setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  // };

  const [tags, setTags] = useState(['happy', 'confused']);

  const handleClick = () => {
    // add exiting tag to tags array
    setTags(...tags, 'exiting');

    // remove exiting tag from tags array
    setTags(tags.filter((tag) => tag !== 'happy'));

    // update exiting tag in tags array
    setTags(tags.map((tag) => (tag === 'happy' ? 'sad' : tag)));
  };

  return (
    <div>
      <button> Show </button>
    </div>
  );
}

export default App;

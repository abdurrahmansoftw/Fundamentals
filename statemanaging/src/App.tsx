import './App.css'
import ExpandableText from './components/ExpandableText'

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
	//   // setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
	//   setBugs(
	//     produce((draft) => {
	//       const bug = draft.find((bug) => bug.id === 1);
	//       if (bug) {
	//         bug.fixed = true;
	//       }
	//     })
	//   );
	// };

	// const [tags, setTags] = useState(['happy', 'confused']);

	// const handleClick = () => {
	//   // add exiting tag to tags array
	//   setTags(...tags, 'exiting');

	//   // remove exiting tag from tags array
	//   setTags(tags.filter((tag) => tag !== 'happy'));

	//   // update exiting tag in tags array
	//   setTags(tags.map((tag) => (tag === 'happy' ? 'sad' : tag)));
	// };

	// const [customers, setCustomers] = useState({
	//   name: 'John Doe',
	//   age: 25,
	//   address: {
	//     street: 'Main Street',
	//     city: 'New York',
	//     zipCode: '10001',
	//   },
	// });

	// const handleClick = () => {
	//   // update exiting tag in tags array
	//   setCustomers({
	//     ...customers,
	//     address: { ...customers.address, zipCode: '10002' },
	//   });
	// };

	// const [cartItems, setCartItems] = useState(['product 1', 'product 2', 'product 3']);

	return (
		<ExpandableText maxChars={10}>
			{/* <Navbar cartItemsCount={cartItems.length}></Navbar>
      <Cart cartItems={cartItems} onClearCart={() => setCartItems([])}></Cart> */}
			Lorem, ipsum. Lorem ipsum dolor sit amet.
		</ExpandableText>
	)
}

export default App

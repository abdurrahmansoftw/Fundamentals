interface cartProps {
  cartItems: string[];
  onClearCart?: () => void;
}

const Cart = ({ cartItems, onClearCart }: cartProps) => {
  return (
    <div>
      <h2>Cart</h2>
      <ol>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <button onClick={onClearCart}>clear</button>
    </div>
  );
};

export default Cart;

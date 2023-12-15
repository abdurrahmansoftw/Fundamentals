import { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products...', category);
    setProducts(['Clothing', 'Household']);
  }, [category]);
  return (
    <div>
      <h1>? {category}</h1>
    </div>
  );
};

export default ProductList;

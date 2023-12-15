import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // get -> promise -> then, catch

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        // setLoading(false);
        setError((error as AxiosError).message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          {error && <div className='text-red-500'>{error}</div>}
          {loading && <div className='text-green-500'>Loading...</div>}
          {products.map((product) => (
            <div className='lg:w-1/4 md:w-1/2 p-4' key={product.id}>
              <img
                className='w-full h-56 object-cover'
                src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                alt='Product Image'
              />
              <div className='p-4'>
                <p className='text-gray-600 text-sm mt-2'>{product.category}</p>
                <h2 className='text-gray-800 text-xl font-semibold'>{product.title}</h2>
                <div className='mt-3 flex  text-3xl  items-center justify-between'>
                  <span className=' font-semibold'>${product.price}</span>
                  <div className='flex items-center'>
                    <span className=' text-sm mr-1'>Rating:</span>
                    <div className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 text-yellow-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path
                          fillRule='evenodd'
                          d='M2 0l1.39 4.24L0 8l4.17 1.5L2 16l3.83-2.83L10 18l4.17-6.33L20 8l-3.39-3.76L14 0l-4 6-4-6z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className=' text-sm ml-1'>
                        {product.rating.rate} / {product.rating.count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

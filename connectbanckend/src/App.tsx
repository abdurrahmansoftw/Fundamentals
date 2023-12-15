import { useEffect, useRef } from 'react';

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  // componentDidMount + componentDidUpdate + componentWillUnmount = useEffect
  useEffect(() => {
    // side effect
    if (ref.current) ref.current.focus();
  });

  return (
    <div className='container p-3'>
      <input ref={ref} type='text' name='' id='' className='form-control' />
    </div>
  );
};

export default App;

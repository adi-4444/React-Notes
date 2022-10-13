import React from 'react'
import './App.css';
import useFetch from './useFetch';

function App() {
  const {data: products, isPending, error} = useFetch("url")
  return (
    <div className="App">
      {error && <div></div>}
      {isPending && <div></div>}
      {products && <Products products={products} title="All Products" />}
    </div>
  );
}

export default App;

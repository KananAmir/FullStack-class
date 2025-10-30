import { useState } from 'react';
import './App.css'
import ProductCard from './components/Card'
import Categories from './components/Categories';
import Form from './components/Form';

function App() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([])

  return (
    <>
      <h1>React Component Lifecycle</h1>
      <p>Explore the different phases of a React component's lifecycle including Mounting, Updating, and Unmounting.</p>


      <hr /> 

    <button className='my-4' onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <div className="card-container">
          <ProductCard
            title="Wireless Headphones"
            description="Experience high-quality sound without the wires. These headphones offer noise cancellation and long battery life."
            price="99.99"
          />
        </div>
      )}

      <hr />

      <Form setCategories={setCategories} categories={categories} />
      <hr />

      <Categories setCategories={setCategories} categories={categories} />
    </>
  )
}

export default App

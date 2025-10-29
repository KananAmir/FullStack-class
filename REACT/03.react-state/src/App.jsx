import { useState } from 'react'
import './App.css'
import ProductCard from './components/Card'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'
import Blogs from './components/Blogs'

function App() {
  const [user, setUser] = useState("Samir")
  const [show, setShow] = useState(false)

  let newUser = "Mahir"
  console.log("component rendered");

  return (
    <>
      <p>Hello, {user}</p>
      <button onClick={() => {
        setUser(newUser)
      }}>Change Name</button>


      <hr />


      <div className='flex gap-2'>
        <button className='border-2 p-2 cursor-pointer' onClick={() => {
          setShow(true)
        }}>show</button>
        <button className='border-2 p-2 cursor-pointer' onClick={() => {
          setShow(false)
        }}>hide</button>
        {/* <button className='border-2 p-2 cursor-pointer' onClick={()=>{
          if (show === true) {
            setShow(false)
          } else {
            setShow(true)
          }
        }}>toggle</button> */}
        <button className='border-2 p-2 cursor-pointer' onClick={()=>{
          setShow(!show)
        }}>toggle</button>
      </div>

      {/* conditional rendering */}
      {/* {show ? <ProductCard
        title="Smart Watch"
        description="Track your fitness, receive notifications, and stay connected in style."
        price="99.99"
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
      /> : "No Card to Show"} */}


      {show && <ProductCard
        title="Smart Watch"
        description="Track your fitness, receive notifications, and stay connected in style."
        price="99.99"
        image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
      /> }


      <hr />

      <Counter />
      <hr />
      <Counter2 />

      <hr />

      <Blogs />
    </>

  )
}

export default App

// hooks: useState, useEffect, useReducer, useContext, useRef, useMemo, useCallback
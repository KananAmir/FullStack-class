import React from 'react'

const Increment = ({ increment }) => {
  return (
      <button className="border py-1 px-3 rounded-xl cursor-pointer" onClick={increment}>Increment</button>
  )
}

export default Increment
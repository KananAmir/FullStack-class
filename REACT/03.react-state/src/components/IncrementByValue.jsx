import React from 'react'

const IncrementByValue = ({ incrementByValue, setInputValue}) => {
  return (
    <div className="flex items-center gap-2">
                <input type="number" className="border py-1 px-2 rounded-md" onChange={(e) => {
                    setInputValue(e.target.value)
                }} />
                <button className="border py-1 px-3 rounded-xl cursor-pointer" onClick={incrementByValue}>Increment by value</button>
            </div>
  )
}

export default IncrementByValue
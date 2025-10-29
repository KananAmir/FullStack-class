import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  const increment = () =>{
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () =>{
    setCount((prevCount) => prevCount - 1)
  }

  const incrementByValue = () => {
    setCount(prevCount => prevCount + Number(inputValue))
  }

  return (
    <div className="flex items-center gap-4 justify-center my-4">
      <button className="border py-1 px-3 rounded-xl cursor-pointer" onClick={increment}>Increment</button>
      <span>{count}</span>
      <button className="border py-1 px-3 rounded-xl cursor-pointer" onClick={decrement}>Decrement</button>

      <div className="flex items-center gap-2">
        <input type="number" className="border py-1 px-2 rounded-md" 
        value={inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}/> 
        <button className="border py-1 px-3 rounded-xl cursor-pointer" onClick={incrementByValue}>Increment by value</button>
      </div>
    </div>
  )
}

export default Counter
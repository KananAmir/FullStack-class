import { useState } from "react"
import Increment from "./Increment"
import Decrement from "./Decrement"
import Count from "./Count"
import IncrementByValue from "./IncrementByValue"

const Counter2 = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const incrementByValue = () => {
        setCount(prevCount => prevCount + Number(inputValue))
    }

    return (
        <div className="flex items-center gap-4 justify-center my-4">
            <Increment increment={increment} />
            <Count count={count}/>
            <Decrement decrement={decrement} />
            <IncrementByValue incrementByValue={incrementByValue} setInputValue={setInputValue} />
        </div>
    )
}

export default Counter2
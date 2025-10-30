import { useEffect, useState } from "react";

const ProductCard = ({ title, description }) => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    // Mounting Phase
    useEffect(() => {
        console.log("Card Component Mounted");

        // Unmounting Phase (cleanup function)
        return () => {
            console.log("Card Component Unmounted");
        }
    }, [])


    // Updating Phase
    useEffect(() => {
        console.log("Card Component Updated");
    }, [inputValue]);


    return (
        <div style={{ border: '2px solid' }} className="max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="p-5 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
                </div>
                <p>Value: {inputValue}</p>
                <div className="mt-4 flex items-center justify-between mx-auto">
                    <button className="bg-indigo-600 text-dark px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200 border-red-600"
                        onClick={() => setCount((prevCount) => prevCount + 1)} >
                        {count}
                    </button>

                    <hr />

                    <input type="text" placeholder="type here..." 
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

// mounting, updating, and unmounting phases.
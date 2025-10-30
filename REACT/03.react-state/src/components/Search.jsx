
const Search = ({ setSearchQuery, searchQuery }) => {
    return (
        <input type="text" placeholder="Search blogs..." className="w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}
            value={searchQuery}
        />
    )
} 

export default Search
import { books } from "../data"
const Books = () => {

    console.log(books);

    return (
        <div>
            <h2>Book List</h2>
            {/* <ul>
            {books.map((book)=>{
                return (
                    <li key={book.id}>{book.title}</li>
                )
            })} 
        </ul> */}


            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
                {books.map((book) => {
                    return (
                        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.year}</p>
                            <p>Price: ${book.price}</p>
                            <img src={book.coverImageURL} alt={book.title} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default Books
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container mx-auto">
            <ul className='flex gap-4 py-4'>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/add-product">Add Product</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header
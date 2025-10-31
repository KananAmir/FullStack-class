import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <nav>
            {/* <ul className="flex space-x-4">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/products'}>Products</Link>
                </li>   
            </ul> */}
            <ul className="flex space-x-4">
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "!text-red-500" : "")} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "!text-red-500" : "")} to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "!text-red-500" : "")} to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "!text-red-500" : "")} to={'/products'}>Products</NavLink>
                </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/themeContext'
import { FavoriteContext } from '../../context/FavoriteContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { favorites } = useContext(FavoriteContext);

    return (
        <header>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? '!text-red-500' : ''} to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? '!text-red-500' : ''} to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? '!text-red-500' : ''} to={'/products'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? '!text-red-500' : ''} to={'/favorites'}>Favorites <sup className='text-red-600 text-lg'>{favorites.length}</sup></NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    )
}

export default Header
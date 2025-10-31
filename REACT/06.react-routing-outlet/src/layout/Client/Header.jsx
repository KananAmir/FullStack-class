import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='header-nav'>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/products'}>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
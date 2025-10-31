import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className='header-nav'>
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/admin'}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/admin/products'}>Products</NavLink>
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? '!text-red-500' : ''} to={'/admin/products/new'}>Add Product</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
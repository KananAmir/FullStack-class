import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext';
import Input from '../../components/Input/Input';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} p-4`}>
      <h2>Welcome to Our Website</h2>
      <p>Explore our products and services tailored just for you.</p>
      <Input/>
    </div>
  )
}

export default Home
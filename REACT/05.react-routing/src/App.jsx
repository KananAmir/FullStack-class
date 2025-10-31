
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import NotFound from './pages/NotFound'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/products'} element={<Products />} />
        <Route path={'/products/:id'} element={<ProductView />} />
        {/* not found page */}


        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

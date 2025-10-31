import './App.css'
import ClientLayout from './layout/Client/ClientLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Products from './pages/Client/Products'
import AdminProducts from './pages/Admin/Products'
import Dashboard from './pages/Admin/Dashboard'
import AdminLayout from './layout/Admin/AdminLayout'
import AddProduct from './pages/Admin/AddProduct'
import UpdateProduct from './pages/Admin/UpdateProduct'
function App() {

  return (
    <>

      {/* Client Layout */}
      <Routes>
        <Route path={'/'} element={<ClientLayout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'products'} element={<Products />} />  
        </Route>
      </Routes>

      {/* Admin Layout */}
      <Routes>
        <Route path={'/admin'} element={<AdminLayout />}>
          {/* Nested Routes */}
          <Route index element={<Dashboard />} />
          {/* <Route path={'products'} element={< AdminProducts/>} />
          <Route path={'products/new'} element={< AddProduct/>} /> */}
          <Route path={'products'} >
            <Route index element={< AdminProducts />} />
            <Route path={'new'} element={< AddProduct />} />
            <Route path={'update/:id'} element={< UpdateProduct />} />
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  )
}

export default App

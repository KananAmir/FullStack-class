import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import AddProduct from "./pages/AddProduct"
import Products from "./pages/Products"


function App() {

 

  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Products/>}/>
    <Route path='/add-product' element={<AddProduct/>}/>
  </Routes>
  </>
  )
}

export default App

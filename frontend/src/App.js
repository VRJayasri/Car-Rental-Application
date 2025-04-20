import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Personalinfo from './pages/Personalinfo'
import Product from './pages/Product'
import Register from './pages/Register'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Myorder from './pages/Myorder'
import About from './pages/About'
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>  
      <Route path='/Personalinfo' element={<Personalinfo/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Myorder' element={<Myorder/>}/>
      <Route path ='/About' element={<About/>}/>
      </Routes></BrowserRouter>
  )
}

export default App
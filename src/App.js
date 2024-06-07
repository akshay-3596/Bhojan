import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/place-order/place-order'
import Footer from './components/footer/footer'
import LoginPopup from './components/login-popup/login-popup'
const App = () => {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
      {
        showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
      }
      <div className='app'>
          <Navbar setShowLogin={setShowLogin } />
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<PlaceOrder/>}></Route>
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App


import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import Navbar from './Component/Navbar'
import Singlecard from './Component/Singlecard'
import Productform from './Component/Productform'
import Cart from './page/cart'


function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/cart'  element={<Cart/>}/>
        <Route path="/productform" element={<Productform />} />
       <Route path='/product/:id' element={<Singlecard/>}/>
      </Routes>
    </>
  )
}

export default App
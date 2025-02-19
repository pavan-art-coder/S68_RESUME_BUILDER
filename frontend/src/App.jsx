import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import Productform from './Component/productform'
import { Productcard } from './Component/Productcard'
import NavBar from './Component/NavBar'
import { Productcardforseller } from './Component/Productcardforseller'
import Singleproductpage from './Component/singleproductpage'
import Singlecard from './Component/Singlecard'


function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productform" element={<Productform />} />
        <Route path="/productcard" element={<Productcard/>}/>
        <Route path="/productcardforseller" element={<Productcardforseller/>}/>
        <Route path="/Singlecard.jsx" element={<Singlecard/>}/>
        <Route path="/Singleproductpage" element={<Singleproductpage/>}/>
      </Routes>
    </>
  )
}

export default App

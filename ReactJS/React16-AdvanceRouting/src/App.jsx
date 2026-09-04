import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>}> 
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
          <Route path='kids' element={<Kids/>} />
        </Route>

        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

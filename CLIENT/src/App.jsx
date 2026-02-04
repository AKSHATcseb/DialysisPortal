import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from './components/loginComponent/login'
import Register from './components/registerComponent/Register'
import Navbar from './components/navbarComponent/Navbar'
import Footer from './components/footerComponent/Footer'
import LogNavbar from './components/navbarComponent/LogNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar></Navbar> */}
    {/* <LogNavbar></LogNavbar> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    {/* <Footer></Footer> */}
    </>
  )
}

export default App

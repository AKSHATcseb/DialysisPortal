import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Login from './components/loginComponent/login'
import Register from './components/registerComponent/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App

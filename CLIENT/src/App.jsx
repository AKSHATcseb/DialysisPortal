import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/loginComponent/login'
import Register from './components/registerComponent/Register'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

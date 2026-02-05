import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/loginComponent/login'
import Register from './components/registerComponent/Register'
import HomePage from './pages/HomePage'
import PatientDashboard from './pages/PatientPages/patientDashboardPage/PatientDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<HomePage />} />

        <Route path='/patient/dashboard' element={<PatientDashboard />} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import StudentDetail from './pages/StudentDetail'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

export default function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/students'
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />

        <Route
          path='/students/:id'
          element={
            <ProtectedRoute>
              <StudentDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

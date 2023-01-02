import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/burgers' element={<Home />} />
      <Route path='/pizzas' element={<Home />} />
      <Route path='/drinks' element={<Home />} />
      <Route path='/ice-creams' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes

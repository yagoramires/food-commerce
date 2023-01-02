import { Routes, Route } from 'react-router-dom'
import Burgers from './components/Burgers'
import Drinks from './components/Drinks'
import IceCreams from './components/IceCreams'
import Pizzas from './components/Pizzas'
import Main from './pages/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Burgers />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/drinks' element={<Drinks />} />
        <Route path='/ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

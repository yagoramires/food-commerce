import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='flex App'>
      <BrowserRouter>
        <Sidebar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App

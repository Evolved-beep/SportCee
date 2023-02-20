
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar'
import VerticalBar from './component/VerticalBar'
import Dashboard from './pages/Dashboard'
import Homepage from './pages/Home';
import index, { ApiProvider, ThemeContext } from './Api/context/index'
import './App.css'

function App() {
  return (
    <ApiProvider>
      <div>
        <Navbar />
        <div className='container'>
        <VerticalBar />
      <div className='component_container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/user/:id' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
        </div>
      </div>
    </ApiProvider>
  )
}

export default App;

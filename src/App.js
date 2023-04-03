
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
      <BrowserRouter>
      <div>
        <Navbar />
        <div className='container'>
        <VerticalBar />
      <div className='component_container'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/user/:id' element={<Dashboard />} />
          </Routes>
      </div>
        </div>
      </div>
        </BrowserRouter>
    </ApiProvider>
  )
}

export default App;

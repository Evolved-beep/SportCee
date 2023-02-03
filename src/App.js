
import './App.css';
import Navbar from './component/Navbar'
import VerticalBar from './component/VerticalBar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <VerticalBar />
    </div>
  )
}

export default App;

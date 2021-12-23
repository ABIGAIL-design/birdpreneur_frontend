import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'


function App() {
// const var let 
  // jsx
  return (
      <div className="App">
        <div>
          <Link to="/"><button className='btn btn-secondary mx-2'>Home</button></Link>
          <Link to="/login"><button className='btn btn-secondary mx-2'>Login</button></Link>
          <Link to="/register"><button className='btn btn-secondary mx-2'>Register</button></Link>
          <Link to="/dashboard"><button className='btn btn-secondary mx-2'>Dashboard</button></Link>
        </div>
        <Routes>
          {/* My Routes comes here */}
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
  );
}

export default App;

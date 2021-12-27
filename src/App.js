import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'

import Header from './components/Header'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
// const var let 
  // jsx
  return (
      <div className="App">
        <Header />
        <Routes>
          {/* My Routes comes here */}
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>

        <Footer />
      </div>
      
  );
}

export default App;

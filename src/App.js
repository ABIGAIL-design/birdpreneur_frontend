import {useContext} from 'react'
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
import {mainFunctions} from "./providers/MainProviders"
import Farms from './pages/Farms';



// import AddOne from './components/AddOne';

function App() {
    const {
      isAuthenticated
    }  = useContext(mainFunctions)
// const var let 
  // jsx
  return (
      <div className="App">
        <Header />
        {/* <AddOne /> */}
        <Routes>
          {/* My Routes comes here */}
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={ isAuthenticated ? <Dashboard/> : <Login/>}/>
          <Route exact path="/register" element={ isAuthenticated ? <Dashboard/> : <Register/>}/>
          <Route exact path="/dashboard" element={ isAuthenticated ? <Dashboard/> : <Login/>}/>
          <Route exact path="/farms" element={ <Farms/> } />
       
        </Routes>

        <Footer />
      </div>
      
  );
}

export default App;

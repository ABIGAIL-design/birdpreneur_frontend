import {useContext} from 'react'
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import HowItWorks from './pages/HowItWorks'
import AboutUs from  './pages/AboutUs'
import Header from './components/Header'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {mainFunctions} from "./providers/MainProviders"
import Farms from './pages/Farms';
import Withdraw from './pages/Withdraw';
import Countries from './components/Countries';
import ProfilePage from './pages/ProfilePage';
import ForgotPassword from './pages/ForgotPassword';



// import AddOne from './components/AddOne';

function App() {
    const {
      isAuthenticated
    }  = useContext(mainFunctions)
// const var let 
  // jsx
  return (
      <div className="App">
      <Countries />
        <Header />
        {/* <AddOne /> */}

        <div className='route'>
          <Routes>
            {/* My Routes comes here */}
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/aboutus" element={<AboutUs />}/>
            <Route exact path="/howitworks" element={<HowItWorks />}/>
            <Route exact path="/login" element={ isAuthenticated ? <Dashboard/> : <Login/>}/>
            <Route exact path="/forgot" element={ isAuthenticated ? <Dashboard/> : <ForgotPassword/>}/>
            <Route exact path="/register" element={ isAuthenticated ? <Dashboard/> : <Register/>}/>
            <Route exact path="/dashboard" element={ isAuthenticated ? <Dashboard/> : <Login/>}/>
            <Route exact path="/withdraw" element={ isAuthenticated ? <Withdraw/> : <Login/>}/>
            <Route exact path="/account" element={ isAuthenticated ? <ProfilePage/> : <Login/>}/>
            
            <Route exact path="/farms" element={ <Farms/> } />
        
          </Routes>
        </div>
        <Footer />
      </div>
      
  );
}

export default App;

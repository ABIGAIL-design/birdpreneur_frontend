import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {mainFunctions} from "../providers/MainProviders"
import {getAuth, signOut} from "firebase/auth"
export default function Header() {
  const {
    isAuthenticated,
    setAuthTrigger,
    authTrigger,
    farmFilter, 
    setFarmFilter,
    setFarmCategory
  }  = useContext(mainFunctions)

  const [showMore, setShowMore] = useState("")
  const [showNav, setShowNav] = useState(false)
    return (
        
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container
  className="top_nav black-text"
  >
  <Navbar.Brand>
      <Link to="/">
      <img
        src="/birdpreneur_logo.png"
        width="150"
        className="d-inline-block align-top"
        alt=""
      />
      </Link>
  </Navbar.Brand>

  
  <div className={`top_navigation ${showNav ? "show": "hide"}`}>


  

    {isAuthenticated &&
    <>
        <div className="nav">
          <Link to="/dashboard">
          Dashboard
          </Link>  
        </div>
        <div className="nav">
          <Link to="/account">
            My Profile
          </Link>  
        </div>
      </>
      }
    {!isAuthenticated &&
      <div className="nav">
        <Link to="/aboutus">
        About Us
        </Link>  
      </div> 
    }
    <div className="nav">
      <div className="title" onClick={()=>{ 
        if(showMore !== 'farms')  
          setShowMore('farms')
        else
          setShowMore('')
      }}>Our Farms</div>
      {showMore === 'farms' &&
        <div className="more_nav">
          <div className="nav" 
            onClick={()=>{
              setFarmFilter('poultry')
              // setFarmCategory("poultry")
            }}>
            <Link to="/farms?category=poultry">
            Poultry
            </Link>
            </div>
          <div className="nav"
          onClick={()=>{
            setFarmFilter('maize')
            // setFarmCategory("poultry")
          }}>
            <Link to="/farms?category=maize">
            Maize
            </Link>
          </div>
          <div className="nav"
          onClick={()=>{
            setFarmFilter('goat')
          }}
          >
            <Link to="/farms?category=goat">
            Goat
            </Link>
          </div>
          <div className="nav"
          onClick={()=>{
            setFarmFilter('soyabeans')
          }}
          >
            <Link to="/farms?category=soyabeans">
            Soyabeans
            </Link>
          </div>
        </div>
      }
    </div>
    
    <div className="nav">
      <Link to="/howitworks">
        How It Works
      </Link>  
    </div>

    <div className="nav">
      <Link to="/rentalservices">
        Rental Services
      </Link>  
    </div>
    
    {!isAuthenticated &&
    <>
    <div className="nav">
      <Link to="/register">
       Register
      </Link>
    </div>
    <div className="nav">
      <Link to="/login">
        Login
      </Link>
    </div>
    </>
  }
    {isAuthenticated &&
    <div
      onClick={()=>{
        const auth = getAuth();
        signOut(auth)
        setAuthTrigger(Number(authTrigger) + 1)
      }}
    >Logout</div>
    }

  </div>


  </Container>
  <div className='nav_anchor' 
  onClick={()=>{
    setShowNav(!showNav)
  }}>
    <i className="fas fa-bars"></i>
  </div>
</Navbar>
       
    )
}




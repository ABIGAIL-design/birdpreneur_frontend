import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {mainFunctions} from "../providers/MainProviders"
import {getAuth, signOut} from "firebase/auth"
export default function Header() {
  const {
    isAuthenticated,
    setAuthTrigger,
    authTrigger
  }  = useContext(mainFunctions)
    return (
        
            
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container
  className="black-text"
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
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
      {!isAuthenticated &&
      <>
      <Nav.Link>
        <Link to="/login">
        Login
        </Link>  
      </Nav.Link>
      <Nav.Link href="/register">
        <Link to="/register">
        Register
        </Link>  
      </Nav.Link>
      
      </>
      }
      <Nav.Link href="/howitworks">
        <Link to="/howitworks">
        How It Works
        </Link>  
      </Nav.Link>
      <Nav.Link href="/aboutus">
        <Link to="/aboutus">
        AboutUs
        </Link>  
      </Nav.Link>
      
      <NavDropdown title="Our Farms" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/farms?category=poultry">Poultry</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/farms?category=goat">
            Goat
            </Link>  
          </NavDropdown.Item>
          <NavDropdown.Item href="/maize">
            <Link to="/farms?category=maize">
            Maize
            </Link>  
          </NavDropdown.Item>
          <NavDropdown.Item href="/soyabeans">
            <Link to="/farms?category=poultry">
            Soya Beans
            </Link>  
          </NavDropdown.Item>
        </NavDropdown>
      {isAuthenticated &&
        <>
          
          <Nav.Link href="/account">
            <Link to="/account">
            Account
            </Link>  
          </Nav.Link>
          <Nav.Link href="/dashboard">
            <Link to="/dashboard">
            Dashboard
            </Link>  
          </Nav.Link>
          <Nav.Link
          onClick={()=>{
            const auth = getAuth();
            signOut(auth)
            setAuthTrigger(Number(authTrigger) + 1)
          }}
          
          >Logout</Nav.Link>
        </>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
       
    )
}




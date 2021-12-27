import React from 'react'
import { Container,Navbar} from 'react-bootstrap'
import Hero from "../components/Hero"
import HomepageDetails from '../components/HomepageDetails'
import HomepageMore from '../components/HomepageMore'
// import PageTitle from '../components/PageTitle'

export default function HomePage() {
    return (
        <div>
          <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Hero />
        <HomepageDetails />
        <HomepageMore />
        
        </div>
    )
}

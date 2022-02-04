import React from 'react'
import { Container,Navbar} from 'react-bootstrap'
import Hero from "../components/Hero"
import HomepageDetails from '../components/HomepageDetails'
import HomepageFunds from '../components/HomepageFunds'
import HomepageMore from '../components/HomepageMore'
import HomepageConnect from '../components/HomepageConnect'
import Investinfarm from '../components/Investinfarm'
import Impact from '../components/Impact'
import Testimony from '../components/Testimony'
import Help from '../components/Help'

// import PageTitle from '../components/PageTitle'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <HomepageDetails />
            <HomepageFunds/>
            <HomepageConnect />
            <HomepageMore />
            <Investinfarm/>
            <Impact/>
            <Testimony />
            <Help/>
        </div>
    )
}

import React from 'react'
import Investments from '../components/Investments'
import PageTitle from '../components/PageTitle'
export default function Dashboard() {
    return (
        <div>
            <PageTitle title="Dashboard" />
           
            <Investments />
        </div>
    )
}

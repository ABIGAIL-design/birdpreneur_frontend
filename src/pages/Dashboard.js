import React from 'react'
import Investments from '../components/Investments'
import PageTitle from '../components/PageTitle'
import TransactionTable from '../components/TransactionTable'
export default function Dashboard() {
    return (
        <div>
            <PageTitle title="Dashboard" />
           
            <Investments />
            <TransactionTable />
            
        </div>
    )
}

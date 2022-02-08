import React from 'react'
import { Link } from 'react-router-dom'

export default function Help() {
    return (
        <section section className=''>
            <div className="container" style={{marginBottom: "50px"}}>

                <div className="" style={{ fontSize:"15px", textAlign: "center"}}>
                  <p style={{marginTop: "60px", padding: "10px", fontSize:"15px"}}> We provide 3-6 months paid internships for the unemployed youths on founded farms</p>
                  <h1 style={{ padding: "10px", fontSize:"30px"}}>Impact the lives of others</h1>
                  <p  style={{ padding: "10px", fontSize:"15px"}}>Help farmers scale their farms into commercial sizes. Provide hope for youths to start a career.</p>
                
                
                  <Link to ="/howitworks">
                  <button type="button" className="btn btn-primary btn-lg">
                  Start Now </button></Link>
                
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import {Link} from "react-router-dom"
export default function HomepageFunds() {
    return (
        <section className='homepage-fund grey_section'>
            <div className='container'>
                <div className='card'>
                   <div className='photo'>
                   <img
                    src="/returnsN.png"
                    className="card-img-top"
                     alt=""
                     />
                   
                   </div>
                       
                       <h1>Your Funds, Working for you</h1>
                          <p>
                          Are you seeking out a secured platform to develop your capital? Seeking excellent returns whilst impacting other's live? Need extra cash for that constructing project, own circle of relatives holiday, children's school fees, etc.? We have made it smooth to make investments securely in agriculture and earn tremendous profits!
                              
                         </p>
                   
                         <Link to="/howitworks"><button className="b_btn btn btn-primary mt-4 mb-4">Learn More</button></Link>
                </div>

            </div>
            
        </section>
    )
}

import React from 'react'

export default function HomepageFunds() {
    return (
        <section className='homepage-fund'>
            <div className='container'>
                <div className='card col-8 ' style={{border:"none", marginLeft:"230px"}} >
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
                   
                         <button className="b_btn btn btn-primary">Learn More</button>
                </div>

            </div>
            
        </section>
    )
}

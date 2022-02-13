import React from 'react'
import CountUp from 'react-countup';
export default function impact() {
    return (
        <section className="impact" style={{ padding:"30px 0"}}>

            <h2>Our Impact</h2>
            
            <div className="container mb-4" style={{ 
            
            margin: "50px auto"}}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
        
            <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: "30px", color: "black"}}><b>INVESTORS</b></h5>
                <div className="row">
                    <div className="col-6">
                    <h1 className="card-text" >
                    $<CountUp
                      end={900000} 
                      duration={7}
                    />
                    </h1>
                    <h5>Invested Amount</h5>
                    </div>
                    <div className="col-6">
                      <h1 className="card-text" >
                      <CountUp
                        end={500}  
                      />
                      </h1>
                      <h5>Micro Lenders</h5>
                    </div>
                  </div>
            </div>
         
        
        </div>
        </div>
            <div className="col-sm-6">
              <div className="card" >
                <div  className="card-body">
                  <h5 className="card-title" style={{ marginBottom: "30px", color: "black"}}><b>FARMERS</b></h5>
                  <div className="row">
                    <div className="col-6">
                    <h1 className="card-text" >
                    <CountUp
                      end={10000}  
                    />
                    </h1>
                    <h5>Farmers Empowered</h5>
                    </div>
                    <div className="col-6">
                      <h1 className="card-text" >
                      <CountUp
                        end={25000}  
                      />
                      </h1>
                      <h5>Youths Empowered</h5>
                    </div>
                  </div>
                            
                
                 </div>
              </div>
            </div>
          </div>
        </div>
            
            
        </section>
    )
}

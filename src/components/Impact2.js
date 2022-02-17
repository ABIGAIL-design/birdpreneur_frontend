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
                <div className="row">
                    <div className="col-6">
                    <h1 className="card-text" >
                    <CountUp
                      end={35000} 
                      duration={7}
                    />+
                    </h1>
                    <h5>Farmers Impacted</h5>
                    </div>
                    <div className="col-6">
                      <h1 className="card-text" >
                      <CountUp
                        end={100}  
                      />+
                      </h1>
                      <h5>Local Governments</h5>
                    </div>
                  </div>
            </div>
         
        
        </div>
        </div>
            <div className="col-sm-6">
              <div className="card" >
                <div  className="card-body">
                  <div className="row">
                    <div className="col-6">
                    <h1 className="card-text" >
                    <CountUp
                      end={10}  
                    />
                    </h1>
                    <h5>Brand Partnership</h5>
                    </div>
                    <div className="col-6">
                      <h1 className="card-text" >
                      <CountUp
                        end={4}  
                      />
                      </h1>
                      <h5>Awards</h5>
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

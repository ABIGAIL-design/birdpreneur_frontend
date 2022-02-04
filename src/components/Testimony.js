import React from 'react'

export default function Testimony() {
    return (
        <section>
            
            
            
            <div className="container" style={{marginTop: "30PX"}}>

                  <h1 className="testimony"> <b>Testimonies</b></h1>
            <div className="design5">
          
            <div className="row">
              <div className="col-sm-12">
                
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>   
               
                  <div className="carousel-inner"  style={{marginTop: "150px"}}>
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-sm-11">
                          
                            
                            <div className="media-body">
                              <div className="testimonial">
                                <p id="p">You can raise a heifer from birth abd the wait until year three to decide whether you are going to keep are offspring. With chicken, you can run a flock every 8weeks with the right input thanks to Birdpreneuer.</p>
                                <p className="overview"><b>Umar Sale</b>, Investor</p>
                              </div>
                            </div>
                          
                        </div>
                      
                      </div>			
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-sm-11">
                          
                            <div className="media-body">
                              <div className="testimonial">
                                <p id="p">Unlike the standard expected lose rates of roughly 10 percent, my farm averages of an impressive loss rate of two-to-three percent, well below the industry average. The reason behind this rate is Birdpreneur. </p>
                                <p className="overview"><b>John Phillips</b>, Farmer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
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

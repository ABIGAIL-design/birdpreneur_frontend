import React from 'react'
import { Link } from 'react-router-dom'

export default function HomepageDetails() {
    return (
        <section className="homepage-section">
             <div className='container'>
                <h3>5000 Acres cultivated across 8 states, 1700 jobs created and 900k USD invested to empower 10,000 farmers.</h3>
           
                <div className="row">
                <div className="col-sm-3 homepage-box">
                <div className="card poultry">
                    <div className="hero_gradient p-2">
                        <div  className="card-img-overlay">
                        <Link to="/farms?category=poultry">
                            <button type="button" className="btn btn-danger" >
                            <b>Poultry Farm</b></button>
                         </Link>
                        <h4 className="card-title  pt-2 " >15-17% ROI</h4>
                        </div>
                    </div> 
                 </div>
             </div>
    
    
             < div className="col-sm-3 homepage-box">
              <div className="card goat">
                  <div className="hero_gradient p-2">
                      <div className="card-img-overlay">
                      <Link to="/farms?category=goat">
                      <button type="button" className="btn btn-danger" ><b>Goat Farm</b></button>
                      </Link>
                      <h4 className="card-title pt-2 " >16% ROI</h4>
               
                     </div> 
                 </div>
             </div>
            </div>
    
    
         < div className="col-sm-3 homepage-box">
              <div className="card maize ">
              <div className="hero_gradient p-4">
            
              <div className="card-img-overlay">
              <Link to="/farms?category=maize">
              <button type="button" className="btn btn-danger" ><b>Maize Farm</b></button>
              </Link>
              <h4 className="card-title  pt-2" >15-28% ROI</h4>
       
              </div> 
              </div>
              </div>
          </div>
    
          < div className="col-sm-3 homepage-box">
              <div className="card soya">
              <div className="hero_gradient p-4">
              <div className="card-img-overlay">
              <Link to="/farms?category=soyabeans">
              <button type="button" className="btn btn-danger" ><b>Soyabeans Farm</b></button>
              </Link>
            <h4 className="card-title pt-2" >16% ROI</h4>
           </div>
           </div>
           </div>
           </div> 
                </div>
                {/* <div className='card'>
                    <div className='HomepageFunds'></div>
                </div>

                <div className='home-connect'>
                    <div className='HomepageConnect'></div>
                </div> */}
            
            </div>  
        
        </section>
    )
}
